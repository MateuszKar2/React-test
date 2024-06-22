`zapytania HTTP`
//metody HTTP i cyklu życia współgrają ze sobą na każdym kroku

//(kod pisany w app)
//np.dodaje do state informacje o obecnej stronie
//przenosimy funkcjonalność odpowiedzialna za pobranie nowych paczek do odzielnej funkcji, pozwoli to nam użyć jej w componentDidMount i componentDidUpdate
//zabezpieczając się przed ciągłym re-renderem możemy skorzystac z shouldComponentUpdate
//dodajemy przycisk pozwalająćy zmienić stronę i funkcje pozwalającą obsłużyć kliknięcie
//co 10s. apka poprosi o nowy zestaw danych, dodajemy zmienną i modyfikujemy ComponentDidMount
//korzystamy z funkcji componentWillUnmount w celu zaprzestania działania setInterval() po odmontowaniu komponentu
