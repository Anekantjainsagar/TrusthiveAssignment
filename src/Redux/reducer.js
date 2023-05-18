import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",

  initialState,

  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },

    removeTodo: (state, action) => {
      state.filter((value, index, array) => {
        if (value.name + value.time == action.payload) {
          array.splice(index, 1);
        }
      });
      return state;
    },
  },
});

export const { addTodos, removeTodo } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
