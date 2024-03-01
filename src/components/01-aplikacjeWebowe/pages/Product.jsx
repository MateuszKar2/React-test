export const Product = () => {

    const price = 14.99;
    const imgUrl = "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
return(

    <div>
        <img src={imgUrl} alt="Tacos" width="320" />
        <h2>Tacos</h2>
        <p>Price:{price}$</p>
        <button type="button">Add to Cart</button>
    </div>
)
}
