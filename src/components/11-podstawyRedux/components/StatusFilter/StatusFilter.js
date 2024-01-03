import { useSelector, useDispatch } from "react-redux"
import { setStatusFilter } from "components/11-podstawyRedux/redux/actions";
import { statusFilters } from "components/11-podstawyRedux/redux/constants"

export const statusFilters = () => {

  // Otrzymujemy odnośnik do funkcji wysyłania akcji
  const dispatch = useDispatch();

    const filter = useSelector(state => state.filters.status);

  // Wywołujemy generator akcji i przekazujemy wartość filtra
  // Wysyłamy wynik – akcja zmiany filtra
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

    return(
        <div>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
    )
}