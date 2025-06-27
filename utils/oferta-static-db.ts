export interface OfertaStaticDbI {
    id: number
    url: string
    alt: string
    currentPrice: number
    title: string
    description: string
    whatYouGet: string[]
    howLongConsultationTime: string
    startY?: number
    endY?: number
    show: boolean
    howItLooks: string
}

export const ofertaStaticDb: OfertaStaticDbI[] = [
    {
        id: 1,
        url: '/assets/konsultacja-wstepna.png',
        alt: 'Obrazek poglądowy przedstawiający konsultację wstępną.',
        currentPrice: 150,
        title: 'Konsultacja dietetyczna wstępna',
        description: `Konsultacja dietetyczna wstępna jest odpowiednim wyborem dla osób, które nie potrzebują spersonalizowanego jadłospisu, 
            ale oczekują pomocy w opracowaniu odpowiednich zaleceń żywieniowych, korekcję błędów oraz ustaleń planu ewentualnej suplementacji.`,
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
        howItLooks: 'Wstęp',
    },
    {
        id: 2,
        url: '/assets/konsultacja-kontrolna.png',
        alt: 'Obrazek poglądowy przedstawiający konsultację kontrolną.',
        currentPrice: 150,
        title: 'Konsultacja kontrolna',
        description:
            'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
        whatYouGet: [''],
        howLongConsultationTime: '45-60',
        startY: 20,
        endY: -250,
        show: true,
        howItLooks: '',
    },
    {
        id: 3,
        url: '/assets/jadlospis-14dni.png',
        alt: 'Obrazek poglądowy przedstawiający 14-dniowy indywidualny jadłospis.',
        currentPrice: 150,
        title: 'Jadłospis indywidualny 14-dniowy',
        description: '',
        whatYouGet: [
            `Spersonalizowany jadłospis na 14 dni stosowany cyklicznie przez miesiąc`,
            'Lista produktów umożliwiających modyfikację posiłków',
            'Sposób przygotowania posiłków',
            'Listę zakupów',
        ],
        howLongConsultationTime: '45-50',
        startY: -100,
        endY: -60,
        show: true,
        howItLooks: '',
    },
    {
        id: 3,
        url: '/assets/jadlospis-7dni.png',
        alt: 'Obrazek poglądowy przedstawiający 7-dniowy indywidualny jadłospis.',
        currentPrice: 150,
        title: 'Jadłospis indywidualny 7-dniowy',
        whatYouGet: [
            'Spersonalizowany jadłospis na 7 dni stosowany cyklicznie przez miesiąc',
            'Lista produktów umożliwiających modyfikację posiłków',
            'Sposób przygotowania posiłków',
            'Listę zakupów',
        ],
        description: ``,
        howLongConsultationTime: '45-50',
        startY: 600,
        endY: -200,
        show: true,
        howItLooks: '',
    },
    {
        id: 4,
        url: '/assets/pakiet.png',
        alt: 'Obrazek poglądowy przedstawiający pakiet dietetyczny.',
        currentPrice: 150,
        title: 'Pakiet dietetyczny',
        whatYouGet: [
            'Konsultacja dietetyczna wstępna',
            'Stały kontakt mailowy w trakcie współpracy',
            'Indywidualny 7-dniowy jadłospis stosowany cyklicznie przez miesiąc',
        ],
        description: '',
        howLongConsultationTime: '45-50',
        show: false,
        howItLooks: '',
    },
]
