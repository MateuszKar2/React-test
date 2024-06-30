import Book from "./Book/Book";
import { useState, useEffect } from "react";

const favouriteBooks = [
    { id: "id-1", name: "Kamień Filozoficzny" },
    { id: "id-2", name: "Komnata Tajemnic" },
    { id: "id-3", name: "Wieźień Azkabanu" },
    { id: "id-4", name: "Czara Ognia" },
  ];


const App = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log(value);
    }, [value]);

    return (
        <>
            <h1>List of book</h1>
            <Book 
            books={favouriteBooks}            
            />
            <div>
                {value}
                <button type="button" onClick={() => setValue(value + 1)}>
                    Increment value by 1
                </button>
            </div>

        </>
    )
}

export default App;