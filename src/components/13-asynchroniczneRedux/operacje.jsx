

const taskSlice = {
    name: "tasks",
    initialState: {
        items: [], //W przypadku true, odrzucamy wartość właściwości error, i zapisujemy w items otrzymane dane z action.payload - tablica zadań.
        isLoading: false, //true -na starcie zapytania i false w innym wypadku
        error: null, //przy false, zmieniamy wartość właściwości zapisując to co przyjdzie w ,,action.payload"- informacje o błędzie
    },
    reducers: {
                //Wskaźnik ładowania
        fetchingInProgress(state) {
            state.isLoading = true;
        },
                //Opracowywanie danych
        fetchingSuccess() {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
                //Opracowywanie błędu
        fetchingError() {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
};

export const { fetchingInProgress, fetchingSuccess, fetchingError } = tasksSlice.actions;







//Aby przy wysyłaniu akcji wykonać asynchroniczny kod, należy zadeklarować "operację" – asynchroniczny generator akcji, 
// w ciele którego wywołują się inne, synchroniczne generatory akcji. Operacja nie zwraca akcji, 
// zamiast tego zwraca inną funkcję, która jako argument przyjmuje znany nam już dispatch. 
// W ciele tej funkcji można wykonać asynchroniczne działania, na przykład zapytanie HTTP. Do zapytań wykorzystujemy bibliotekę axios.

// import axios from "axios";

// axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

// const fetchTasks = () => async dispatch => {
//     try {
//         const response = await axios.get("/tasks");
//     } catch (e) {

//     }
// }

//Możliwości deklarowania asynchronicznych generatorów akcji 
//i wykonania asynchronicznych działań dostarcza rozszerzenie store'a [redux-thunk]
// które domyślnie zawiera się w Redux Toolkit.

import axios from "axios";
import { fetchingInProgress, fetchingSuccess, fetchingError,} from "./tasksSlice";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

const fetchTasks = () => async dispatch => {
    try {
        //Wskaźnik ładowania
        dispatch(fetchingInProgress())

        //HTTP
        const response = await axios.get("/tasks");
        //Opracowywanie danych
        dispatch(fetchingSuccess(response.data));

    } catch (e) {
        //Opracowywanie błędu
        dispatch(fetchingError(e.message));

    }
}

//PRZYKŁAD

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "redux/operations";
import { getTasks } from "redux/selectors";

export const App = () => {
     const dispatch = useDispatch();
     // Otrzymujemy części stanu

     const {items, isLoading, error} = useSelector(getTasks);


    // Wywołujemy operację
    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    // Renderujemy układ w zależności od wartości w stanie
    return(
        <div>
            {isLoading && <p>Loading tasks...</p>}
            {error && <p>{error}</p>}
            <p>{items.length > 0 && JSON.stringify(items,null, 2)}</p>
        </div>
    );
};