//Komponentowi TaskCounter niezbędna jest tablica zadań z właściwości tasks statusu Redux, 
//dlatego funkcja selektor będzie wyglądała jak state => state.tasks. 
//Na podstawie tych danych możemy obliczyć dane pochodne ilości aktywnych i wykonanych zadań.

// Importujemy hook
import { useSelector } from "react-redux";

export const TaskCounter = () => {

  // Otrzymujemy tablicę zadań ze statusu Redux
  const tasks = useSelector(state => state.tasks);

  // Na bazie stausu Redux otrzymujemy dane pochodne
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p>Active: {count.active}</p>
      <p>Completed: {count.completed}</p>
    </div>
  );
};