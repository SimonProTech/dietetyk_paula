import React from 'react'
import Step from '@/app/components/offer/Step'
import {
    CheckCircle,
    Clipboard,
    FileText,
    Mail,
    MessageCircle,
    Repeat,
    Target,
    Video,
} from 'lucide-react'

interface ConsultingI {
    title: string
}

const Consulting = ({ title }: ConsultingI) => {
    const steps = [
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
            title: 'Spotkanie online',
            description: 'Rozmawiamy przez Google Meet / Zoom trwa 45 - 60 minut.',
            icon: <Video className="text-pink-600 dark:text-pink-300" />,
        },
        {
            number: 5,
            title: 'Otrzymujesz podsumowanie',
            description: 'Po konsultacji dostajesz zalecenia, plan lub notatkę.',
            icon: <CheckCircle className="text-pink-600 dark:text-pink-300" />,
        },
        {
            number: 6,
            title: 'Kontakt mailowy',
            description: 'Masz możliwość zadania dodatkowych pytań po spotkaniu.',
            icon: <MessageCircle className="text-pink-600 dark:text-pink-300" />,
        },
    ]
    const followUpSteps = [
        {
            number: 1,
            title: 'Analiza efektów',
            description: 'Omówimy dotychczasowe rezultaty współpracy.',
            icon: <CheckCircle className="text-pink-600 dark:text-pink-300" />,
        },
        {
            number: 2,
            title: 'Rozwiązanie trudności',
            description: 'Przeanalizujemy problemy i trudności w stosowaniu zaleceń.',
            icon: <Clipboard className="text-pink-600 dark:text-pink-300" />,
        },
        {
            number: 3,
            title: 'Sesja pytań i odpowiedzi',
            description: 'Odpowiem na wszystkie Twoje pytania i wyjaśnię wątpliwości.',
            icon: <MessageCircle className="text-pink-600 dark:text-pink-300" />,
        },
        {
            number: 4,
            title: 'Indywidualne wskazówki',
            description: 'Otrzymasz praktyczne rozwiązania i rekomendacje.',
            icon: <FileText className="text-pink-600 dark:text-pink-300" />,
        },
        {
            number: 5,
            title: 'Aktualizacja planu',
            description: 'W razie potrzeby zmodyfikujemy jadłospis lub suplementację.',
            icon: <Repeat className="text-pink-600 dark:text-pink-300" />,
        },
        {
            number: 6,
            title: 'Nowe cele',
            description: 'Wyznaczymy kolejne kroki i cele do osiągnięcia.',
            icon: <Target className="text-pink-600 dark:text-pink-300" />,
        },
    ]
    return (
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
            {title.includes('kontrolna') ? (
                <>
                    <div className="space-y-6">
                        {followUpSteps.slice(0, 3).map((step, idx) => (
                            <Step
                                key={step.number}
                                {...step}
                                delay={idx * 0.3} // 0.3s opóźnienia na każdy kolejny krok
                            />
                        ))}
                    </div>
                    <div className="space-y-6">
                        {followUpSteps.slice(3, 6).map((step, idx) => (
                            <Step
                                key={step.number}
                                {...step}
                                delay={(idx + 3) * 0.3} // opóźnienie kontynuowane od poprzedniej grupy
                            />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <div className="space-y-6">
                        {steps.slice(0, 3).map((step, idx) => (
                            <Step
                                key={step.number}
                                {...step}
                                delay={idx * 0.3} // 0.3s opóźnienia na każdy kolejny krok
                            />
                        ))}
                    </div>
                    <div className="space-y-6">
                        {steps.slice(3, 6).map((step, idx) => (
                            <Step
                                key={step.number}
                                {...step}
                                delay={(idx + 3) * 0.3} // opóźnienie kontynuowane od poprzedniej grupy
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Consulting
