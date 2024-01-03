//Redux Toolkit upraszcza proces aktualizacji asynchronicznego generatora akcji przy pomocy funkcji [createAsyncThunk()]
//Jako pierwszy argument przyjmuje typ akcji, a jako drugi funkcję, która powinna wykonać zapytanie HTTP i zwrócić promise z danymi, które staną się wartością payload.
//Zwraca asynchroniczny generator akcji (operację), przy uruchomieniu którego wykonuje się funkcja z kodem zapytania.

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTasks = createAsyncThunk("tasks/fetchAll", async () => {
    const response = await axios.get("/tasks");
    return response.data
})

//Funkcja createAsyncThunk() automatycznie tworzy akcje reprezentujące cykl życiowy zapytania HTTP i wysyła je w prawidłowym porządku
// "tasks/fetchAll/pending" - początek zapytania
// "tasks/fetchAll/fulfilled" - pomyślne zakończenie zapytania
// "tasks/fetchAll/rejected" - zakończenie zapytania z błędem


//Funkcja createAsyncThunk nie tworzy reducera oraz nie może wiedzieć, jak chcemy śledzić stan ładowania, z jakimi danymi zakończy się zapytanie i jak je prawidłowo opracowywać.


//Dlatego w następnym kroku będzie zmiana kodu slice'u tasksSlice tak, aby opracowywał nowe akcje.

