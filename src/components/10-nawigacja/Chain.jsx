import { useSearchParams } from "react-router-dom";

export const Chain = () => {

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