import React from 'react'
import Step from '@/app/components/offer/Step'

const Consulting = () => {
    return (
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
                <Step
                    number={1}
                    title="Skontaktuj się"
                    description="Napisz maila lub skorzystaj z formularza kontaktowego."
                    icon="mail"
                />
                <Step
                    number={2}
                    title="Otrzymujesz instrukcje"
                    description="Dostajesz informacje, jak opłacić i rozpocząć proces."
                    icon="file-text"
                />
                <Step
                    number={3}
                    title="Kwestionariusz i dzienniczek"
                    description="Wysyłam Ci potrzebne materiały, które uzupełniasz."
                    icon="clipboard"
                />
            </div>

            <div className="space-y-6">
                <Step
                    number={4}
                    title="Spotkanie online"
                    description="Rozmawiamy przez Google Meet / Zoom trwa 45 - 60 minut."
                    icon="video"
                />
                <Step
                    number={5}
                    title="Otrzymujesz podsumowanie"
                    description="Po konsultacji dostajesz zalecenia, plan lub notatkę."
                    icon="check-circle"
                />
                <Step
                    number={6}
                    title="Kontakt mailowy"
                    description="Masz możliwość zadania dodatkowych pytań po spotkaniu."
                    icon="message-circle"
                />
            </div>
        </div>
    )
}

export default Consulting
