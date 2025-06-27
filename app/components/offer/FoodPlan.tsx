import React from 'react'
import Step from '@/app/components/offer/Step'

const FoodPlan = () => {
    return (
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
                <Step
                    number={1}
                    title="Spersonalizowany jadłospis"
                    description="Otrzymujesz indywidualny plan żywieniowy opracowany na 7 dni i stosowany cyklicznie przez miesiąc."
                    icon="heart"
                />
                <Step
                    number={2}
                    title="Sposób przygotowywania"
                    description="Każdy posiłek zawiera dokładny opis przygotowania, dzięki czemu gotowanie jest proste i szybkie."
                    icon="chef-hat"
                />
            </div>

            <div className="space-y-6">
                <Step
                    number={3}
                    title="Lista produktów"
                    description="Dostajesz listę produktów, które pozwalają na elastyczne modyfikacje posiłków."
                    icon="list"
                />
                <Step
                    number={4}
                    title="Lista zakupów"
                    description="Przejrzysta lista zakupów ułatwia planowanie i robienie codziennych zakupów spożywczych."
                    icon="shopping-cart"
                />
            </div>
        </div>
    )
}

export default FoodPlan
