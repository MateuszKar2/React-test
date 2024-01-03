

import { useDispatch } from "react-redux";
import { addTask, deleteTask, toggleCompleted} from "components/11-podstawyRedux/redux/actions";

//DODAWANIE ZADANIA
export const TaskForm = () => {
// Otrzymujemy odnośnik do funkcji wysyłania
    const dispatch = useDispatch();

const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
// Wywołujemy generator akcji i przekazujemy tekst zadania dla payload
// Wysyłamy wynik – akcję utworzenia zadania
    dispatch(addTask(form.elements.text.value));
    form.reset();
};


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="text" placeholder="Enter task text..." />
            <button type="submit">Add task</button>
        </form>
    )
}


//USUWANIE ZADANIA
export const Task = ({ task }) => {
    // Otrzymujemy odnośnik do funkcji wysyłania

    const dispatch = useDispatch();

    // Wywołujemy generator akcji i przekazujemy identyfikator zadania
    // Wysyłamy wynik – akcję usunięcia zadania

    const handleDelete = () => dispatch(deleteTask(task.id));

return (
    <div>
      <input type="checkbox" />
      <p>{task.text}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
    );
};


//PRZEŁĄCZANIE STATUSU

export const Taskk = ({ task }) => {
    // Otrzymujemy odnośnik do funkcji wysyłania akcji
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(toggleCompleted(task.id));

    // Wywołujemy generator akcji i przekazujemy identyfikator zadania
    // Wysyłamy wynik – akcję przełączania statusu zadania

    const handleToggle = () => dispatch(toggleCompleted(task.id));

    return (
        <div>
          <input type="checkbox" onChange={handleToggle} checked={task.completed} />
          <p>{task.text}</p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      );
    };

