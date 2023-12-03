import { useSelector } from "react-redux"
import { statusFilters } from "components/11-podstawyRedux/redux/constants";
import { divide } from "lodash";

export const statusFilters = () => {

    const filter = useSelector(state => state.filters.status);


    return(
        <div>
            <Button selected={filter === statusFilters.all}>All</Button>
            <Button selected={filter === statusFilters.active}>Active</Button>
            <Button selected={filter === statusFilters.completed}>Completed</Button>
        </div>
    )
}