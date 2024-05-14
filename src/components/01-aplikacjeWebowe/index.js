//Kilka lat temu budowano kilka oddzielnych stron HTML, mało powiązanych ze sobą  - multi-page application, czyli:
//Zastosowanie architektury klijent-serwer, logika znajduje się na serwerze, przeładowanie po kożdym zapytaniu

//Współcześnie strony są dynamiczne, nie przechodzi się na oddzielne strony HTML. Interfejs dynamicznie zmienia się w przeglądarce
//Architektura klijent-serwer, każde kolejne zapytanie do serwera sprowadza się do wymiany danych w formacie JSON

//Biblioteka React służy do tworzenia elementów interfejsu użytkownika
//Nie ma routera, HTTP, nie pracuje bezpośrednio z drzewem DOM
//Zadaniem React jest opisanie interfejsu przy pomocy komponentów oraz zarządzanie zmianami danych

//VirtualDOM- abstrakcja zastępująca BrowserDOM(wydajność i responsywność cierpi przez częste aktualizacje).

//W React każdy element interfejsu to komponent zawierający props(właściwości) lub state(stan)
//Aktualizacja props lub state powoduje utworzenie nowego VirtualDOM

//npx- narzędzie upraszczające korzystanie z pakietów npm

//JSX - obrazowa składnia XML, rozszerzenie składni JS

//metody createRoot(container) i render(element): pierwsza tworzy korzeń, druga potrzebuje odnośnik co renderować? np.komponent

//Wyrażenie komponentu musi posiadać jednego rodzica, może być to tag lub tzw. fragment <> ... <>

//Komponent funkcyjny - funkcja JS + obiekt właściwości (props), zwraca drzewo elementów React

const MyFirstFunction = props => <div>Component</div>

//propsy - od rodzica do dziecka, zmiana propsów powoduje re-render, tylko do odczytu bez możliwści zmiany w dziecku