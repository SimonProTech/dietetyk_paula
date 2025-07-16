interface FAQ {
    id: number
    question: string
    answer: string
}

const faqQuestion: FAQ[] = [
    {
        id: 1,
        question: 'Co to właściwie oznacza zmiana diety?',
        answer: 'Zmiana diety to proces świadomego dostosowania sposobu odżywiania w celu poprawy zdrowia, samopoczucia lub osiągnięcia konkretnych celów, np. redukcji masy ciała.',
    },
    {
        id: 2,
        question: 'Dlaczego warto zmienić swoją dietę?',
        answer: 'Zdrowa dieta może zwiększyć energię, poprawić odporność, zmniejszyć ryzyko chorób przewlekłych oraz pozytywnie wpłynąć na samopoczucie psychiczne.',
    },
    {
        id: 3,
        question: 'Jakie są kluczowe elementy zdrowej diety?',
        answer: 'Zdrowa dieta to różnorodność: dużo warzyw, owoców, pełnoziarnistych produktów, zdrowe tłuszcze (np. oliwa z oliwek, orzechy), chude białko (ryby, rośliny strączkowe) i unikanie przetworzonej żywności.',
    },
    {
        id: 4,
        question: 'Czy muszę całkowicie rezygnować z ulubionych potraw?',
        answer: 'Nie. Warto szukać zdrowszych wersji swoich ulubionych dań lub wprowadzać modyfikacje, które obniżą ilość cukru, soli czy tłuszczu nasyconego.',
    },
    {
        id: 5,
        question: 'Jak unikać uczucia głodu podczas zmiany diety?',
        answer: 'Jedz regularnie, wybieraj produkty bogate w błonnik (warzywa, pełnoziarniste zboża) i białko, które dają uczucie sytości. Pamiętaj o odpowiednim nawodnieniu.',
    },
    {
        id: 6,
        question: 'Jak długo zwykle trwa widoczna poprawa po zmianie diety?',
        answer: 'Pierwsze efekty, jak więcej energii czy lepszy sen, można zauważyć już po kilku tygodniach. Trwałe rezultaty, np. utrata wagi, wymagają zwykle kilku miesięcy regularnych zmian.',
    },
    {
        id: 7,
        question: 'Czy zmiana diety oznacza konieczność liczenia kalorii?',
        answer: 'Nie zawsze. Dla wielu osób wystarczy skupienie się na jakości jedzenia, wielkości porcji i uważnym jedzeniu. Liczenie kalorii może być pomocne, ale nie jest obowiązkowe.',
    },
    {
        id: 8,
        question: 'Co zrobić, gdy brakuje motywacji do trzymania się diety?',
        answer: 'Postaw na małe kroki i realistyczne cele. Znajdź wsparcie — np. dietetyka lub grupę wsparcia — i celebruj drobne sukcesy. Nie zniechęcaj się drobnymi potknięciami.',
    },
    {
        id: 9,
        question: 'Czy zmiana diety jest droga?',
        answer: 'Nie musi być. Sezonowe warzywa, rośliny strączkowe i lokalne produkty są często tańsze i zdrowsze niż gotowe dania czy fast foody.',
    },
    {
        id: 10,
        question: 'Jak zacząć zmianę diety, żeby się nie zniechęcić?',
        answer: 'Zacznij od jednej zmiany: np. jedz więcej warzyw, pij więcej wody lub ogranicz słodycze. Wprowadzaj zmiany stopniowo, by stały się nawykiem.',
    },
]

export default faqQuestion
