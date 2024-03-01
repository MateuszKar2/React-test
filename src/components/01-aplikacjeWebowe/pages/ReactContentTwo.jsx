
export const ReactContentTwo = () => {
    return(
        <>
            <div>
                11.Komponenty - główne elementy architektoniczne aplikacji React, z pomocą których interfejs można podzielić na niezależne części.
            </div>
            <div>
                12.Komponenty Funkcyjne- Komponent definiuje się jako funkcję JavaScript z bardzo prostym kontraktem: funkcja otrzymuje obiekt właściwości, który nazywa się props i zwraca drzewo elementów React.
            </div>
            <ul>
                13. Props- Komponenty przyjmują dowolne właściwości i zwracają elementy React, opisujące co powinno zostać wyrenderowane się w DOM
                <li>Propsy wykorzystuje się do przekazywania danych od rodzica do dziecka.</li>
                <li>Propsy przekazywane się tylko "w dół" drzewa (tylko od komponentu rodzica).</li>
                <li>Zmiana propsów spowoduje aktualizacje komponentu (tzw. re-render). W rezultacie może również zostać zaktualizowany DOM (jeżeli zwracany JSX zmienił się w wyniku aktualizacji props).</li>
                <li>Propsy są dostępne tylko do odczytu, nie można ich zmienić w komponencie dziecku.</li>
            </ul>
            <div>
                14.Właściwość children jest zawsze dostępna w każdym komponencie. Przyjmuje ona jako wartość elementy, które znajdą się pomiędzy otwierającym i zamykającym tagiem JSX.        
            </div>
            <div>
                15.Pakiet prop-types zawiera szereg walidatorów. Służą one do sprawdzania poprawności otrzymanych typów danych w czasie wykonywania kodu, powiadamiając o nieprawidłowościach w konsoli.
            </div>
            <div>
                16.Do renderowania elementów pod pewnym warunkiem wykorzystuje się operatory warunkowe (if, else), logiczne (&& i ||) oraz ternary (? : ).
            </div>
            <div>
                17.Warunki można sprawdzać przed instrukcją return lub bezpośrednio w JSX.
            </div>
            <div>
                18.Renderowanie warunkowe przy pomocy operatora logicznego &&, jeśli sprowadza się do true, wyrenderuj wszystko na prawo od operatora.
            </div>
            <div>
                19.Renderowanie warunkowe przy pomocy conditional ternary operator (? : )
                jeśli warunek sprowadza sie do true, wyrenderuj wszystko po ?, w przeciwnym razie wyrenderuj przekazaną wartość po :
            </div>
            <div>
                20.W celu wyrenderowania listy jednakowych elementów wykorzystuje się metodę Array.prototype.map(). Jako argument tej funkcji przekazujemy callback,
                 który dla każdego elementu tablicy zwróci element JSX. W ten sposób otrzymamy tablicę elementów React do wyrenderowania.
            </div>
            <div>
                21.Klucz (key) — to specjalny props, który należy przekazać w trakcie tworzenia elementów listy.
            </div>
        </>
    )
}