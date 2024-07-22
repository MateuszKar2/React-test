`Komponenty funkcyjne`
//Jeżeli chcieliśmy skorzystać ze stanu lub metod cyklu życiowego musieliśmy wykorzystac komponet klasowy
//Komponenty funkcyjne były bardzo ograniczone, sprowadzone do renderowanie HTML zaleznie od propsów

//Dlatego stworzono:
`hooki- to proste funkcje z pomocą których można ,,doczepić się" do stanu i metod cyklu życiowego w komponentach funkcyjnych`
//Które rozwiązują wiele problemów:
//Trudność powtórnego wykorzystnia logiki ze stanem między komponentami
//Trudność wykorzystywania logiki w kilku metodach cyklu życiowego
//Brak możliwości rozbicia dużego komponentu na mniejsze ze względu na logikę związaną ze składnią klasy
//Osobliwości zwiazne z this oraz przywiązaniem kontekstu do funkcji (bind)

`useState`
//dzięki niemu w komponentach funkcyjnych pojawił się wewnętrzy stan 
//tworzy stan i metodę, która pozwala na zmianę jego wartości
//hook przyjmuje wartośc początkową jako argument ( wnaszym przypadku 0), może byc przechowywany dowolny typ danych ;)

//zwraca tablice, składająca się z dwóch elementów: 
//(1)bieżąca wartość stanu,
//(2)funkcja pozwalająca na aktualizacje stanu- mozna ją wykorzystać w dowolnym miejscu/ wykorzystując destrukturyzacje można nadać dowolna nazwę zmiennym

//w komponencie klasowym możemy utworzyc tylko jeden wspólny stan, 
//w funkcyjnym- dowolna ilość fragmentów stanu niezaleznych od siebie (nie wpływa to na wydajność) + dla funkcyjnego
//hooki można wywoływać tylko w ciele komponentu funkcyjnego (w innym wypadku wyrzuci błąd) - dla funkcyjnego

`useEffect`
//metody cyklu zyciowego pozwalają nam wykonywac operacje w różnych stadiach życia komponentu
//hook useEffect zawiera w sobie 3 najważniejsze metody cyklu życiowego: componentDidMount,componentDidUpdate, componentWillUnmount
//dzięki czemu możemy np.kierować zapytania o dane z backendu, dodawać subskrypcje wydarzeń itd...wykonywac w komponentach funkcyjnych

//przyjmuje dwa argumenty: callback i ,,zależności"-(jeżeli nie przekażemy tablicy zależnoscić , efekt będzie wykonywać się przy każdym renderowaniu komponetu)

//analogie: 
//ComponentDidMount(pusta tablica)- callback zostanie wykonany tylko w trakcie montowania komponentu i nigdy więcej
//ComponentDidUpdate(przekazanie zależności w tablicy)-zostanie wykonany przy montowaniu komponentu + przy zmianie jakiekolwiek zależności 
//ComponentWillUnmount(zwracamy kolejną funkcje(return))- wywołana podczas odmontowywania komponentu + przed każdym wywołaniem danego efektu/można usunąć subskrypcję zdarzeń, zatrzymać timery i anulować zapytania HTTP.

`własne hooki`
//hooki to funkcje, której nazwa powinna zaczynać się od przedrostka use