import {  useRef } from "react";
import { useUser } from "components/userContext";
import Ref from '../Ref/Ref';

const Movies = () => {

const { username } = useUser();

const btnRef = useRef();


    return(
        <>
            <h2>The best Movies</h2>
                <p>{username}</p>
                <button ref={btnRef}>Button with ref</button>
                <Ref/>
        </>
    );
};

export default Movies;