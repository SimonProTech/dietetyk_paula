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

    async function onSubmit(values: z.infer<typeof contactFormSchema>) {
        console.log(values)
        const data = await fetch('/api/send-email', {
            method: 'POST',
            body: JSON.stringify(values),
        })

        console.log(data)

        const res = await data.json()
        console.log(res)
    }

    const markBorderIfNotEmpty = (field: string) =>
        field !== '' ? 'border-[1px] border-gray-500' : 'border-b-[1px]'

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
                                    className={`${markBorderIfNotEmpty(field.value)} ${form.formState.errors.firstName ? 'border-[1px]' : ''} placeholder:text-[16px] placeholder:duration-500 shadow-none placeholder:transition-all transition-all duration-500 focus-visible:ring-0 ring-offset-0 dark:border-gray-500 border-gray-300 focus-visible:border-pink-500 hover:border-pink-500 py-8 md:text-lg hover:pl-10 pl-8 text-sm rounded-none`}
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
                                    className={`${markBorderIfNotEmpty(field.value)} ${form.formState.errors.lastName ? 'border-[1px]' : ''} placeholder:text-[16px] dark:border-gray- duration-500 md:hover:border-[1px] border-[1px] focus-visible:ring-0  placeholder:duration-500 dark:border-gray-500 border-gray-300 shadow-none focus-visible:border-pink-500 hover:border-pink-500 transition-all py-8 md:text-lg hover:pl-10 pl-8 text-sm rounded-none`}
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
                                    className={`${markBorderIfNotEmpty(field.value)} ${form.formState.errors.email ? 'border-[1px]' : ''} placeholder:text-[16px] placeholder:duration-500 duration-500 md:text-lg hover:border-[1px] focus-visible:ring-0 focus-visible:border-pink-500 hover:border-pink-500 transition-all dark:border-gray-500 shadow-none border-gray-300 py-8 hover:pl-10 pl-8 rounded-none`}
                                    placeholder="Podaj swój e-mail"
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
                            <FormLabel className="text-lg font-thin">
                                Wybierz temat rozmowy
                            </FormLabel>
                            <FormControl>
                                <Select>
                                    <SelectTrigger className="w-full focus:border-pink-500 overflow-hidden md:data-[placeholder]:text-lg text-sm data-[placeholder]:text-sm focus-visible:ring-1 dark:data-[placeholder]:text-white data-[placeholder]:text-black focus-visible:ring-black dark:border-gray-500 shadow-none border-gray-300 border-b-[1px] border-[1px] rounded-none transition-all md:text-lg  p-8">
                                        <SelectValue className="p-8" placeholder={field.value} />
                                    </SelectTrigger>
                                    <SelectContent className="z-[999999] relative">
                                        <SelectGroup>
                                            {topicsArray.map((item, index) => {
                                                return (
                                                    <SelectItem
                                                        className={`p-4 text-md`}
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
                                    className={cn(
                                        `focus-visible:border-pink-500  py-8 hover:pl-10 pl-8  hover:border-pink-500 duration-500 placeholder:text-[16px] transition-all focus-visible:ring-0 dark:border-gray-500 border-gray-300 min-h-40 max-h-80 text-inherit rounded-none md:text-lg`
                                    )}
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
                        className={`${cn('font-bold rounded-none hover:rounded-md dark:hover:text-white dark:hover:bg-pink-600 hover:bg-pink-400 transition-all duration-500 uppercase text-lg px-12 py-6 cursor-pointer')}`}
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
