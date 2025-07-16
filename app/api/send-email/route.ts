import { Resend } from 'resend'
import ContactFormEmailTemplate from '@/app/components/email/ContactFormEmailTemplate'
import { EmailBody } from '@/types/app'
import { cookies } from 'next/headers'
import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'

const resend = new Resend(process.env.API_KEY_RESEND)


const redis = Redis.fromEnv()

const ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(1, "24 h"),
})

export async function POST(req: Request) {
    const ip =
        req.headers.get("x-forwarded-for")?.split(",")[0] ??
        "unknown"
    const { success } = await ratelimit.limit(ip)
    const cookie = await cookies()

    if (cookie.get('email_submitting') && !success) {
        return Response.json(
            { errorMessage: 'Wiadomość została już wysłana. Spróbuj ponownie za 24h.' },
            { status: 429 }
        )
    }

    try {
        const { message, topic, email, lastName, firstName } = (await req.json()) as EmailBody
        const { data, error } = await resend.emails.send({
            from: process.env.WEBSITE_EMAIL as string,
            to: email,
            subject: topic,
            replyTo: email,
            react: ContactFormEmailTemplate({ message, topic, firstName, lastName, email }),
        })

        if (error || !data?.id) {
            return Response.json({ error }, { status: 500 })
        }

        cookie.set('email_submitting', 'true', {
            maxAge: 60 * 60 * 24,
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            path: '/',
        })
        return Response.json(data)
    } catch (error: any) {
        return Response.json({ error }, { status: 500 })
    }
}
