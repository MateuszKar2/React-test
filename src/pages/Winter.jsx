import {Link, Outlet} from "react-router-dom";


const Winter = () => {

    return(
        <>
            <div>
                <div>
                    It's so white.
                </div>
                <h2>Why?</h2>
                    <ul>
                        <li>
                            <Link to="cold">How is cold?</Link>
                        </li>
                        <li>
                            <Link to="snow">Why snow is white?</Link>
                        </li>
                    </ul>
                <Outlet />
            </div>    

        </>
    )
}

export default Winter;