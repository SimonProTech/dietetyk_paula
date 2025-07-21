import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from '@react-email/components'
import { EmailBody } from '@/types/app'


export const ContactFormEmailTemplate = ({
    message,
    email,
    topic,
    lastName,
    firstName,
}: EmailBody) => (
    <Html>
        <Head />
        <Preview>Nowa wiadomość od użytkownika serwisu dietetykpaulaantoniak.pl</Preview>
        <Body style={main}>
            <Container style={container}>
                <Img
                    src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/logo.png`}
                    width="170"
                    height="50"
                    alt="Logo serwisu dietetykpaulaantoniak"
                    style={logo}
                />

                <Text style={heading}>📥 Nowa wiadomość z formularza kontaktowego</Text>
                <Hr style={hr} />

                <Section style={section}>
                    <Text style={label}>👤 Imię i nazwisko:</Text>
                    <Text style={value && box}>
                        {firstName} {lastName}
                    </Text>

                    <Text style={label}>📧 E-mail użytkownika:</Text>
                    <Text style={value && box}>{email}</Text>

                    <Text style={label}>📝 Temat wiadomości:</Text>
                    <Text style={value && box}>{topic}</Text>

                    <Text style={label}>💬 Treść wiadomości:</Text>
                    <Text style={box}>{message}</Text>
                </Section>

                <Hr style={hr} />

                <Text style={footer}>
                    Wiadomość przesłana z serwisu{' '}
                    <a href={process.env.NEXT_PUBLIC_WEBSITE_URL}>dietetykpaula.pl</a>
                </Text>
            </Container>
        </Body>
    </Html>
)

export default ContactFormEmailTemplate

// Styles
const main = {
    backgroundColor: '#ffffff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    padding: '20px',
}

const container = {
    margin: '0 auto',
    padding: '24px',
    maxWidth: '800px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
}

const logo = {
    display: 'block',
    margin: '0 auto 20px',
}

const heading = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '12px',
}

const section = {
    padding: '16px 0',
}

const label = {
    fontSize: '14px',
    fontWeight: 'bold',
    marginTop: '12px',
    color: '#111827',
}

const value = {
    fontSize: '15px',
    color: '#374151',
    marginBottom: '8px',
}

const box = {
    backgroundColor: '#f9fafb',
    padding: '12px',
    borderRadius: '6px',
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#1f2937',
    whiteSpace: 'pre-line' as const,
    marginTop: '8px',
}
const hr = {
    borderColor: '#e5e7eb',
    margin: '24px 0',
}

const footer = {
    fontSize: '12px',
    color: '#6b7280',
    textAlign: 'center' as const,
}
