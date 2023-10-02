import { useEffect, useRef, useState } from "react";


export const MyUseRef = () => {

    const [value, setValue] = useState(0);
    const btnRef = useRef();
 ////////////
    const valueRef = useRef(0);
//////////
    console.log(btnRef.current, 1);

    useEffect(() => {
        console.log(btnRef.current, 2);
    })

    const handleClick = () => {
        console.log(btnRef.current, 3);
    }


///////////
    useEffect(() => {
        // Wykona się tylko jeden raz po zamontowaniu.
        // Późniejsza aktualizacja wartości refa nie wywoła aktualizacji komponentu
        console.log(valueRef.current);
      });
    
      const handleClickTwo = () => {
        valueRef.current += 1;
      };
//////////////
    return(
        <>
            <button 
                onClick={() => setValue(value + 1)}>
                    re-render
            </button>
            <button 
                ref={btnRef} onClick={handleClick}>
                    Button with Ref
            </button>
            <button onClick={handleClickTwo}>
                Click to update ref value
            </button>
        </>
    )
}