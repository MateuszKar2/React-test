`Nawigacja`

//Nawigacje można stworzyc nie tylko po kliknięciu na Link, ale również po określonym działaniu użytkownika
//np.kliknięciu na przycisk, zdarzeniu, czy zapytaniu HTTP

//Pierwszy sposób to hook useNavigate -imperatywny
//Drugim sposobem jest hook Navigate, którym owijamy hook useNavigate -deklaratywny
//Trzecim sposobem jest funkcja riderect  -bez interakcji użytkownika


`łancuch zapytania`

//pozwala przekazywać stan aplikacji poprzez adres URL
//zaczyna sie od symbolu ? (1) dodaje parametry w formacie klucz-wartość (2) rozdzielone symbolem- & (3)

//hook- useSearchParams() - do odczytywania i wprowadzania zmian w łańcuchu zapytań. Przyjmuje dwa parametry:
// obiekt parametrów łancucha zapytań i funkcje aktualizującą obiekt zapytań
//Do otrzymania wartości parametrów istnieje metoda ,,URLSearchParams.get(key)"-(która oczekuje nazwy parametru, zwraca wartość a jeżeli jej nie ma null)

//Przytoczenie typów, jeżeli parametry to liczby lub boolean można to zrobic za pomoca wbudowanej klasy: Number(value), Boolean(value)
//Jeżeli parametrów jest wiele, wtedy możemy przekształcić parametry w obiekt i dokonać memoizacji

//Do zmiany wartości wykorzystujemy useSearchParams() - funkvja aktualizująca obiekt zapytań :)
//W bardziej zaawansowanych projektach przy aktualizacji parametrów możny dokonać efektu np. przesłać formularz

`Obiekt lokalizaji`

//Każdy zapis w stosie historii nawigacji. Obiekt składa się z : 
//pathname- od / do ?
//search- cały łancuch zapytania
//hash - od # do końca
//state- dowolna wartość, określana przez programiste, do przekazywania danych między ścieżkami
//key- identyfikator

//hook useLocation- używany np. gdy trzeba wykonać jakiś efekt przy zmianie lokalizacji(pozwala zamiast (1 => 2 = >3) --- (3 => 2 => 1/ 3=> 1)

//własciwość location.state (props state komponentu Link + obiekt z właściwością from) -
//pozwala przekazywac dowolne dane do nawigacji między jedną a druga scieżką


`Dzielenie kodu`

//Przy programowaniu na lokalnych serwerze predkość nie ma znaczenia ALE nie na ,,produkcji"

//Rozwiazaniem jest rozbicie kodu na mniejsze pliki i ładowanie ich tylko wtedy gdy sa potrzebne (dzielenie kodu!!!)
//np. przy pomocy Webpack
//dzielimy kod na podstawie routingu tzw. dzielenie wg. scieżek 
//w dużo wiekszych apkach dzielimy kod wg. komponentu 

//moduły ES sa statyczne tzn. że import/export wykonuje sie w czasie kompilacji, a nie w czasie wykonania kodu

//specyfikacja ES2020 dała nowe możliwości dynamicznego importowania modułu. 
//zwykły import zastepujemy funkcją import(), zwracająco promise, którego wartością będzie plik modulu

//React dostarcza API do tego, aby wskazać, jaki kod należy wydzielić do oddzielnego pliku, 
//a później ładować i renderować tylko w wypadku takiej potrzeby.

//Funkcja React.lazy() odpowiada za asynchroniczne ładowanie komponentu
//Suspense - zaslepka, do momentu załadowania pliku w React.lazy()

