import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

const Autumn = () => {

const [searchParams, setSearchParams] = useSearchParams();
// const name = searchParams.get("name");
// const color = searchParams.get("color");
// const maxPrice = searchParams.get("maxPrice");


const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
);//memoizacja- przekształcenie metody get() w wygodny obiekt(przy kilku parametrach uzywanie metody get( może byc nie poręczne)


const {name, color, maxPrice} = params;

    return(
        <>
            <div>
                It's so brown.
                <p>Name: {name}</p>
                <p>Color: {color}</p>
                <p>MaxPrice: {maxPrice}</p>
            </div>
        </>
    )
}

export default Autumn;