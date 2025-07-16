'use client'

import React, {  useEffect, useState } from 'react'
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
import { toast } from 'sonner'
import { LoaderCircle, MailCheck } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { contactFormSchema, topicsArray } from '@/utils/contact-schema-z'


export const ContactForm = () => {
    const intervalRef = React.useRef<NodeJS.Timeout | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [success, setIsSuccess] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [countTime, setCountTime] = useState<number>(15)
    const [bottomDivOpenWhenError, setBottomDivOpenWhenError] = useState<boolean>(false)
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
        if (isLoading) return
        try {
            setIsLoading(true)
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })
            const data = await response.json()


            if ((!response.ok || response?.status !== 200) && !data.error) {
                let errorMessage = ''
                if (response.status === 429) {
                    setTimeout(() => {
                        setCountTime(15)
                        setBottomDivOpenWhenError(true)
                        startCountdown()
                    }, 2000)
                    form.reset()
                    setErrorMessage(data.errorMessage)
                    errorMessage = data.errorMessage
                } else {
                    errorMessage = 'Błąd przy wysyłce e-maila.'
                }
                return toast.error(errorMessage)
            }
            setIsSuccess(true)
            form.reset()
            return toast.success('Twoja wiadomość została wysłana.')
        } catch (e: any) {
            return toast.error(e.message || 'Coś poszło nie tak. Spróbuj ponownie.')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (!success) return
        const successTimer = setTimeout(() => {
            setIsSuccess(false)
        }, 2000)
        return () => clearTimeout(successTimer)
    }, [success])

    useEffect(() => {
        if (!bottomDivOpenWhenError) return
        const errorMessageTimer = setTimeout(() => {
            setBottomDivOpenWhenError(false)
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
        }, 15000)
        return () => clearTimeout(errorMessageTimer)
    }, [bottomDivOpenWhenError])

    const startCountdown = () => {
        setBottomDivOpenWhenError(true)
        setCountTime(15)
        if (intervalRef.current) clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
            setCountTime((prev: number) => {
                if (prev <= 1) {
                    clearInterval(intervalRef.current!)
                    intervalRef.current = null
                    return 0
                }
                return prev - 1
            })
        }, 1000)
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
                                    autoComplete="off"
                                    className={`${markBorderIfNotEmpty(field.value)} ${form.formState.errors.firstName ? 'border-[1px]' : ''} placeholder:text-[16px] placeholder:duration-500 shadow-none placeholder:transition-all transition-all duration-500 focus-visible:ring-0 ring-offset-0 dark:border-gray-500 border-gray-300 focus-visible:border-pink-500 hover:border-pink-500 py-8 md:text-lg hover:pl-10 pl-8 text-sm rounded-none`}
                                    placeholder="Podaj swoje imię"
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
                                    autoComplete="off"
                                    className={`${markBorderIfNotEmpty(field.value)} ${form.formState.errors.lastName ? 'border-[1px]' : ''} placeholder:text-[16px] dark:border-gray- duration-500 md:hover:border-[1px] border-[1px] focus-visible:ring-0  placeholder:duration-500 dark:border-gray-500 border-gray-300 shadow-none focus-visible:border-pink-500 hover:border-pink-500 transition-all py-8 md:text-lg hover:pl-10 pl-8 text-sm rounded-none`}
                                    placeholder="Podaj swoje nazwisko"
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
                                    autoComplete="off"
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
                <div className="relative">
                    <AnimatePresence>
                        {bottomDivOpenWhenError && (
                            <motion.div
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -60, opacity: 0 }}
                                transition={{
                                    duration: 1.6,
                                    bounce: 0.5,
                                    type: 'spring',
                                }}
                                className="absolute top-0 left-0 right-0 dark:bg-pink-700 bg-pink-300 px-5 py-2 dark:text-white text-black"
                            >
                                {errorMessage} W razie dodatkowych pytań zachęcam do bezpośredniego
                                kontaktu na adres e-mail{' '}
                                <a
                                    className="font-bold rounded-full italic"
                                    target="_blank"
                                    href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
                                    rel="noreferrer"
                                >
                                    kontakt@dietetykpaula.pl (kliknij)
                                </a>
                                <span
                                    title="Czas do zamknięcia się okna"
                                    className="absolute z-50 text-white rounded-full p-1 dark:bg-pink-900 bg-pink-400 right-2 top-6 font-bold"
                                >
                                    {countTime}s
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <AnimatePresence>
                    {bottomDivOpenWhenError ? (
                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            className={`transition-all flex justify-center`}
                        >
                            <Button
                                className={`${cn(`font-bold rounded-none ${success ? 'rounded-md bg-green-500 dark:text-white hover:bg-green-600' : 'dark:hover:bg-pink-600 hover:bg-pink-400'}
                                  disabled:cursor-not-allowed disabled:rounded-md disabled:px-12 disabled:py-6 dark:disabled:bg-white/40 hover:rounded-md  transition-all duration-500 uppercase text-lg px-12 py-6 cursor-pointer`)}`}
                                size="lg"
                                disabled={isLoading}
                                type="submit"
                            >
                                {isLoading ? 'Trwa wysyłanie...' : success ? 'Wysłano' : 'Wyślij'}
                                {isLoading ? <LoaderCircle className="animate-spin" /> : null}
                                {success ? <MailCheck className="text-white" /> : null}
                            </Button>
                        </motion.div>
                    ) : (
                        <div className={`transition-all flex justify-center`}>
                            <Button
                                className={`${cn(`font-bold rounded-none ${success ? 'rounded-md bg-green-500 dark:text-white hover:bg-green-600' : 'dark:hover:bg-pink-600 hover:bg-pink-400'}
                                  disabled:cursor-not-allowed disabled:rounded-md disabled:px-12 disabled:py-6 dark:disabled:bg-white/40 hover:rounded-md  transition-all duration-500 uppercase text-lg px-12 py-6 cursor-pointer`)}`}
                                size="lg"
                                disabled={isLoading}
                                type="submit"
                            >
                                {isLoading ? 'Trwa wysyłanie...' : success ? 'Wysłano' : 'Wyślij'}
                                {isLoading ? <LoaderCircle className="animate-spin" /> : null}
                                {success ? <MailCheck className="text-white" /> : null}
                            </Button>
                        </div>
                    )}
                </AnimatePresence>
            </form>
        </Form>
    )
}
