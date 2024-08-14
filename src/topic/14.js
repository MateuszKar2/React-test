` Optymalizacja selektorów`
//oczekują bierzącego stanu i zwracają jego niezbedną cześć(selektory proste)
//W komponentach wykorzystujemy hook useSelector(Selector)
//To warstwa abstrakcji miedzy komponentami a stanem

`Nazewnictwo`
//przedrostek select...(opis wybranej wartości)

`Selectory złożone`
//Selectory to zwykłe funkcje, tzn. można na nich wykonywać działania-(selektory złożone)
//Używać innych selektorów w selektorze

`Optymalizacja`
//Proste selektory aktualizują się tylko przy zmianie ich częsci stanu
//Złożone selektory zwracają obliczane wartości, te obliczenia uruchamiają się za każdym razem w trakcie aktualizacji stanu
//Wykorzystujemy tzw. memoizacje i wbudowaną funkcje createSelector
//(przyjmuje dwa argumenty-tablicę selektorów i funkcje konwerter w której będą wykonane wszystkie obliczenia)

