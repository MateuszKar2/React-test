//Praca z danymi z backhendu


`Redux Asynchroniczny`
//Do operacji na nich wykorzystujemy zapytania HTTP- czy operacje asynchroniczne, obsługiwane przez promise tj.
//Proces zapytania- zapytanie pozytywne- zapytanie negatywne



`Operacje`
//Podczas wysyłania akcji, aby wykonać kod asynchroniczny trzeba stworzyć tzw. operacje - asynchroniczny generator akcji
//Operacja nie zwraca nam funkcji, ale funkcje która jako argument przyjmuje Dispatch
//Dla ułatwienia do zapytań korzystamy z biblioteki axios

`createAsyncThunk` //React Toolkit
//Powoduje ten sam efekt, ale oczywiście upraszcza kod
//Jako argumenty przyjmuje: typ akcji i funkcje-która powinna wykonać zapytanie HTTP, zwracając promise z danymi(wartość payload)

//+
//tworzy akcje reprezentujące cykl życiowy zapytania HTTP i wysyła je w prawidłowym porządku
//typ tworzonych akcji składa z łanuchu wskazanego jako pierwszy argument, (do którego dodaje się prefiksy)
//-
//nie tworzy reducera, więc nie może wiedzieć jak chcemy sledzić stan ładowania, jak zakończy się zapytnie orazjak je opracować
//dlatego należy opracowac nowe akcje- wykorzystujemy z właściwości: extraReduces
