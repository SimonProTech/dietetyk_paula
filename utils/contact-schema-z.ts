import { z } from 'zod'

export const topicsArray = [
    'Chcę rozpocząć współpracę dietetyczną',
    'Potrzebuję pomocy w doborze diety',
    'Mam pytanie o konsultacje / pakiety',
    'Inne – opowiem więcej w wiadomości',
] as const

export const contactFormSchema = z.object({
    firstName: z.string().nonempty({ message: 'Podaj swoje imię' }),
    lastName: z.string().nonempty({
        message: 'Podaj swoje nazwisko',
    }),
    email: z.string().email({
        message: 'Podaj adres e-mail',
    }),
    topic: z.enum(topicsArray),
    message: z
        .string()
        .min(10, { message: 'Wiadomość nie może być krótsza niż 10 znaków.' })
        .max(500, {
            message:
                'Wiadomość nie może być dłuższa niż 500 znaków. Zachęcam do kontaktu mailowego.',
        }),
})
