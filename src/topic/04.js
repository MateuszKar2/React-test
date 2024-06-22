`Formularze`
//zebranie informacji od użytkownika

`Kontrolowane elementy`
//Jeśli dane pól będą nam potrzebne w innych komponentach albo w momencie zmiany pola, 
//elementy formularza powinny byc kontrolawane czyli znajdować się w stanie.
//Otrzymujemy obiekt zamknięty: (1)po zdarzeniu, metoda klasy aktualizuje formularz, (2)po zmianie stanu zachodzi re-render (3)input otrzymuje zaaktualizowaną wartość
//Wadą takiego rozwiązania jest to że cały formularz zostanie przerenderowany

`Identyfikator dla elementów formularza`
//Atrybut for dla react htmlFor pomaga odczytać interfejs formularza
//Za pomoca nanoid tworzymu unikalne identyfikatory przechowywane na egzemplarzu(htmlFor)

`Pole wyboru`
//true/false
//aktualną wartość przekazujemy do pola checked
//obsługa zdarzenie onChange => event.target.checked
//value-inna wartość niż logiczna

`Pole wielu opcji`
//posiada name i checked

`Pole wyboru (select)`
//atrybut value oraz zdarzenie (onChange)

