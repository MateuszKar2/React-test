`Redux Toolkit`
//  Upraszcza i ulepsza kod pisany w Redux


`configureStore- funkcja która uprasza pisanie stanu`

//export const store = createStore(rootReducer, enhancer)

const store = configureStore({
    reducer: rootReducer,
  });



`createAction- funkcja która upraszcza proces deklarowania akcji`

// const addTask = text => {
//     return { type: "tasks/AddTask", payload: text };
//   };

const addTask = createAction("tasks/AddTask");



`createReducer- funkcja która upraszcza deklarowanie reducerów`

// const tasksReducer = (state = tasksInitialState, action) => {
//     switch (action.type) {
//       case addTask.type:
//       case deleteTask.type:
//       case toggleCompleted.type:
//       default:
//         return state;
//     }
//   };

export const tasksReducer = createReducer(tasksInitialState, {
    [addTask]: (state, action) => {},
    [deleteTask]: (state, action) => {},
    [toggleCompleted]: (state, action) => {},
  });



`createSlice- nadbudowa nad createAction() i createReducer(), która upraszcza deklarowanie slice'u`

const tasksSlice = createSlice({
      name: "tasks",
      initialState: tasksInitialState,
      reducers: {
        addTask(state, action) {},
        deleteTask(state, action) {},
        toggleCompleted(state, action) {},
      },
    });