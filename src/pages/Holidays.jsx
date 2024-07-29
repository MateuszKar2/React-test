import { useParams } from "react-router-dom";
import { getHobbyById} from "components/fakeAPI";

const Holidys = () => {

const { id } = useParams();
const hobby = getHobbyById(id);

    return(
        <>
            <div>
                <h2>
                    Hobby - {hobby.name} - {id}
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Accusantium ex magni explicabo cupiditate iste molestias, 
                    laudantium expedita architecto error ea cum? Tempora dolorum incidunt quod repellendus officiis? 
                    Hic ab, eum harum nihil omnis id odio. Earum sint officia eum.
                </p>
            </div>
        </>
    )
}

export default Holidys;