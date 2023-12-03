


export const getTasks = state => state.tasks;
export const getStatusFilter = state => state.filters;

//Deklarowanie funkcji selektorów wewnątrz komponentów jest dobre również dlatego, że komponenty nie wiedzą o kształcie statusu Redux,
// i w przypadku jego zmiany wystarczy zredagowanie kodu jednego pliku, a nie szukanie selektorów po kodzie wszystkich komponentów aplikacji.