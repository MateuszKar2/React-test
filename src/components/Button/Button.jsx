import { useEffect, useState } from "react";
import css from "./Button.module.css"

const Button = () => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        console.log('add new like')
    },[value]);

return (
    <div>  
        {value}
        <button type="button" onClick={() => setValue(value + 1)} className={css.button}>
            Like
        </button>
    </div>

);
}
export default Button;
