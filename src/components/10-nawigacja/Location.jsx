// Każdy zapis w stosie historii nawigacji jest opisany obiektem lokalizacji (location)
//  ze standardowym zestawem właściwości, które przechowują pełną informację o URL.
//   Gdy użytkownik klika na odnośnik i przemieszcza się w aplikacji,
//  bieżąca lokalizacja zmienia się i dodawany jest nowy zapis do historii.



// Zwraca obiekt lokalizacji przedstawiający bieżący URL za każdym razem, 
// gdy przechodzimy po nowej ścieżce w Routingu lub aktualizujemy część bieżącego URL. 
// Jednym z zastosowań może być zadanie, gdzie należy wykonać jakiś efekt przy zmianie bieżącej lokalizacji.
//  Na przykład wysłanie danych na serwer analityki.

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom"

// export const Location = () => {
//     const location = useLocation();

//     useEffect(() => {
//         Analitycs.send(location);
//     }, [location]);
    
//     return(
//         <>
            
//         </>
//     )
// }