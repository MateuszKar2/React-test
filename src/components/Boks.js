import PropTypes from 'prop-types';
import React from 'react';

const Boks = ({title, price}) => {
    return (
    <>
        <p>Title:{title}</p>
        <div>Price:{price}</div>
        <button type="button">Buy this book</button>
    </>
    )
}

export default Boks;

Boks.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

// Utworzyć komponent
// przekazać propsy
// Domyślna wartość propsów
// props.children +
// propTypes
// operatory warunkowe, logiczne, ternary
// zbiory i metoda .map


//dodać styl wbudowany(1)
//Vanilla CSS(1)
//Napisać CSS-module
//Dodać do głównego css normalize