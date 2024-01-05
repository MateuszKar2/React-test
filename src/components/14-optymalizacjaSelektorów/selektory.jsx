
//selektory to funkcje, które enkapsulują w sobie czytanie wartości ze stanu Redux. 
//W najprostszej formie oczekują bieżącego stanu Redux i zwracają jego niezbędną część.

const valueSelector = state => state.some.value;

// W komponentach wykozystujemy hook useSelector(selector), do którego przekazujemy odnośnik do funkcji selektora.

const value = useSelector(valueSelector);

//W ten sposób kompnenty nie wiedzą o formie stanu Redux i procesie obliczenia potrzebnej im wrtości. 
// Przy zmianie struktury stanu, należy zaktualizować tylko selektory, komponenty nie zostan ruszone. 
// Skraca to czas potrzebny do refaktoryzacji i zwiększa tolerancję na stres aplikacji. 
// Selektrory ograniczają również dublowanie kodu, jeżeli ten sam selektor jest wykorzystywany w kilku komponentach.

//W gruncie rzeczy selektory to warstwa abstrakcji, która minimalizuje związek między komponentami i storem Redux..