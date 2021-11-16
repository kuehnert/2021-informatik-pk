import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: 1, title: 'Tisch reservieren', done: false },
    { id: 2, title: 'Schüler erinnern', done: false },
    { id: 3, title: 'Schüler erinnern', done: false },
    { id: 4, title: 'Schüler erinnern', done: false },
  ],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  // funktionen, mit denen man den state manipuliert
  reducers: {
    addTodo(state) {
      state.todos.push({ done: false, id: '5', title: 'Unbenannt' });
    },
    removeTodo(state, action) {
      // Hausaufgabe
    },
    toggleDone(state, action) {
      // const id = action.id;
      // const done = action.done;
      const { id, done } = action;
      const todo = state.todos.find(i => i.id === id);
      todo.done = !done;
    },
    changeTitle(state, action) {
      // Hausaufgabe
    },
  },
});

export const { addTodo, removeTodo, toggleDone, changeTitle } =
  todoSlice.actions;
export default todoSlice.reducer;
