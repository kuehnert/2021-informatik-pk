import { createSlice } from '@reduxjs/toolkit';

const saveStateToLocalStorage = state => {
  const data = { todos: state.todos, nextId: state.nextId };
  const json = JSON.stringify(data);
  localStorage.setItem('todo_state', json);
};

let initialState = {
  todos: [],
  nextId: 0,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  // funktionen, mit denen man den state manipuliert
  reducers: {
    loadFromStorage(state) {
      const json = localStorage.getItem('todo_state');
      if (json) {
        const data = JSON.parse(json);
        state.todos = data.todos;
        state.nextId = data.nextId;
      }
    },
    addTodo(state) {
      state.todos.push({ done: false, id: state.nextId, title: 'Unbenannt' });
      state.nextId += 1;
      saveStateToLocalStorage(state);
    },
    removeTodo(state, action) {
      // removeTodo(5)
      const id = action.payload;
      const index = state.todos.findIndex(i => i.id === id);
      state.todos.splice(index, 1);
      saveStateToLocalStorage(state);
    },
    toggleDone(state, action) {
      const id = action.payload;
      const todo = state.todos.find(i => i.id === id);
      todo.done = !todo.done;
      saveStateToLocalStorage(state);
    },
    updateTitle(state, action) {
      const { id, title } = action.payload;
      const todo = state.todos.find(i => i.id === id);
      todo.title = title;
      saveStateToLocalStorage(state);
    },
  },
});

export const { addTodo, removeTodo, toggleDone, updateTitle, loadFromStorage } =
  todoSlice.actions;
export default todoSlice.reducer;
