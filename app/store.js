import { configureStore }from '@reduxjs/toolkit';
import todoReducer  from '../Components/reducerSlice/reducerSlice';
export const store = configureStore(
  {
    reducer: {
      todos: todoReducer
    }
  }
)