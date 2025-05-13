'use client'

import React from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

const topicsArray = [
    'Chcę rozpocząć współpracę dietetyczną',
    'Potrzebuję pomocy w doborze diety',
    'Mam pytanie o konsultacje / pakiety',
    'Inne – opowiem więcej w wiadomości',
] as const

const contactFormSchema = z.object({
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

const ContactForm = () => {
    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            message: '',
            topic: 'Chcę rozpocząć współpracę dietetyczną',
            email: '',
        },
    })

    function onSubmit(values: z.infer<typeof contactFormSchema>) {
        console.log('1234')
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg font-thin">Imię</FormLabel>
                            <FormControl>
                                <Input
                                    className="placeholder:text-lg ring-0 focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-black focus:border-0 focus:ring-0 hover:placeholder:translate-x-2 placeholder:transition-all hover:border-[1px] transition-all p-8 border-0 border-b-[1px] rounded-none"
                                    placeholder="Podaj swoję imię"
                                    type="text"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg font-thin">Nazwisko</FormLabel>
                            <FormControl>
                                <Input
                                    className="placeholder:text-lg ring-0 focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-black focus:border-0 focus:ring-0 hover:placeholder:translate-x-2 placeholder:transition-all hover:border-[1px] transition-all p-8 border-0 border-b-[1px] rounded-none"
                                    placeholder="Podaj swoję nazwisko"
                                    type="text"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg font-thin">E-mail</FormLabel>
                            <FormControl>
                                <Input
                                    className="placeholder:text-lg ring-0 focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-black focus:border-0 focus:ring-0 hover:placeholder:translate-x-2 placeholder:transition-all hover:border-[1px] transition-all p-8 border-0 border-b-[1px] rounded-none"
                                    placeholder="Podaj swój email"
                                    type="email"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg font-thin">Temat rozmowy</FormLabel>
                            <FormControl>
                                <Select>
                                    <SelectTrigger className="w-full focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-black border-b-[1px] border-[1px] rounded-none transition-all text-md p-8">
                                        <SelectValue className="p-8" placeholder={field.value} />
                                    </SelectTrigger>
                                    <SelectContent className="z-[999999] relative">
                                        <SelectGroup>
                                            {topicsArray.map((item, index) => {
                                                return (
                                                    <SelectItem
                                                        className="p-4 text-md"
                                                        key={index}
                                                        value={item}
                                                    >
                                                        {item}
                                                    </SelectItem>
                                                )
                                            })}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg font-thin">Wiadomość</FormLabel>
                            <FormControl>
                                <Textarea
                                    className="placeholder:text-lg min-h-40 max-h-80 text-inherit border-[1px] rounded-none focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-black focus:border-0 focus:ring-0"
                                    placeholder="Twoja wiadomość..."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="mt-20 flex justify-center">
                    <Button
                        className={`${cn('font-bold rounded-none hover:rounded-md dark:hover:text-white hover:bg-pink-400 transition-all duration-500 uppercase text-lg px-12 py-6 cursor-pointer')}`}
                        size="lg"
                        type="submit"
                    >
                        Wyślij
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default ContactForm
