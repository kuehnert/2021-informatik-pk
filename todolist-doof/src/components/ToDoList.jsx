import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import ItemDetails from './ItemDetails';
import styles from './ToDoList.module.scss';

const ToDoList = () => {
  const [list, setList] = useState([]);
  const [nextId, setNextId] = useState(5);

  useEffect(() => {
    const oldListString = localStorage?.getItem('todolist');
    if (oldListString) {
      setList(JSON.parse(oldListString));
    } else {
      const l = new Array(
        { id: 1, title: 'Tisch reservieren', done: false },
        { id: 2, title: 'Schüler erinnern', done: false },
        { id: 3, title: 'Schüler erinnern', done: false },
        { id: 4, title: 'Schüler erinnern', done: false }
      );
      setList(l);
      localStorage.setItem('todolist', JSON.stringify(l));
    }
  }, []);

  const handleNew = () => {
    console.log('ToDoList handleNew');
    const newList = [...list, { id: nextId, title: 'Unbenannt', done: false }];
    setList(newList);
    setNextId(nextId + 1);
  };

  const handleEdit = (id, title) => {
    const newList = JSON.parse(JSON.stringify(list));
    const item = newList.find((i) => i.id === id);
    item.title = title;
    setList(newList);
    localStorage.setItem('todolist', JSON.stringify(newList));
  }

  const handleToggleDone = index => {
    const newList = JSON.parse(JSON.stringify(list));
    const item = newList[index];
    item.done = !item.done;
    setList(newList);
    localStorage.setItem('todolist', JSON.stringify(newList));
  };

  const handleDelete = index => {
    const newList = JSON.parse(JSON.stringify(list));
    newList.splice(index, 1);
    setList(newList);
    localStorage.setItem('todolist', JSON.stringify(newList));
  };

  const renderItem = (i, index) => {
    return (
      <li
        key={i.id}
        className={classNames(styles.item, i.done ? styles.done : null)}>
        <span className='title' onClick={() => handleToggleDone(index)}>
          {i.id} {i.title}
        </span>
        <span className={null}>{i.done ? ' yes' : ' no'}</span>
        {/* <pre>{JSON.stringify(i, null, 4)}</pre>° */}


        <ItemDetails item={i} handleEdit={handleEdit} />




        <button onClick={() => handleDelete(index)}>X</button>
      </li>
    );
  };

  return (
    <div>
      <h1>Meine coole To-Do-Liste</h1>
      <ol>{list.map((item, index) => renderItem(item, index))}</ol>
      <button onClick={handleNew}>+</button>
    </div>
  );
};

export default ToDoList;
