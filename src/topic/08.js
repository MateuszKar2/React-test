`useContext`
//Dane sa przekazywane z góry na dół za pomoca propsów, ten hook pozwala nam ominąć tą zasadę
//Dane mogą być przekazane od dostawcy do użytkownika

//Komponent Provider jest wykorzystywany do przekazania kontekstu od dostawcy do odbiorcy:

    //dostawca
//Owijamy nasz plik index.js lub App.js za pomocą komponentu <Context Provider (przekazując) value={}>

    //odbiorca
//Hook useContext() - zwraca wartość najbliższego provaidera, w przypadku zmiany wartości kontekstu,
                    //useContext() wymusi re-render Komponentu
