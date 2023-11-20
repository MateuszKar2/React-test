// Łańcuch zapytania i jego parametry to fundamentalny aspekt webu, ponieważ pozwala przekazywać stan aplikacji przez adres URL. 
// Łańcuch zapytania dodaje się do podstawowego URL, zaczyna się od symbolu ?
//  i zawiera jeden lub więcej parametrów w formacie "klucz-wartość" rozdzielone symbolem &.

// Dla odczytania i wprowadzania zmian w łańcuchach zapytania w React Router istnieje hook useSearchParams, 
// który reprezentuje nieduże owinięcie wbudowanej w przeglądarkę klasy [URLSearchParams]

//Dla otrzymania wartości parametrów istnieje metoda URLSearchParams.get(key), 
//która oczekuje nazwy parametru i zwraca jego wartość lub null, jeśli w łańcuchu zapytania nie ma takiego parametru.

import { useSearchParams } from "react-router-dom";

export const Products = () => {
    const [searchParams] = useSearchParams();//useSearchParams(), zwraca tablicę dwóch wartości- obiekt i funkcje aktualizacji łancuchu zapytania
    const name = searchParams.get("name");
    const color = searchParams.get("color");
    const maxPrice = searchParams.get("maxPrice");

    return(
    <div>
        <p>Name: {name}</p>
        <p>Color: {color}</p>
        <p>Maximum proce: {maxPrice}</p>
    </div>
    )
}

//Metoda get() zawsze zwróci łańcuch niezależnie od wartości parametru, który został wskazany w łańcuchu zapytania.
//?name=hoodie&maxPrice=500&inStock=true

// const [searchParams] = useSearchParams();

// const name = searchParams.get("name");
// console.log(name, typeof name);// "hoodie", string

// const maxPrice = searchParams.get("maxPrice");
// console.log(maxPrice, typeof maxPrice);// "500", string

// const inStock = searchParams.get("inStock");
// console.log(inStock, typeof inStock);// "true", string





// Jeżeli łańcuch zapytania zawiera kilka parametrów, to ciągłe wykorzystywanie metody get() może być niewygodne. 
// Sposób przekształcenia egzemplarza klasy URLSearchParams w zwykły obiekt z właściwościami.

// const [searchParams] = useSearchParams();
// const params = useMemo(
//   () => Object.fromEntries([...searchParams]),
//   [searchParams]
// );
// const { name, maxPrice, inStock } = params;





//Dla zmiany parametrów wykorzystujemy funkcję, którą useSearchParams zwraca jago drugi element tablicy.
// Należy jej przekazać obiekt nowych parametrów, który w pełni zamieni bieżący łańcuch zapytania.


// import { useSearchParams } from "react-router-dom";

// export const Products = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const name = searchParams.get("name");

//   return (
//     <div>
//       <h1>Products</h1>
//       <input
//         type="text"
//         value={name}
//         onChange={e => setSearchParams({ name: e.target.value })}
//       />
//     </div>
//   );
// };