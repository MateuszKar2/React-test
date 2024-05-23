//Wprowadzenie do React

//Kilka lat temu strony budowano inaczej:
//Budowano kilka stron mało ze sobą powiązanych
//Wykorzystywano architekture klijent-serwer
//Logika znajdowała się na serwerze
//Przeładowanie strony po każym zapytaniu

//Teraz natomiast tworzy się strone dynamiczną bez ingerencji serwera
//Przeładowanie następuje na stronie startowej w przeglądarce
//Bez ponownego ładowania dokumentu
//Każde kolejne zapytanie do serwera sprowadza się jedynie do wymiany danych w formacie JSON


//Browser DOM- pozwala na przedstawienie dokumentu w postaci struktury drzewa
//Virtual DOM-abstrakcja, niedokładne odwzorowanie BrowseDOM
//Aktualizacja Props lub state powoduje utworzenie nowego drzewa DOM
//Dzięki powstaniu Virtual, drzewa są porównywane. Określana jest różnica. Dzięki temu Browser aktualizuje wyłącznie to różnicę, a nie całe drzewo


//JSX-rozszerzenie składni JS, przy pomocy którego opisuje się układ elementów na ekranie
//Zasada wspólnego rodzica(<></>)


//Komponenty-główne elementy architektoniczne React. 
//Największy plus jest taki że niezależnie od ich wielkości można z nich korzystać w różnych projektach.
//Komponent funkcyjny- otrzymuje props i zwraca drzewo elementów React
//Nazwa komponentu zaczyna się dużą literą
//Propsy przyjmują dowolne dane. Można je przekazywać tylko w dół. Zmieniać w rodzicu. Do odczytu w dziecku.
//Można nadac domyślną wartość propsom w dziecku
//props.children- można korzystac z propsów jednego komponentu w drugim komponencie
//propTypes- do sprawdzenia typów danych, w kodzie produkcyjnym nie ma potrzeby


//Operatory: logiczne (&& ||) warunkowe (if, else) ternary (? :)
//&& - if true every on right
//? : - if true -? if false -:


//Zbiory(tablice)
//Wykorzystuje się metodę .map
//Należy nadać klucz (stabilny i unikalny) - aby nie renderować tych samych kluczy
