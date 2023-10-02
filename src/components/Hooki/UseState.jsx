
import { useState } from "react";

export const Book = () => {
    
    const [value, setValue] = useState(0);
    //const [thingsToRead, setThings ] =  useState([{ text: "Harry Potter"}])

//możemy utworzyćdowolną ilość nie zależnych od siebie fragmentu stanu
//Hooki nie mogą się wykonywać wewnątrz: cykli, warunków, zagnieżdzonych funkcji itp.


    return (
        <div>
          {value}
          <button type="button" onClick={() => setValue(value + 1)}>
            Reading pages
          </button>
        </div>
      );
    };
