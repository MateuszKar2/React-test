import ReactDOM from "react-dom/client";


const imageUrl = 
    "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";

const productPrice = 10.99;

const product = (
    <div>
        <img src={imageUrl} alt="Tacos" width="640" />
        <h2>Tacos with lime</h2>
        <p>Price: {productPrice}$</p>
        <button type="button">Add order</button>
    </div>
)

ReactDOM.createRoot(document.getElementById("root")).render(product);

/////////////////////////////////////////////Komponent Funkcyjny//////////////////////////////////////////////////

export const Tacos = props => {
    <div>
        <img 
        src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        alt="Tacos"
        width="640"
         />
         <h2>Tacos with lime</h2>
         <p>Price: {productPrice}$</p>
        <button type="button">Add order</button>
    </div>
}

