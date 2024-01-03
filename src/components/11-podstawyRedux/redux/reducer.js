//W aplikacji zawsze będzie tylko jeden root reducer, który należy przekazać w createStore przy tworzeniu store'a.
// Ten reducer odpowiada za opracowywanie wszystkich wysłanych akcji i obliczanie nowego statusu.

import { statusFilters } from "./constants";

const initialState = {
    tasks: [
      { id: 0, text: "Learn HTML and CSS", completed: true },
      { id: 1, text: "Get good at JavaScript", completed: true },
      { id: 2, text: "Master React", completed: false },
      { id: 3, text: "Discover Redux", completed: false },
      { id: 4, text: "Build amazing apps", completed: false },
    ],
    filters: {
      status: statusFilters.all,
    },
  };
  
  export const rootReducer = (state = initialState, action) => {
    // Reducer realizuje akcje po wartości właściwości type
    switch (action.type) {
      // W zależności od rodzaju akcji będzie się wykonywała inna logika
      case "tasks/addTask": {
        // Należy zwrócić nowy obiekt statusu
        return {
          // w którym są wszystkie dane istniejącego statusu
          ...state,
          // i nowa tablica zadań
          tasks: [
            // w której są wszystkie istniejące zadania
            ...state.tasks,
            // i obiekt nowego zadania
            action.payload
          ],
        };

        //   case "tasks/deleteTask":
        //     return {
        //       ...state,
        //       tasks: state.tasks.filter(task => task.id !== action.payload),
             };

        
       
      default:
        // Każdy reducer otrzymuje wszystkie akcje wysłane do store.
        // Jeśli reducer nie powinien opracowywać jakiegoś typu akcji,
        // należy zwrócić istniejący status bez zmian.
        return state;
    }
  };

    //W trakcie inicjalizowania store (akcja @@INIT w Redux DevTools) do wszystkich reducerów w postaci wartości statusu przekazuje się undefined.
    // Dlatego dla każdego reducera należy wskazać wartość domyślną dla parametru state, która stanie się początkowym statusem aplikacji.