import Book from '../Book/Book'
import Movies from "../Movies/Movies";

const favouriteBooks = [
    { id: "1", name: "Kamień Filozoficzny" },
    { id: "2", name: "Komnata Tajemnic" },
    { id: "3", name: "Wieźień Azkabanu" },
    { id: "4", name: "Czara Ognia" },
  ];

const MyHobby = () => {

    return(
        <>          
            <h1>List of book</h1>
            <Book 
            books={favouriteBooks}            
            />
            <Movies/>
        </>
    )
}

export default MyHobby;

