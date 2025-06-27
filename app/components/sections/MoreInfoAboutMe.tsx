import React from 'react'

const MoreInfoAboutMe = () => {
    const currentYear = new Date().getFullYear()
    const yearsSince2023 = currentYear - 2023
    return (
        <section className="md:mt-30 mt-5">
            <div className="lg:container mx-auto pl-5 pr-5 relative">
                <div className="flex flex-col items-center justify-between gap-28 w-full">
                    <h2 className="md:text-3xl text-2xl font-normal md:leading-16 leading-12  text-center ">
                        Jestem dyplomowaną dietetyczką{' '}
                        <div
                            className="
                            whitespace-nowrap
                            relative
                            pointer-events-none
                            align-bottom
                            rounded-2xl
                            text-left
                             md:w-24
                             w-18
                             md:h-14
                             h-11
                            inline-block
                            bg-[url('https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]
                            bg-no-repeat
                            bg-center
                            bg-cover
                        "
                        />{' '}
                        , absolwentką Warszawskiego Uniwersytetu Medycznego. Na co dzień pomagam
                        budować zdrowe nawyki żywieniowe, wspierając moich pacjentów{' '}
                        <div
                            className="
                            whitespace-nowrap
                            relative
                            pointer-events-none
                            align-bottom
                            rounded-2xl
                            text-left
                             md:w-24
                             w-18
                             md:h-14
                             h-11
                            inline-block
                            bg-[url('https://images.pexels.com/photos/2821823/pexels-photo-2821823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]
                            bg-no-repeat
                            bg-center
                            bg-cover
                        "
                        />{' '}
                        w drodze do lepszego samopoczucia, większej energii i trwałych efektów.
                        Łączę wiedzę naukową z indywidualnym podejściem, bo wierzę, że skuteczna
                        dieta{' '}
                        <div
                            className="
                            whitespace-nowrap
                            relative
                            pointer-events-none
                            align-bottom
                            rounded-2xl
                            text-left
                            w-24
                             md:h-14
                             h-11
                             hidden
                            md:inline-block
                            bg-[url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]
                            bg-no-repeat
                            bg-center
                            bg-cover
                        "
                        />{' '}
                        to taka, która pasuje do Ciebie{' '}
                        <div
                            className="
                            whitespace-nowrap
                            relative
                            pointer-events-none
                            align-bottom
                            rounded-2xl
                            text-left
                              md:w-24
                             w-18
                             md:h-14
                             h-11
                            inline-block
                            bg-[url('https://images.pexels.com/photos/4197491/pexels-photo-4197491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]
                            bg-no-repeat
                            bg-center
                            bg-cover
                        "
                        />{' '}
                        Nie musisz się ograniczać ani rezygnować z przyjemności — dobra dieta to
                        styl życia dopasowany do Twoich potrzeb.
                    </h2>
                    <div className="flex md:flex-row flex-col items-center w-full gap-20 lg:gap-60 justify-center">
                        <div className="flex flex-col items-start space-y-2 relative">
                            <p className="md:text-[7rem] text-8xl">{yearsSince2023}+</p>
                            <span className="text-lg">Lat doświadczenia</span>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p className="md:text-[7rem] text-8xl">30+</p>
                            <span className="text-lg">Zadowolonych klientów</span>
                        </div>
                        <div className="flex flex-col  space-y-2">
                            <p className="md:text-[7rem] text-8xl">100+</p>
                            <span className="text-lg">Ułożonych jadłospisów</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoreInfoAboutMe
