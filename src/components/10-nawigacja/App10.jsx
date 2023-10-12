import { Navigate } from "./Navigate";
import { Login } from "./Login";
import { Chain } from "./Chain";


export const App10 = () => {
    <>
    <Login/>
    <Navigate/>
    <Chain/>
    </>
}

//React pozwala wykonać nawigację nie tylko po kliknięciu w link
//Pierwszy sposób to hook useNavigate(Login.jsx)
//Dostarcza nam funkcję navigate, do której przy wywołaniu przekazujemy ścieżkę określającą dokąd należy wykonać nawigację
//Drugi sposób to komponent Navigate(Navigate.jsx) - owinięcie hooka useNavigate. Wykonuje nawigację w momencie renderowania. 
//Ścieżka dla nawigacji i nieobowiązkowe parametry przekazywane są oddzielnymi propsami

//Łańcuch zapytania dodaje się do podstawowego URL, zaczyna się od symbolu ? 
//i zawiera jeden lub więcej parametrów w formacie "klucz-wartość" rozdzielone symbolem &.
//Dla odczytania i wprowadzania zmian w łańcuchach zapytania w React Router istnieje hook useSearchParams,