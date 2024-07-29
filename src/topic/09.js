`Nawigacja`
//URL - odróznia aplikacje webowa od desktopowej, zmieniając go można wyswietlic kolejne strony aplikacji
//Routes - struktura nawigacji, należy owinąć route( nigdy nie może byc wykorzystywana po za routes)
//Route - pojedyncza ścieżka, pozwala powiązać URL z pojedynczym komponentem

//URL składa się z następującyh części:
// -prodokół                                    (1)
// -host 
// -ścieżka                                     (2)
// -parametr url 
// -? -początek łancucha zapytania              (3)
// -łancuch zapytania
// -para: parametr-wartość
// & -rozdziela parametry łanucha zapytania
// -# -określa położenie na stronie (kotwica)   (4)

//Historia nawigacji - wykorzystując możliwości i metody HTML5 możemy poruszać się do tyłu i do przodu po historii uzytkownika i manipulować jego zawartością

//W React nie ma wbudowanego Rutingu, dlatego:
//Korzysta się z React Router, który
//Zawiera zestaw hooków do
//Wtorzenia routingu
//Zarzadzania historią nawigacji
//Wyswietlania różnych komponentów w zależności od wartości URL

`Komponent BrowserRouter`
//centrum sterowania routingiem
//Owijamy całą aplikacje app

`Komponenty Routes i Route`
//Komponenty strony dla wygody trzymamy nie w src/components a src/pages
//Na końcu, dajemy jeszcze jeden route z symbolem * , który ma nas informować że strona na którą weszliśmy nie istnieje :)

`Komponenty Link vs NavLink`
//Tworzymy odnośniki do różnych stron naszej aplikacji wykorzystując komponent Link
//Navlink rózni się tym że otrzymuje klasę ".active", kiedy bieżacy URL pokrywa się z wartością propsa "to"- można to wykorzystac do zmiany stylów

`Parametry URL`

