
import PropTypes from 'prop-types';
export const ProductTwo = ({imgUrl, name, price}) => {
    return(
    <div>
        <img 
        src={imgUrl} 
        alt={name}
        width="320" />
        <h2>{name}</h2>
        <p>Price: {price}$</p>
        <button type="button">Add to cart</button>
    </div>
    )
}

ProductTwo.propTypes = {
    imgUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };