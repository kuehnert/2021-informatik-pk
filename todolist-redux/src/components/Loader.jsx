import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadFromStorage } from '../store/todoSlice';

const Loader = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFromStorage());
  }, []);

  return <></>
}

export default Loader;
