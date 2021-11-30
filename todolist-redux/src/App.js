import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditItem from './components/EditItem';
import Loader from './components/Loader';
import TodoList from './components/TodoList';
import store from './store/store';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Loader />
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
