import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, changeTitle, removeTodo, toggleDone } from '../store/todoSlice';
import TodoDetails from './TodoDetails';
import styles from './TodoList.module.scss';

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector(state => state.todo);
  const [nextId, setNextId] = useState(5);

  const handleNew = () => {
    dispatch(addTodo())
    setNextId(nextId + 1);
  };

  const handleEdit = (id, title) => {
    dispatch(changeTitle(id, title));
  };

  const handleToggleDone = id => {
    dispatch(toggleDone(id));
  };

  const handleDelete = id => {
    dispatch(removeTodo(id))
  };

  const renderTodo = (i, index) => {
    return (
      <li
        key={i.id}
        className={classNames(styles.todo, i.done ? styles.done : null)}>
        <span className='title' onClick={() => handleToggleDone(index)}>
          {i.id} {i.title}
        </span>
        <span className={null}>{i.done ? ' yes' : ' no'}</span>
        {/* <pre>{JSON.stringify(i, null, 4)}</pre>° */}

        <TodoDetails todo={i} handleEdit={handleEdit} />

        <button onClick={() => handleDelete(index)}>X</button>
      </li>
    );
  };

  return (
    <div>
      <h1>Meine coole To-Do-Liste</h1>
      <ol>{todos.map((todo, index) => renderTodo(todo, index))}</ol>
      <button onClick={handleNew}>+</button>
    </div>
  );
};

export default TodoList;
