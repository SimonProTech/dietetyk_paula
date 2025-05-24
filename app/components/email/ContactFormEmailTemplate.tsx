import React from 'react'
import { EmailBody } from '@/types/app'

const ContactFormEmailTemplate = ({ message }: Pick<EmailBody, 'message'>) => {
    return (
        <div>
            <p>{message}</p>
        </div>
    )
}

export default ContactFormEmailTemplate
