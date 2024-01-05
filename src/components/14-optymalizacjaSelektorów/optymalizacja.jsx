
//Proste selektory zwracają części statusu, dlatego zwracana wartość aktualizuje się tylko przy zmianie odpowiadającej 
//jej części statusu, nawet jeśli to referencyjny typ danych, to znaczy tablica lub obiekt.

//Złożone selektory zwracają obliczane wartości i te obliczenia uruchamiają się za każdym razem w trakcie aktualizacji statusu.

//Jeśli teraz w kodzie selektora selectTaskCount dodamy logowanie wiadomości, to zobaczymy ją zbyt często. 
// Ten selektor oblicza ilość aktywnych i wykonanych zadań nawet przy zmianie wartości filtru statusu, 
// choć w żaden sposób nie wpływa to na tablicę zadań w statusie Redux, od którego zależą obliczenia.

export const selectTaskCount = state => {
    const tasks = selectTasks(state);
  
    console.log("Calculating task count");
  
    return tasks.reduce(
      (count, task) => {
        if (task.completed) {
          count.completed += 1;
        } else {
          count.active += 1;
        }
        return count;
      },
      { active: 0, completed: 0 }
    );
  };



  //-----------------------------------WNIOSEK----------------------------------------------------------------
  //Jeśli selektor zwraca referencyjny typ danych lub wykonuje jakieś obliczenia, należy go zoptymalizować tak,
  // aby te obliczenia włączały się tylko przy zmianie tych części statusu, które wykorzystuje się w selektorze.


  //Proces optymalizacji selektorów nazywa się memoizacja - zapisanie wyników wykonania funkcji do zapobiegania powtórnym obliczeniom.


  //Do memoizacji selektora wykorzystuje się funkcję createSelector, jaka przyjmuje tablicę selektorów,
  // których wartości są niezbędne do późniejszych obliczeń oraz funkcję konwerter, w której będą wykonywane wszystkie obliczenia.


  //import { createSelector } from "@reduxjs/toolkit";

const selector = createSelector(
    // Tablica selektorów wejściowych
      [inputSelector1, inputSelector2, inputSelector3],
    // Funkcja konwerter
      (result1, result2, result3) => {
    // Wykonujemy obliczenia i zwracamy wynik
      }
    );

            // ---------------------ZASADY---------------------
    //W tablicy selektorów mogą być inne, dowolne selektory, zarówno proste, jak i złożone oraz memoizowane.
    // Wyniki wejściowych selektorów przekazuje się jako argumenty do funkcji konwertowania w tym samym porządku, w którym sa wyliczone.
    // Powtórne obliczenia wykonują się tylko, jeśli zmieni się wartość jakiegoś parametru, w przeciwnym razie zwracany jest wynik ostatniego wywołania funkcji.


//     import { createSelector } from "@reduxjs/toolkit";

// // Pozostałe selektory

// export const selectTaskCount = createSelector([selectTasks], tasks => {
  
//     console.log("Calculating task count. Now memoized!");

//   return tasks.reduce(
//     (count, task) => {
//       if (task.completed) {
//         count.completed += 1;
//       } else {
//         count.active += 1;
//       }
//       return count;
//     },
//     { active: 0, completed: 0 }
//   );
// });