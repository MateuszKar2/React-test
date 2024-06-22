//Istaniej kilka stadiów życia komponentu: montowanie, aktualizacja i odmontowywanie

//Pomijając render i constructor wykorzystuje się trzy stadia życia komponentu (jest 7):

`Etap montowanie`
`constructor`
//wywoływany w momencie utworzenia egzemplarza klasy
//inicjalizuje stan początkowy komponentu
//przywiązuje kontekst this w metodach
//nie można w nim wywoływać setState
//w wiekszości wypadków jawne zadeklarowanie konstruktora nie jest potrzebne
//dodać (super) przed wywołaniem jakiegokolwiek kodu w konstruktorze

`render`
//pozwala deklaratywnie opisać interfejs
//zwraca rezultat wyrażń JSX, poddrzewo VirtualDOM
//nie można wywołać setState

`ComponetDidMount`
//wywołany po render, po zamontowaniu komponentu w drzewie DOM
//Torzymy zapytanie HTTP
//Wywołanie setState() spowoduje re-render(to normalne)
//Definiowany z przedrostkiem async lub bez nie go

`Etap aktualizacji`//w wyniku zmiany state komponentu lub przekazanych propsów. Prowadzi do re-renderu i wywołania poniższych stadiów
`ComponentDidUpdate`
//wywoływana zaraz po aktualizacji komponentu w DOM
//Nie wywołuje się podczas montowania
//Można wywołać setState, ale trzeba opakować w warunek sprawdzający poprzednie i następne props lub state
//Można robić zapytanie HTTP

`Etap odmontowywania`
`ComponentWillUnmount`//Gdy komponent jest usuwany z drzewa DOM - faza odmontywowania
//Wywołuje się tuż przed odmontowywaniem komponentu i usunięciem z drzewa DOM
//Nadaje się do ,,sprzątania po sobie": subskrypcji zdarzeń, liczników czasu, zapytań HTTP
//Nie ma sensu wywoływać setState, komponent nie będzie miał okazji do przerenderowania


