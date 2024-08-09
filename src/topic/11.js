`Podstawy Redux`
//Jedna z najpopularniejszych bibliotek do zarzadzania statusem aplikacji
//Mamy jedno źródło prawdy, zasady co do tego jak kod powinnien być ustrukturyzowany i wygodne narzedzia przeglądarki do podgladu

//Redux opiera się na architekturze Flux, który sugeruje podzielenie apki na kilka części:
//Stores-obiekt który zawiera pełen status aplikacji
//Actions-przekazują dane z komponentu do store (jednakowy- type, różny- payload)
//Selector-<useSelector> wszystkie funkcje selector tworzymy w oddzielnym pliku
//Reducer- to funkcja która przyjmuje bieżący status + akcje jako argumenty i zwraca nowy status

//Już nie musimy tworzyc komponentów -przewodników.
//Redux rozwiązuje ten problem za pomocą store (magazynu).
//który odpowiada za scentralizowane przechowywanie całego statusu i dostarcza zbiór zasad i metod do jego zmiany.
//Komponentom pozostaje wywołanie metody do aktualizacji danych i subskrypcja aktualizacji.
//W ten sposób Redux rozwiązuje problemy przekazywania propsów przez całe drzewo komponentów.
//Redux to tylko narzędzie, stworzone do dużych aplikacji, wymagającym dużo wysiłku nie wart małych projektów.

//Użytkownik => inicjalizuje wysłanie 'actions' => store wywołuje 'reducery' (przekazując im 'state' i 'action') =>
//store przechowuje zaktualizowany status, zwracany z 'reducerów' => przy aktualizacji 'state' renderują się zależne komponenty

//Przykład planu aplikacji
//1)Projektowanie statusu (store)- minimalny niezbędny status + <Provider> w App
//2)<useSelector> w komponencie (możemy otrzymać dowolne dane ze store) + funkcje 
//3)tworzenie actions + useDispatch(hook)-wysyła akcje
//4)rootReducer + kompozycja reducerów => combineReducers(to samo, ale krócej)





