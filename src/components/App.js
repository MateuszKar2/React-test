import Book from "./Book/Book";
import Button from "./Button";

const favouriteBooks = [
    { id: "id-1", name: "Kamień Filozoficzny" },
    { id: "id-2", name: "Komnata Tajemnic" },
    { id: "id-3", name: "Wieźień Azkabanu" },
    { id: "id-4", name: "Czara Ognia" },
  ];


const App = () => {

    return (
        <>
            <h1>List of book</h1>
            <Book 
            books={favouriteBooks}            
            />
            <Button></Button>

        </>
    )
}

export default App;