//Akcje - to obiekty, które przekazują dane z komponentów do store, tym samym sygnalizując to,
// jakie zdarzenie zaszło w interfejsie. Są to jedyne źródła informacji dla store.

const action = {
    type: "Action type", // łańcuch, który opisuje typ zdarzenia w interfejsie.
    payload: "Payload value", // dane zazwyczaj przekazywane są w nieobowiązkowej właściwości 
};

import { nanoid } from "nanoid";

export const addTask = text => {
    return {
        type: "tasks/addTask",
        payload: {
            id: nanoid(),
            text: "User entered text",
            completed: false,
            text,
        },
    }
};

export const deleteTask = taskId => {
    return {
        type: "tasks/deleteTask",
        payload: "Task id",
    }
};

export const toggleCompleted = taskId => {
    return {
        type: "tasks/toggleCompleted",
        payload: "Task id",
    }
};

export const setStatusFilter = value => {
    return {
        type: "filters/setStatusFilter",
        payload: "Filter value",
    }
};

//Akcje powinny zawierać w sobie minimalny niezbędny zestaw informacji, wystarczający do zmiany statusu. Na przykład, 
//przy usunięciu zadania wystarczy przekazać jego identyfikator, a nie ogólnie cały obiekt zadania.