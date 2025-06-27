import { Resend } from 'resend'
import ContactFormEmailTemplate from '@/app/components/email/ContactFormEmailTemplate'
import { EmailBody } from '@/types/app'
import { cookies } from 'next/headers'

const resend = new Resend(process.env.API_KEY_RESEND)

export async function POST(req: Request) {
    const cookie = await cookies()

    if (cookie.get('email_submitting')) {
        return Response.json(
            { errorMessage: 'Wiadomość została już wysłana. Spróbuj ponownie za 24h.' },
            { status: 429 }
        )
    }
    try {
        const { message, topic, email, lastName, firstName } = (await req.json()) as EmailBody
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: process.env.MY_EMAIL_ADDRESS as string,
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
