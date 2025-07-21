export interface OfertaStaticDbI {
    id: number
    url: string
    alt: string
    currentPrice: number
    title: string
    shortDescription: string
    longDescription: string
    whatYouGet: string[]
    howLongConsultationTime: string
    startY?: number
    endY?: number
    show: boolean
    ogImage: string;
}

export const ofertaStaticDb: OfertaStaticDbI[] = [
    {
        id: 1,
        url: '/assets/konsultacja-wstepna.png',
        alt: 'Obrazek poglądowy przedstawiający konsultację wstępną.',
        currentPrice: 150,
        title: 'Konsultacja dietetyczna wstępna',
        shortDescription: `Konsultacja dietetyczna wstępna jest odpowiednim wyborem dla osób, które nie potrzebują spersonalizowanego jadłospisu, 
            ale oczekują pomocy w opracowaniu odpowiednich zaleceń żywieniowych, korekcję błędów oraz ustaleń planu ewentualnej suplementacji.`,
        longDescription: `Wstępna konsultacja dietetyczna jest jednorazowym spotkaniem online podczas którego
omówimy Twój aktualny sposób odżywiania oraz styl życia. Przeanalizuję wypełniony
kwestionariusz dietetyczny oraz dzienniczek żywieniowy. Zaproponuję zmiany, które należy
wdrożyć oraz plan przyszłych działań. Po zakończonej konsultacji dietetycznej otrzymasz
spersonalizowane zalecenia żywieniowe oraz rekomendacje dotyczące ewentualnej
suplementacji.`,
        whatYouGet: [
            'Omówienie i ocena dotychczasowego stylu życia i sposobu żywnienia',
            'Analiza kwestionariusza dietetycznego oraz dzienniczka żywieniowego',
            'Propozycja zmian, które należy wdrożyć',
            'Analiza historii zdrowia',
            'Analiza wyników badań laboratoryjnych',
            'Spersonalizowane zalecenia żywieniowe oraz rekomendacje dotyczące ewentualnej suplementacji',
        ],
        howLongConsultationTime: '45-60',
        startY: 100,
        endY: -100,
        show: true,
        ogImage: '/assets/og/konsultacja-wstepna.png'
    },
    {
        id: 2,
        url: '/assets/konsultacja-kontrolna.png',
        alt: 'Obrazek poglądowy przedstawiający konsultację kontrolną.',
        currentPrice: 100,
        title: 'Konsultacja kontrolna',
        longDescription: `Kontrolna konsultacja dietetyczna jest odpowiednim wyborem dla osób, które chcą
przeanalizować efekty współpracy. Podczas tego spotkania porozmawiamy o trudnościach,
które wystąpiły podczas stosowania zaleceń czy jadłospisu. Odpowiem na pytania oraz
wyjaśnię niejasności. Rozwiążemy również ewentualne problemy z dietą. Wyznaczymy
nowe cele do zrealizowania. Wprowadzimy zmiany do zaleceń żywieniowych, suplementacji
czy jadłospisu w razie wystąpienia takiej potrzeby.`,
        shortDescription: `Kontrolna konsultacja dietetyczna jest dla osób, które chcą sprawdzić efekty współpracy, rozwiązać trudności związane ze stosowaniem zaleceń lub jadłospisu, uzyskać odpowiedzi na pytania, wprowadzić zmiany w planie żywieniowym czy suplementacji oraz wyznaczyć nowe cele.`,
        whatYouGet: [
            'Analizę dotychczasowych efektów',
            'Omówienie trudności i problematycznych obszarów',
            'Odpowiedzi na pytania i rozwianie wątpliwości',
            'Indywidualne rozwiązania i wskazówki',
            'Aktualizację planu żywieniowego lub suplementacji',
            'Wyznaczenie nowych celów i dalszych kroków',
        ],
        howLongConsultationTime: '45-60',
        startY: 20,
        endY: -250,
        show: true,
        ogImage: '/assets/og/konsultacja-kontrolna.png'
    },
    {
        id: 3,
        url: '/assets/jadlospis-14dni.png',
        alt: 'Obrazek poglądowy przedstawiający 14-dniowy indywidualny jadłospis.',
        currentPrice: 200,
        title: 'Jadłospis indywidualny 14-dniowy',
        longDescription: `Twój indywidualny jadłospis układam na podstawie wypełnionego kwestionariusza
dietetycznego oraz dzienniczka żywieniowego. Jest on spersonalizowany dla Ciebie,
uwzględnia Twoje preferencje. Jadłospis indywidualny, to nie tylko posiłki, ale również
kompleksowe wsparcie w drodze do lepszego odżywiania oraz samopoczucia. Dzięki
doborze odpowiednich składników oraz starannemu zbilansowaniu posiłków, indywidualny
jadłospis stanowi klucz do osiągnięcia Twoich celów zdrowotnych oraz żywieniowych.`,
        shortDescription: `Indywidualny jadłospis jest odpowiednim wyborem dla osób, które mają trudności z
komponowaniem posiłków, brakiem pomysłu na nie oraz urozmaiceniem swojej
dotychczasowej diety.`,
        whatYouGet: [
            'Spersonalizowany jadłospis na 14 dni do powtarzania przez miesiąc',
            'Szczegółowe przepisy i instrukcje przygotowania posiłków',
            'Elastyczna lista produktów do zamienników i modyfikacji',
            'Praktyczna lista zakupów na cały plan',
            'Analiza Twoich nawyków i stylu życia',
            'Dopasowanie jadłospisu do Twoich celów i preferencji',
        ],
        howLongConsultationTime: '45-50',
        startY: -100,
        endY: -60,
        show: true,
        ogImage: '/assets/og/jadlospis-14.png'
    },
    {
        id: 4,
        url: '/assets/jadlospis-7dni.png',
        alt: 'Obrazek poglądowy przedstawiający 7-dniowy indywidualny jadłospis.',
        currentPrice: 150,
        title: 'Jadłospis indywidualny 7-dniowy',
        whatYouGet: [
            'Spersonalizowany jadłospis na 7 dni do powtarzania przez miesiąc',
            'Szczegółowe przepisy i instrukcje przygotowania posiłków',
            'Elastyczna lista produktów do zamienników i modyfikacji',
            'Praktyczna lista zakupów na cały plan',
            'Analiza Twoich nawyków i stylu życia',
            'Dopasowanie jadłospisu do Twoich celów i preferencji',
        ],
        shortDescription: `Indywidualny jadłospis jest odpowiednim wyborem dla osób, które mają trudności z
komponowaniem posiłków, brakiem pomysłu na nie oraz urozmaiceniem swojej
dotychczasowej diety.`,
        longDescription: `Twój indywidualny jadłospis układam na podstawie wypełnionego kwestionariusza
dietetycznego oraz dzienniczka żywieniowego. Jest on spersonalizowany dla Ciebie,
uwzględnia Twoje preferencje. Jadłospis indywidualny, to nie tylko posiłki, ale również
kompleksowe wsparcie w drodze do lepszego odżywiania oraz samopoczucia. Dzięki
doborowi odpowiednich składników oraz starannemu zbilansowaniu posiłków, indywidualny
jadłospis stanowi klucz do osiągnięcia Twoich celów zdrowotnych oraz żywieniowych.`,
        howLongConsultationTime: '45-50',
        startY: 600,
        endY: -200,
        show: true,
        ogImage: '/assets/og/jadlospis-7.png'
    },
    {
        id: 5,
        url: '/assets/pakiet.png',
        alt: 'Obrazek poglądowy przedstawiający pakiet dietetyczny.',
        currentPrice: 300,
        title: 'Pakiet dietetyczny',
        whatYouGet: [
            'Konsultacja dietetyczna wstępna (online)',
            'Analizę stylu życia i sposobu odżywiania',
            'Indywidualne zalecenia żywieniowe i suplementacyjne',
            'Indywidualny 7-dniowy jadłospis stosowany cyklicznie przez miesiąc',
            'Listę zakupów i instrukcję przygotowania posiłków',
            'Stały kontakt mailowy w trakcie współpracy',
            'Raporty kontrolne i możliwość modyfikacji planu',
        ],
        shortDescription: `Pakiet dietetyczny to miesięczna współpraca z dietetykiem. Jest to odpowiedni wybór dla
osób, które mają trudność z komponowaniem oraz urozmaicaniem swoich posiłków, chcą
poprawić swoje nawyki żywieniowe, skorygować błędy w odżywianiu, czy ustalić plan
suplementacji. Pakiet dietetyczny zawiera wstępną konsultację dietetyczną oraz jadłospis 7-
dniowy cyklicznie powtarzany przez miesiąc.`,
        longDescription: `
        Pakiet dietetyczny zawiera konsultację dietetyczną wstępną oraz jadłospis 7-dniowy
stosowany cyklicznie przez miesiąc. Podczas konsultacji onlinie omówimy Twój aktualny
sposób odżywiania oraz styl życia. Przeanalizuję wypełniony kwestionariusz dietetyczny oraz
dzienniczek żywieniowy. Zaproponuję zmiany, które należy wdrożyć oraz plan przyszłych
działań. W ciągu 7 dni roboczych od konsultacji wstępnej otrzymasz ode mnie
spersonalizowane zalecenia żywieniowe, rekomendacje dotyczące ewentualnej suplementacji
oraz indywidualny jadłospis wraz ze sposobem przygotowywania posiłków, listą produktów
umożliwiających modyfikację posiłków. Przez czas trwania współpracy pozostajemy w
stałym kontakcie mailowym, w przypadku pojawienia się pytań czy wątpliwości.
Dodatkowo, aby ulepszyć naszą współpracę, proszę o wysyłanie raportów kontrolnych. W
czasie trwania miesięcznego pakietu są ich dwa. Pierwszy po dwóch tygodniach, kolejny po 4
tygodniach licząc od momentu wysłania zaleceń i jadłospisu. Dzięki temu możemy lepiej
kontrolować postępy oraz wprowadzać ewentualne modyfikacje.
        `,
        howLongConsultationTime: '50-60',
        show: false,
        ogImage: '/assets/og/pakiet-7.png'
    },
]
