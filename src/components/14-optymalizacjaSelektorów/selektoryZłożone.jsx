//Selektory to zwykłe funkcje, co znaczy, że można wykonywać w nich jakieś działania poza zwracaniem wartości. 
//Selektor może obliczać wartość, wykorzystując części statusu i zwracać wyniki obliczeń.

const selectTotalValue = state => {
    const a = state.values.a;
    const b = state.values.b;
    return a + b;
};



//Selektory, które tylko zwracają jakiś status, bez obliczeń uzupełniających, będziemy nazywać "prostymi",
// a te, które zwracają jakieś obliczone wartości - "złożonymi".

//Logika komponentu możemy przenieśc do selektora celem uproszenia działania aplikacji np.

//KROK 1 - komponent

import { useSelector } from "react-redux";
import { selectTasks, selectStatusFilter } from "redux/selectors";
import { statusFilters } from "redux/constants";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const statusFilter = useSelector(selectStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  // Render układu JSX
};


//Krok 2 - selektor- przeniesienie logiki 

import { statusFilters } from "./constants";

export const selectTasks = state => state.tasks.items;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;
export const selectStatusFilter = state => state.filters.status;

export const selectVisibleTasks = state => {
  // Wykorzystujemy inne selektory
  const tasks = selectTasks(state);
  const statusFilter = selectStatusFilter(state);

  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

//Krok 3 - komponent bez zbednego kodu 

// import { useSelector } from "react-redux";
// import { selectVisibleTasks } from "redux/selectors";

// export const TaskList = () => {
//   const tasks = useSelector(selectVisibleTasks);
// };

