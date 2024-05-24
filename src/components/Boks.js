import PropTypes from 'prop-types';
import React from 'react';
import styles from './Boks.module.css';




const Boks = ({title, price, children}) => {

    return (
    <>
        {price > 39.95 ? (
            <p className={styles.text}>
                Price:{price}</p>           
        ) : (
            <div className={styles.info}>
            Price:{price}, book is on sale</div>
        )}
        {title.length > 0 && (
            <div>Titles: {title} and {children} 
                <button type="button">Buy this book</button> 
            </div>
        )}
    </>
    )
}

Boks.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

export default Boks;

// Utworzyć komponent
// przekazać propsy
// Domyślna wartość propsów
// props.children 
// propTypes
// operatory warunkowe, logiczne, ternary
// zbiory i metoda .map !


//dodać styl wbudowany(1)
//Vanilla CSS(1)
//Napisać CSS-module
//Dodać do głównego css normalize


//przenieść plik z danymi do data/book.json
//wykorzystać style 