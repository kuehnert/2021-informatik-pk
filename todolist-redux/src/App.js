import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditItem from './components/EditItem';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TodoList />} />
            <Route path='items/edit' element={<EditItem />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
