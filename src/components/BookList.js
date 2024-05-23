

const BookList = ({books}) => {
    return (
        <>
            <div>
                {books.map(book => (
                    <p key={book.id}>{book.id}.{book.name}</p>
                ))};
            </div>
        </>
    )
}

export default BookList;