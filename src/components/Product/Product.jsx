import PropTypes from "prop-types"

export const Product = ({name, price, quantity, buttonText = "Add to cart"}) => {

  return (
  <div>
    <h2>{name}</h2>
    <p>Price: {price}</p>
    <h1>Quantity: {quantity < 20 ? "Few left" : "In stock"}</h1>
    <button type="button">{buttonText}</button>
  </div>)
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  buttonText: PropTypes.string
}

