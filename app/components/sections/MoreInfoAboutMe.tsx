import React from 'react'

const MoreInfoAboutMe = () => {
    const currentYear = new Date().getFullYear()
    const yearsSince2023 = currentYear - 2023
    return (
        <section className="mt-40">
            <div className="container mx-auto pl-5 pr-5 relative">
                <div className="flex flex-col justify-between gap-28 w-full">
                    <h2 className="text-4xl font-thin text-center leading-16 ">
                        Jestem dyplomowaną dietetyczką, absolwentką Warszawskiego Uniwersytetu
                        Medycznego. Na co dzień pomagam budować zdrowe nawyki żywieniowe, wspierając
                        moich pacjentów w drodze do lepszego samopoczucia, większej energii i
                        trwałych efektów. Łączę wiedzę naukową z indywidualnym podejściem, bo
                        wierzę, że skuteczna dieta to taka, która pasuje do Ciebie ❤️
                    </h2>
                    <div className="flex items-center w-full gap-60 justify-center">
                        <div className="flex flex-col items-start space-y-2 relative">
                            <p className="text-6xl">{yearsSince2023}+</p>
                            <span className="text-lg">Lat doświadczenia</span>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p className="text-6xl">30+</p>
                            <span className="text-lg">Zadowolonych klientów</span>
                        </div>
                        <div className="flex flex-col  space-y-2">
                            <p className="text-6xl">100+</p>
                            <span className="text-lg">Ułożonych jadłospisów</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoreInfoAboutMe
