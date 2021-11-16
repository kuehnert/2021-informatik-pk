import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';

import todoReducer from './todoSlice';

export const rootReducer = combineReducers({
  todos: todoReducer,
});

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: rootReducer,
});

export type RootState = ReturnType;
export type AppThunk = ThunkAction;
export type AppDispatch = typeof store.dispatch;

export default store;
