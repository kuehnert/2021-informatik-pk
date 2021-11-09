import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import styles from './ToDoList.module.scss';

const ToDoList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const oldListString = localStorage?.getItem("todolist");
    if (oldListString) {
      setList(JSON.parse(oldListString));
    } else {
      const l = new Array(
        { id: 1, title: 'Tisch reservieren', done: false },
        { id: 2, title: 'Schüler erinnern', done: false },
        { id: 3, title: 'Schüler erinnern', done: false },
        { id: 4, title: 'Schüler erinnern', done: false },
      );
      setList(l);
      localStorage.setItem("todolist", JSON.stringify(l));
    }
  }, [])

  const handleToggleDone = (index) => {
    const newList = JSON.parse(JSON.stringify(list));
    const item = newList[index];
    item.done = !item.done;
    setList(newList);
    localStorage.setItem("todolist", JSON.stringify(newList));
  }

  const handleDelete = (index) => {
    const newList = JSON.parse(JSON.stringify(list));
    newList.splice(index, 1);
    setList(newList);
    localStorage.setItem("todolist", JSON.stringify(newList));
  }

  const renderItem = (i, index) => {
    return (
      <li
        key={i.id}
        className={classNames(styles.item, i.done ? styles.done : null)}
      >
        <span className='title' onClick={() => handleToggleDone(index)}>{i.title}</span>
        <span className={null}>{i.done ? 'yes' : 'no'}</span>
        {/* <pre>{JSON.stringify(i, null, 4)}</pre>° */}
        <button onClick={() => handleDelete(index)}>X</button>
      </li>
    );
  };

  return (
    <div>
      <ol>{list.map((item, index) => renderItem(item, index))}</ol>
    </div>
  );
};

export default ToDoList;
