`useContext`
//Dane sa przekazywane z góry na dół za pomoca propsów, ten hook pozwala nam ominąć tą zasadę
//Dane mogą być przekazane od dostawcy do użytkownika

//Owijamy nasz plik index.js lub App.js za pomocą komponentu <Context Provider (przekazując) value={}>
//Hook useContext() - działa w zalezności provider/consument
                    //useContext() wymusi re-render Komponentu przy każdej wykrytej zmianie kontekstu
                    //wartość kontekstu nie musi byc tylko statyczna, możemy również przekazywać dane dynamiczne


`useRef`
//Hook useRef() - w momencie utworzenia ma jedną wartość ,,current"
                 //wartość przypisane do ref.current bedzie stabilna i nie zmieniała się podczas rerenderów
                 //przypisanie refa do DOMu odbywa się poprzez atrybut ref
                 //Wartość refa jest dostępna dopiero po zamontowaniu
                 //Zmiana wartości ref nie wpływa na aktualizacje komponentu i nie wywołuje ponownego renderowania
                 //Przekazuje Ref() od rodzica do dziecka - forwardRef

`useMemo`
//Hook uzywany do zaawansowanych obliczeń, dużej ilości danych.
//Zapamiętuje wynik obliczeń liczb. Jeżeli liczby się nie zminiły, ponownie nie wykonuje działania. Tzwn. memoizacja.
//Np. mamy 1000 liczb, z których każdą mnożymy przez każdą 1 000 * 1 000= 1 000 000, przy zmianie jednej liczby, memoizacja powoduje że zostaje wykonane tysiąc obliczeń, a nie milion
//Przyjmuje dwa argumenty: funkcje i tablice zależności(useState), jeżeli tablica zależności jest pusta, używanie hooka jest bez sensu ponieważ render następuje za każdym razem

