import css from './Book.module.css';
import Button from 'components/Button/Button';

const Book = ({books}) => {

    return(
        <>
            <ul className={css.books}>
                {books.map(book => (
                    <li key={book.id} className={css.book}>Harry Potter and {book.name}<Button/></li>
                ))}
            </ul>
        </>
    )

}

export default Book;