/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState({});
  const [author, setAutor] = useState({});
  const dispatch = useDispatch();

  const addNewBook = (event) => {
    event.preventDefault();
    const book = { id: uuidv4(), ...title, ...author };
    dispatch(addBook(book));
    event.target.reset();
  };

  return (
    <div className="form-container">
      <p className="form-heading">Add New Book</p>
      <form onSubmit={addNewBook}>
        <input
          type="text"
          className="book-name-input"
          placeholder="Book Title"
          onChange={(e) => setTitle({ title: e.target.value })}
          required
        />
        <input
          type="text"
          className="book-author-input"
          placeholder="Author Name"
          onChange={(e) => setAutor({ author: e.target.value })}
          required
        />
        <button type="submit" className="form-button">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
