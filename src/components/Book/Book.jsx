import css from './Book.module.css';

const Book = ({books}) => {

    return(
        <>
            <ul className={css.books}>
                {books.map(book => (
                    <li key={book.id} className={css.book}>Harry Potter and {book.name}</li>
                ))}
            </ul>
        </>
    )

}

export default Book;