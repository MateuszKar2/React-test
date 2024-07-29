import { useState, useMemo} from "react";

const Ref = () => {

    const [movies, setMovies] = useState(["Hobbit", "Gwiezdne wojny", "Gladiator", "Avatar"]);
    const [query, setQuery] = useState("");
    const [click, setClick] = useState(0);

    const filteredMovies = useMemo(
    () => movies.filter(movie => movie.includes(query)),
    [movies, query]
);

return (
    <>
     <button onClick={() => setClick(click +1)}>
             Number of clicks: {click}
        </button> 
            <div>
                {filteredMovies.map(movie => {
            <div key={movie}>{movie}</div>
         })}
        </div>
    </>
)
}

export default Ref;