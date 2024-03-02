import { ReactContent } from "./ReactContent";
import { ReactContentTwo } from ".//ReactContentTwo";
import { Product } from "./Product";
import { ProductTwo } from "./ProductTwo";



export const Webowe = () => {
    return(
        <>
            <ReactContent></ReactContent>
            <Product></Product>
            <ProductTwo 
                imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
                price={18.99}
                name="Burger"
            />
            <ReactContentTwo></ReactContentTwo>
        </>
    )
}