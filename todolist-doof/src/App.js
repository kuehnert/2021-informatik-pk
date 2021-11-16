import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditItem from './components/EditItem';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ToDoList />} />
          <Route path="items/edit" element={<EditItem />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
