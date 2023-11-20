import { Navigate } from "./Navigate";
import { Login } from "./Login";
import { Chain } from "./Chain";
import { Location } from "./Location";


export const App10 = () => {
    <>
    <Navigate/>
    <Login/>
    <Chain/>
    <Location/>
    </>
}

//React pozwala wykonać nawigację nie tylko po kliknięciu w link
//Pierwszy sposób to hook useNavigate(Login.jsx)
//Dostarcza nam funkcję navigate, do której przy wywołaniu przekazujemy ścieżkę określającą dokąd należy wykonać nawigację
//Drugi sposób to komponent Navigate(Navigate.jsx) - owinięcie hooka useNavigate. Wykonuje nawigację w momencie renderowania. 
//Ścieżka dla nawigacji i nieobowiązkowe parametry przekazywane są oddzielnymi propsami

//Łańcuch zapytania dodaje się do podstawowego URL, zaczyna się od symbolu ? 
//i zawiera jeden lub więcej parametrów w formacie "klucz-wartość" rozdzielone symbolem &.
//Dla odczytania i wprowadzania zmian w łańcuchach zapytania w React Router istnieje hook useSearchParams(Chain)

//Każdy zapis w stosie historii nawigacji jest opisany obiektem lokalizacji (location) 
//ze standardowym zestawem właściwości, które przechowują pełną informację o URL. 

//Dzielenie kodu
//Podział kodu na kilka plików to zadanie modułu budującego projekt, na przykład Webpack, a nie frameworku frontend. 
//Create React App wewnętrznie wykorzystuje Webpack jak moduł budujący i wspiera dzielenie kodu bez dodatkowej konfiguracji.
//Dzielenie kodu na podstawie ścieżek jest obowiązkowe w dowolnej aplikacji.

dsafsdfsdfdsgf