//Redux Toolkit upraszcza proces aktualizacji asynchronicznego generatora akcji przy pomocy funkcji [createAsyncThunk()]
//Jako pierwszy argument przyjmuje typ akcji, a jako drugi funkcję, która powinna wykonać zapytanie HTTP i zwrócić promise z danymi, które staną się wartością payload.
//Zwraca asynchroniczny generator akcji (operację), przy uruchomieniu którego wykonuje się funkcja z kodem zapytania.


//---------------operations.js-------------------------------
// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

// export const fetchTasks = createAsyncThunk("tasks/fetchAll", async () => {
//     const response = await axios.get("/tasks");
//     return response.data
// })

//Funkcja createAsyncThunk() automatycznie tworzy akcje reprezentujące cykl życiowy zapytania HTTP i wysyła je w prawidłowym porządku
// "tasks/fetchAll/pending" - początek zapytania
// "tasks/fetchAll/fulfilled" - pomyślne zakończenie zapytania
// "tasks/fetchAll/rejected" - zakończenie zapytania z błędem


//Funkcja createAsyncThunk nie tworzy reducera oraz nie może wiedzieć, jak chcemy śledzić stan ładowania, z jakimi danymi zakończy się zapytanie i jak je prawidłowo opracowywać.




//Dlatego w następnym kroku będzie zmiana kodu slice'u tasksSlice tak, aby opracowywał nowe akcje.


////-----------------taskSlice.js--------------------------
// import { createSlice } from "@reduxjs/toolkit";
// // Importujemy operację
// import { fetchTasks } from "./operations";

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   // Dodajemy opracowywanie zewnętrznych akcji
//   extraReducers: (builder) => {
//         builder
//             .addCase(fetchTasks.pending, (state, action) {})
//             .addCase(fetchTasks.fulfilled, (state, action) {})
//             .addCase(fetchTasks.rejected, (state, action) {})
//   },
// });

// export const tasksReducer = tasksSlice.reducer;




//Właściwość extraReducers wykorzystuje się, aby zadeklarować reducery dla "zewnętrznych" typów akcji,
//to znaczy tych, które nie zostały wygenerowane z właściwości reducers
//Te reducery opracowują "zewnętrzne" akcje, dlatego nie będą dla nich tworzone generatory akcji w slice.actions – nie ma takiej potrzeby



//AKCJE OPERACJI

// Generatory akcji reprezentujące cykl życiowy zapytania są przechowywane w obiekcie operacji jako właściwości pending, fulfilled i rejected.
//  Automatycznie tworzone są przy pomocy createAction i dlatego mają właściwość type oraz przedefiniowaną metodę toString() zwracającą łańcuch typu akcji.


//Na przygotowanych Sandboxach zostało przygotowane poprzednie podejście, z wykorzystaniem obiektu w extraReducers. 
//Dzięki temu widzimy jak na dwa różne sposoby możemy przygotować ten sam kod. Podejście z addCase jest podejściem aktualnym.


// Właściwość reducers nie jest nam więcej potrzebna, dlatego całą logikę opracowywania akcji zapytania przenosimy do nowego reducera.

//-----------------taskSlice.js--------------------------

//...
// const tasksSlice = createSlice({
//...
// extraReducers: (builder) => {
//         builder
//             .addCase(fetchTasks.pending, (state, action) {
//                 state.isLoading = true;
//             })
//             .addCase(fetchTasks.fulfilled, (state, action) {
//                 state.isLoading = false;
//                 state.error = null;
//                 state.items = action.payload;
//             })
//             .addCase(fetchTasks.rejected, (state, action) {
//                 state.isLoading = false;
//                 state.error = action.payload;
//             })
//   };
// });


//---------------operations.js-------------------------------

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTasks = createAsyncThunk(
    "tasks/fetchAll", 
    // Wykorzystamy symbol podkreślenia jako nazwę pierwszego parametru,
    // ponieważ w tej operacji nie jest nam potrzebny
    async (_, thunkAPI) => {
        try{
            const response = await axios.get("/tasks");
            return response.data;
            // Przy pomyślnym zapytaniu zwracamy promise z danymi
        } catch (e) {
                  // Przy błędzie zapytania zwracamy promise,
                  // który zostanie odrzucony z tekstem błędu
                return thunkAPI.rejectWithValue(e.message);
        }
    }
);

