'use client'

import React from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
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

    const markBorderIfNotEmpty = (field: string) => field !== '' ? 'border-[1px] border-gray-500' : 'border-b-[1px]'


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
                                    className={`${markBorderIfNotEmpty(field.value)} ${form.formState.errors.firstName ? 'border-[1px]' : 'border-0'} placeholder:text-lg ring-0 focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-black focus:ring-0 md:hover:placeholder:translate-x-2 placeholder:transition-all transition-all focus-visible:border-[1px] p-8 md:text-lg text-sm rounded-none`}
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
                                    className={`${markBorderIfNotEmpty(field.value)} ${form.formState.errors.lastName ? 'border-[1px]' : 'border-0'} placeholder:text-lg ring-0 focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-black focus:border-0 focus:ring-0 md:hover:placeholder:translate-x-2 placeholder:transition-all md:hover:border-[1px] transition-all focus-visible:border-b-0 p-8 md:text-lg text-sm rounded-none`}
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
                                    className={`${markBorderIfNotEmpty(field.value)} ${form.formState.errors.email ? 'border-[1px]' : 'border-0'} placeholder:text-lg ring-0 focus-visible:ring-offset-0 focus-visible:ring-1 md:text-lg focus-visible:ring-black focus:border-0 focus:ring-0 md:hover:placeholder:translate-x-2 placeholder:transition-all hover:border-[1px] transition-all focus-visible:border-b-0 p-8 border-b-[1px] rounded-none`}
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
                            <FormLabel className="text-lg font-thin">Wybierz temat rozmowy</FormLabel>
                            <FormControl>
                                <Select>
                                    <SelectTrigger
                                        className="w-full focus-visible:ring-offset-0 overflow-hidden md:data-[placeholder]:text-lg text-sm data-[placeholder]:text-sm focus-visible:ring-1 dark:data-[placeholder]:text-white data-[placeholder]:text-black text focus-visible:ring-black dark:border-gray-500 border-gray-500 border-b-[1px] border-[1px] rounded-none transition-all md:text-lg  p-8">
                                        <SelectValue className="p-8" placeholder={field.value} />
                                    </SelectTrigger>
                                    <SelectContent className="z-[999999] relative">
                                        <SelectGroup>
                                            {topicsArray.map((item, index) => {
                                                return (
                                                    <SelectItem
                                                        className={`p-4 text-md `}
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
                                    className={cn(`placeholder:text-lg dark:border-gray-500 border-gray-500 min-h-40 max-h-80 text-inherit rounded-none focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-black focus:border-0 focus:ring-0 md:text-lg`)}
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
