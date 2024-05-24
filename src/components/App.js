import Boks from "./Boks";
import BookList from "./BookList";
// import data from '../data/book.json';
const bestBooks = [
    { id: "1", name: "Kamień Filozoficzny" },
    { id: "2", name: "Komnata Tajemnic" },
    { id: "3", name: "Więźień Askabanu" },
    { id: "4", name: "Czara Ognia" },
    { id: "5", name: "Zakon Feniksa" },
]

const App = () => {

    return (
        <>
            <Boks
            title="Harry Potter"
            price={37.99}
            >
            <BookList
            books={bestBooks}
            />
            </Boks>
        </>
    )
}

export default App;