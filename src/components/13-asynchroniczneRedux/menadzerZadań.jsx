//Dla powtarzających się wartości możemy zamiast addCase użyć addMatcher. Reducer działa w tym wypadku tak samo, 
// natomiast jako pierwszy argument podajemy funkcję sprawdzającą czy dany Marcher ma zostać wywołany.
//  Pozwala nam to na zmniejszenie ilości kodu, jeśli mamy akcje dla których wykonujemy ten sam kod. 


const isPendingAction = (action) => {
    return action.type.endsWith("/pending");
}

const isRejectAction = (action) => {
    return action.type.endsWith("/rejected")
}

extraReducers: (builder) => {
  builder
            // .addCase(fetchTasks.pending, handlePending)
      // .addCase(addTask.pending, handlePending)
      // .addCase(deleteTask.pending, handlePending)
      // .addCase(toggleCompleted.pending, handlePending)
      // .addCase(fetchTasks.rejected, handleRejected)
      // .addCase(addTask.rejected, handleRejected)
      // .addCase(deleteTask.rejected, handlePending)
      // .addCase(toggleCompleted.rejected, handleRejected)
      .addCase(fetchTasks.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items.push(action.payload)
      })
      .addCase(toggleCompleted.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          const index = state.items.findIndex(
              task => task.id === action.payload.id
          );
          state.items[index].completed = !state.items[index].completed
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          const index = state.items.findIndex(
            (task) => task.id === action.payload
          );
          state.items.splice(index, 1);
        })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase((state, action) => {state.error = "someone use old function, fix it!"})
    };