import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTitle } from '../store/todoSlice';
import './TodoDetails.scss'

function ItemDetails(props) {
  const { todo } = props;
  const [title, setTitle] = useState(todo.title);
  const dispatch = useDispatch();

  if (todo == null) {
    return <div>What the…?</div>;
  }

  const handleChange = event => {
    setTitle(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(updateTitle({ id: todo.id, title }));
  };

  return (
    <div className='todoDetails'>
      <p>
        To-Do „{todo.title}“ (ID {todo.id}) bearbeiten
      </p>

      <form onSubmit={handleSubmit}>
        <input id='title' value={title} onChange={handleChange} />
        <button type='submit'>Speichern</button>
      </form>
    </div>
  );
}

export default ItemDetails;
