import classNames from 'classnames';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleDone } from '../store/todoSlice';
import TodoDetails from './TodoDetails';
import styles from './TodoList.module.scss';

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector(state => state.todos);
  const [nextId, setNextId] = useState(5);

  const handleNew = () => {
    dispatch(addTodo());
    setNextId(nextId + 1);
  };

  const handleToggleDone = id => {
    dispatch(toggleDone(id));
  };

  const handleDelete = id => {
    dispatch(removeTodo(id));
  };

  const renderTodo = i => {
    return (
      <li
        key={i.id}
        className={classNames(styles.todo, i.done ? styles.done : null)}>
        <span className='title' onClick={() => handleToggleDone(i.id)}>
          {i.title} (ID {i.id})
        </span>

        <span className={null}>{i.done ? ' yes ' : ' no '}</span>

        <TodoDetails todo={i} />

        <button onClick={() => handleDelete(i.id)}>Löschen</button>

        {/* <pre>{JSON.stringify(i, null, 4)}</pre>° */}
      </li>
    );
  };

  return (
    <div>
      <h1>Meine coole To-Do-Liste</h1>

      <ol>{todos.map(todo => renderTodo(todo))}</ol>

      <button onClick={handleNew}>+</button>
    </div>
  );
};

export default TodoList;
