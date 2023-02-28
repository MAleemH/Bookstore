import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allBooks: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.allBooks.push(action.payload);
    },
    removeBook: (state, action) => {
      state.allBooks.splice(state.allBooks.findIndex(
        (book) => book.id === action.payload,
      ), 1);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
