// Redux opiera się na architekturze Flux. Flux to zaproponowany przez Facebooka
// Sugeruje podzielenie aplikacji na następujące części:

// Stores
// Dispatcher
// Views
// Actions

//Komponenty otrzymują propsy tylko po to aby otrzymać props i przesłać go dalej do komponentu któremu dany props jest naprawde potrzebny
//Redux rozwiązuje ten problem poprzez utworzenie store(magazynu) który odpowiada za scentralizowanie przechowywania całego stanu
//Strumień danych w Redux jest jednokierunkowy od komponentów do store, od store do komponentów

//Użytkownik -
//=>  akcja  - opisywanie zmian przy pomocy obiektów
//=>  reducer - opracowywać zmiany przy pomocy czystych funkcji
//=>  store - prosta struktara danych

//edux to tylko narzędzie do zarządzania statusem aplikacji, 
// które przeznaczone jest do tego, aby pomóc odpowiedzieć na pytanie: "Kiedy i jak zmieniła się określona część statusu".