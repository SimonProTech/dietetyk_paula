import { Resend } from 'resend'
import ContactFormEmailTemplate from '@/app/components/email/ContactFormEmailTemplate'
import { EmailBody } from '@/types/app'


const resend = new Resend(process.env.API_KEY_RESEND)


export async function POST(req: Request) {
    const body = await req.json() as EmailBody

    try {
        const { data, error } = await resend.emails.send({
            from: body.email,
            to: process.env.MY_EMAIL_ADDRESS as string,
            subject: body.topic,
            react: ContactFormEmailTemplate({ message: body.topic }),
        })

        if (error) {
            return Response.json({ error }, { status: 500 })
        }

        return Response.json(data)
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}