import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// unique api url
const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/eHu0AJvEHeHUitjoncwV/books';

// fetching data from api
export const fetchBooksData = createAsyncThunk('fetchBooksData', async () => {
  const response = await fetch(api);
  const data = await response.json();
  const booksList = [];
  Object.keys(data).forEach((id) => {
    booksList.push({
      item_id: id,
      title: data[id][0].title,
      author: data[id][0].author,
      category: data[id][0].category,
    });
  });
  return booksList;
});

// adding a new book
export const addBook = createAsyncThunk('addBook', async (book) => {
  await fetch(api, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: uuidv4(),
      title: book.title,
      author: book.author,
      category: book.category,
    }),
  });
  return book;
});

// remove a book
export const removeBook = createAsyncThunk('removeBook', async (id) => {
  await fetch(`${api}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  });
  return id;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksData.fulfilled, (state, action) => ({
        ...state,
        book: [...action.payload],
      }))
      .addCase(addBook.fulfilled, (state, action) => {
        state.book.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => ({
        ...state,
        book: state.book.filter((book) => book.item_id !== action.payload),
      }));
  },
});

export default booksSlice.reducer;
