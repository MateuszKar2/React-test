export const BookList = ({ books }) => {
    return (
      <ul>
        {
          books.map(({id, name}, index) => (
            <li key={id}>
              {index + 1}{" "}{name}
            </li>
          ))
        }
      </ul>
    )
  }

  export default BookList;