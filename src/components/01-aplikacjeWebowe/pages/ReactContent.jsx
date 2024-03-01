


export const ReactContent = () => {
    return(
        <>
            <div>
                1. Technika, nazywana multi-page application
                Kilka lat temu wykorzystywane było podejście, w którym budowało się kilka oddzielnych stron HTML, mało powiązanych ze sobą.
            </div>
            <div>
                2. Single Page Application
                Współczesne podejście zakłada tworzenie stron dynamicznych, na których użytkownik nigdy nie przechodzi na inne strony HTML.
                Interfejs, zamiast otrzymywać kolejne dokumenty HTML z serwera, dynamicznie zmienia się w przeglądarce. Odbywa się to na tej samej stronie, bez ponownego ładowania dokumentu.
            </div>
            <div>
                3.React to biblioteka do tworzenia elementów interfejsu użytkownika. Nie ma ona wbudowanego routera, modułu do komunikacji przez HTTP itp.
                Tworząc aplikacje z wykorzystaniem React, programista nie pracuje bezpośrednio z drzewem DOM.
            </div>
            <div>
                <ul>4.React jest wieloplatformowy - komponenty można renderować również:</ul>
                <li>po stronie serwera(Node.js)</li>
                <li>natywnie w aplikacjach mobilnych(React Native)</li>
                <li>w aplikacjach desktopowych(Electron)</li>
            </div>
            <div>
                5.Browser DOM - pozwala na przedstawienie dokumentu HTML w postaci struktury drzewa, w którym węzły odpowiadają poszczególnym elementom. 
                Przechowywany jest on w przeglądarce i ma bezpośredni związek z tym, co widzimy na stronie.
                Po każdej zmianie w DOM przeglądarka wykonuje kilka skomplikowanych operacji. Dlatego częste aktualizacjie drzewa wpływają negatywnie na wydajność i responsywność (czas odpowiedzi) interfejsu.
                <div>
                    6.Odpowiedzią na powyższy problem jest VirtualDOM
                </div>
            </div>
            <div>
                7.W React każdy element interfejsu to komponent (niestandardowy lub wbudowany), którego stan zależy od właściwości (props) lub wewnętrznego stanu (state).
                Komponent to węzeł wirtualnego drzewa DOM. Interakcja użytkownika z interfejsem zmienia stan aplikacji.
                Aktualizacja stanu komponentu (props lub state) powoduje utworzenie nowego wirtualnego drzewa DOM.
                Następnie, wykorzystując algorytm (breadth-first), zachodzi porównanie (diffing) dwóch wirtualnych drzew przed i po aktualizacji.
            </div>
            <div>
                8.CreateReactApp narzedzie które ma całą potrzebną konfigurację wielu narzędzi takich jak: Node.js, Webpack, Babel
            </div>
            <div>
                9.npx — narzędzie pozwalające uprościć wykorzystywanie pakietów npm.
            </div>
            <div>
                <ul>10.JSX-Ta obrazowa składnia XML nazywana jest JSX- rozszerzenie składni JavaScript, przy pomocy którego opisuje się układ elementów, jakie chcemy zobaczyć na ekranie.</ul>
                <li>Wewnątrz JSX można wykorzystywać dowolne ważne wyrażenie, wkładając je w nawias klamrowy.</li>
                <li>Wartość atrybutów wskazuje się w dowolnym cudzysłowie, jeśli jest to zwykły wiersz i w nawiasie klamrowym, jeśli wartość jest obliczana lub jej rodzaj różni się od wiersza.</li>
                <li>Wszystkie atrybuty elementów React są nazywane w notacji camelCase</li>
            </div>
            <div>
                10.React wykorzystuje model relacji przodek- potomek, dlatego wystarczy tylko jedno wywołanie render() w aplikacji. Renderowanie górnego elementu w hierarchii pociągnie za sobą renderowanie całego poddrzewa.
            </div>
    
        </>
    )
}