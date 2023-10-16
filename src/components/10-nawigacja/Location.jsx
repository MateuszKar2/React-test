// Zwraca obiekt lokalizacji przedstawiający bieżący URL za każdym razem, 
// gdy przechodzimy po nowej ścieżce w Routingu lub aktualizujemy część bieżącego URL. 
// Jednym z zastosowań może być zadanie, gdzie należy wykonać jakiś efekt przy zmianie bieżącej lokalizacji.
//  Na przykład wysłanie danych na serwer analityki.

import { useEffect } from "react";
import { useLocation } from "react-router-dom"

export const Location = () => {
    const location = useLocation();

    useEffect(() => {
        Analitycs.send(location);
    }, [location]);
    
    return(
        <>
            
        </>
    )
}