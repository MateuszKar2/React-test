`Uzytkownicy`

`Konta`
//Pracujemy z nimi w apkach, zarówno na frontendzie jak i backhendzie
//Powinny dawać możliwość zalogowania się, ale tylko upoważnionych użytkownikom

`Uprawnienia dostepu`
//Odbywa się na backhendzie, opisany dwoma terminami, w zależności od poziomu uprawnień:

//Uwierzytelnianie-to proces sprawdzenia uprawnień dostępu urzytkownika, poprzez porównanie ich z zapisanymi danymi w bazie danych

//Autoryzacja-to sprawdzenie uprawnien użytkownika do konkretnych zasobów, zasaobem może być dowolna wartość

`JWT(JSON Web Token)`
//Środek autoryzacji dla każdego zapytania od frontedu do backhendu
//Tworzone na backhendzie oparte na sekretnym kluczu + unikalne dane dla użytkownika np.email
//Przechowywany na frontendzie, wykorzystywany do autoryzacji dla każdego zapytania

//Każdy token zawiera:nagłówek(header), zbiór pól(payload) i sygnaturę
//Próba podmiany danych w header lub payload- uniewarznia token
//Mozliwości wygenerowania nowej sygnatury nie ma- ponieważ ona znajduje się tylko na backhendzie


