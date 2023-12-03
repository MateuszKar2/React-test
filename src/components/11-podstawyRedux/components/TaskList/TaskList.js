import { useSelector } from "react-redux";
import { Task } from "components/Task/Task";


import { statusFilters } from "../StatusFilter/StatusFilter";


const getVisibleTasks = (tasks, statusFilters) => {
    switch ( statusFilters ) {
        case statusFilters.active:
            return tasks.filter(task => !task.completed);
        case statusFilters.completed:
            return tasks.filter(task => task.completed);
        default:
            return tasks;
    }
};

export const TaskList = () => {
    // Otrzymujemy tablicę zadań ze statusu Redux
    const tasks = useSelector(state => state.tasks);
    // Otrzymujemy wartość filtra ze statusu Redux
    const statusFilter = useSelector(state => state.filters.status);
    // Obliczamy tablicę zadań, które należy wyświetlić w interfejsie
    const visibleTasks = getVisibleTasks(tasks, statusFilter);
  
    return (
      <ul>
        {visibleTasks.map(task => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    );
  };