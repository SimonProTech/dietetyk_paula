import React from 'react'
import Step from '@/app/components/offer/Step'
import {
    ChefHat,
    Clipboard,
    FileText,
    Heart,
    HeartIcon,
    List,
    Mail,
    MessageCircle,
    ShoppingBasket,
} from 'lucide-react'

interface FoodPlanI {
    title: string
}

const FoodPlan = ({ title }: FoodPlanI) => {
    const days: '14' | '7' = title.includes('14') ? '14' : '7'
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
            title: 'Spersonalizowany jadłospis',
            description: `Otrzymujesz indywidualny plan żywieniowy opracowany na ${days} dni i stosowany cyklicznie przez miesiąc.`,
            icon: <HeartIcon className="dark:text-pink-300 text-pink-600" />,
        },
    ]

    const rightSteps = [
        {
            number: 5,
            title: 'Instrukcja przygotowania',
            description:
                'Każdy posiłek ma prosty opis przygotowania, aby gotowanie było szybkie i wygodne.',
            icon: <ChefHat className="dark:text-pink-300 text-pink-600" />,
        },
        {
            number: 6,
            title: 'Lista produktów',
            description: 'Dostaniesz listę produktów, dzięki której możesz modyfikować posiłki.',
            icon: <List className="dark:text-pink-300 text-pink-600" />,
        },
        {
            number: 7,
            title: 'Lista zakupów',
            description: 'Przejrzysta lista zakupów ułatwi planowanie i codzienne zakupy.',
            icon: <ShoppingBasket className="dark:text-pink-300 text-pink-600" />,
        },
        {
            number: 8,
            title: 'Wsparcie mailowe',
            description: 'Masz możliwość zadania dodatkowych pytań mailowo w trakcie współpracy.',
            icon: <MessageCircle className="dark:text-pink-300 text-pink-600" />,
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

export default FoodPlan
