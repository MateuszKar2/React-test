`Podstawy Redux`
//Jedna z najpopularniejszych bibliotek do zarzadzania statusem aplikacji
//Dzieki nie mu, mamy mamy jedno źródło prawdy, zasady co do tego jak kod powinnien być ustrukturyzowany i wygodne narzedzia przeglądarki do podgladu

//Redux opiera się na architekturze Flux, który sugeruje podzielenie apki na kilka części:
//Stores
//Dispatcher
//Views
//Actions

//Sposób przekazywania propsów, powoduje że nie które komponenty wchodzą w role ,,przewodników"
//Na początku przeżucamy metodę zmiany statusu, później sam status - Koniec z tym. We have Redux ;)

//Redux rozwiązuje ten problem za pomocą store (magazynu)
//który odpowiada za scentralizowane przechowywanie całego statusu i dostarcza zbioru zasad i metod do jego zmiany
//Komponentom pozostaje wywołanie metody do aktualizacji danych i subskrypcja aktualizacji.
//W ten sposób Redux rozwiązuje problemy przekazywania propsów przez całe drzewo komponentów.

//Redux to tylko narzędzie, które przydaje się gdy w apce, zarzadzanie statusem jest nie do ogarniecia, w innym wypadku trudno dostrzec plusy jego użycia








