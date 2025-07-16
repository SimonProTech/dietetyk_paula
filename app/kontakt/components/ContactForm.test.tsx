import { describe, it, expect, beforeAll, afterEach, afterAll, vi } from 'vitest'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { ContactForm } from '@/app/kontakt/components/ContactForm'
import { Toaster } from 'sonner'

interface BODYI {
    firstName: string,
    lastName: string,
    email: string,
    topic: string
    message: string
}

// Mock serwera API
const server = setupServer(
    http.post('/api/send-email', async ({ request }) => {
        const body = await request.json() as BODYI
        if (body && !body.email) {
            return new HttpResponse(null, { status: 400 })
        }
        console.log(body)
        return HttpResponse.json({ message: 'OK' }, { status: 200 })
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('ContactForm', () => {
    it('wysyła formularz i pokazuje sukces', async () => {
        render(
            <>
                <ContactForm />
                <Toaster/>
            </>
        )

        fireEvent.change(screen.getByPlaceholderText(/Podaj swoje imię/i), {
            target: { value: 'Jan' },
        })
        fireEvent.change(screen.getByPlaceholderText(/Podaj swoje nazwisko/i), {
            target: { value: 'Kowalski' },
        })
        fireEvent.change(screen.getByPlaceholderText(/Podaj swój e-mail/i), {
            target: { value: 'jan@example.com' },
        })
        fireEvent.change(screen.getByPlaceholderText(/Twoja wiadomość/i), {
            target: { value: 'To jest testowa wiadomość.' },
        })

        fireEvent.click(screen.getByText(/Wyślij/i))

        expect(await screen.findByText('Twoja wiadomość została wysłana.')).toBeDefined()

    })
    it('wysyła formularz i pokazuje bład', async () => {
        render(
            <>
                <ContactForm />
                <Toaster/>
            </>
        )

        fireEvent.change(screen.getByPlaceholderText(/Podaj swoje imię/i), {
            target: { value: 'Jan' },
        })
        fireEvent.change(screen.getByPlaceholderText(/Podaj swoje nazwisko/i), {
            target: { value: 'Kowalski' },
        })
        fireEvent.change(screen.getByPlaceholderText(/Podaj swój e-mail/i), {
            target: { value: '' },
        })
        fireEvent.change(screen.getByPlaceholderText(/Twoja wiadomość/i), {
            target: { value: 'To jest testowa wiadomość.' },
        })

        fireEvent.click(screen.getByText(/Wyślij/i))

        expect(await screen.findByText('Podaj adres e-mail')).toBeDefined()

    })
})
