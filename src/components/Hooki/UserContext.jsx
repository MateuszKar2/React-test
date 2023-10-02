
//Nie wykorzystuj kontekstu, aby uniknąć przekazywania propsów kilka poziomów w dół.
//Ten mechanizm przeznaczony jest dla wąskiego spektrum zadań.

import { createContext, useState } from "react";


const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState(null);

const  logIn = () => {
    setIsLoggedIn(true);
    setUsername("Mango");
    };
const logOut = () => {
    setIsLoggedIn(false);
    setUsername(null);
    };
return(
    <UserContext.Provider value={{isLoggedIn, username, logIn, logOut}}>
        {children}
    </UserContext.Provider>
);
};



