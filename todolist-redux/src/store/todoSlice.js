import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: 0, title: 'Tisch reservieren', done: false },
    { id: 1, title: 'Schüler erinnern', done: false },
    { id: 2, title: 'Schüler erinnern', done: false },
    { id: 3, title: 'Schüler erinnern', done: false },
  ],
  nextId: 4,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  // funktionen, mit denen man den state manipuliert
  reducers: {
    addTodo(state) {
      state.todos.push({ done: false, id: state.nextId, title: 'Unbenannt' });
      state.nextId += 1;
    },
    removeTodo(state, action) {
      const id = action.payload;
      const index = state.todos.findIndex(i => i.id === id);
      state.todos.splice(index, 1);
    },
    toggleDone(state, action) {
      const id = action.payload;
      const todo = state.todos.find(i => i.id === id);
      todo.done = !todo.done;
    },
    updateTitle(state, action) {
      const { id, title } = action.payload;
      const todo = state.todos.find(i => i.id === id);
      todo.title = title;
    },
  },
});

export const { addTodo, removeTodo, toggleDone, updateTitle } =
  todoSlice.actions;
export default todoSlice.reducer;
