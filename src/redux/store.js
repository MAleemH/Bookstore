import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';

const store = configureStore({
  reducer: {
    book: booksReducer,
  },
});

export default store;
