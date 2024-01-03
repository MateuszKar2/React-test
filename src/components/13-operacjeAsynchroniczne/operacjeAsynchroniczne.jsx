//Do tej pory pracowaliśmy z danymi lokalnymi, które były przechowywane w pamięci zakładki przeglądarki lub w lokalnym magazynie.
// W praktyce ogromna większość danych aplikacji przechowywana jest w bazie danych w backendzie i jakiekolwiek operacje na nich są wykonywane przy pomocy zapytania HTTP.

//Zapytania HTTP to operacje asynchroniczne, które reprezentowane są przez promisy, dlatego można je rozbić na trzy składowe: 
//proces zapytania (pending), 
//pomyślne zakończenie zapytania (fulfilled) 
//zakończenie zapytania z błędem (rejected)