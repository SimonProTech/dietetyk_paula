import React from 'react'
import Step from '@/app/components/offer/Step'
import { BarChart2, Calendar, Clipboard, FileText, Mail, ShoppingCart } from 'lucide-react'

export const FullPlan = () => {
    const leftSteps = [
        {
            number: 1,
            title: 'Skontaktuj się',
            description: 'Napisz maila lub skorzystaj z formularza kontaktowego.',
            icon: <Mail className="text-pink-600 dark:text-pink-300" />,
        },
        {
            number: 2,
            title: 'Otrzymujesz instrukcje',
            description: 'Dostajesz informacje, jak opłacić i rozpocząć proces.',
            icon: <FileText className="text-pink-600 dark:text-pink-300" />,
        },
        {
            number: 3,
            title: 'Kwestionariusz i dzienniczek',
            description: 'Wysyłam Ci potrzebne materiały, które uzupełniasz.',
            icon: <Clipboard className="text-pink-600 dark:text-pink-300" />,
        },
        {
            number: 4,
            title: 'Konsultacja dietetyczna wstępna (online)',
            description: 'Omówienie Twojego stylu życia i sposobu odżywiania.',
            icon: <Mail className="text-pink-600 dark:text-pink-300" />,
        },
    ]
    const rightSteps = [
        {
            number: 5,
            title: 'Indywidualny 7-dniowy jadłospis',
            description: 'Jadłospis stosowany cyklicznie przez miesiąc.',
            icon: <Calendar className="text-pink-600 dark:text-pink-300" />,
        },
        {
            number: 6,
            title: 'Lista zakupów i instrukcje przygotowania',
            description: 'Ułatwienia dla planowania i gotowania posiłków.',
            icon: <ShoppingCart className="text-pink-600 dark:text-pink-300" />,
        },
        {
            number: 7,
            title: 'Stały kontakt mailowy',
            description: 'Wsparcie i możliwość zadawania pytań w trakcie współpracy.',
            icon: <Mail className="text-pink-600 dark:text-pink-300" />,
        },
        {
            number: 8,
            title: 'Raporty kontrolne',
            description:
                'Dwa raporty w trakcie miesiąca umożliwiające monitorowanie postępów i modyfikacje planu.',
            icon: <BarChart2 className="text-pink-600 dark:text-pink-300" />,
        },
    ]
    return (
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
                {leftSteps.map((step, idx) => (
                    <Step key={step.number} {...step} delay={idx * 0.3} />
                ))}
            </div>

            <div className="space-y-6">
                {rightSteps.map((step, idx) => (
                    <Step key={step.number} {...step} delay={(idx + leftSteps.length) * 0.3} />
                ))}
            </div>
        </div>
    )
}
