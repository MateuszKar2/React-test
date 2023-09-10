
export const Product = ({myCheese, name, price, buttonText = "Remove to cart"}) => {

    return (
        <div>
            <img src={myCheese} alt={name} width="640"/>
                <h2>{name}</h2>
                <p>Price: {price}</p>
                <button type="button">{buttonText}</button>
        </div>
    )
}

export default Product;