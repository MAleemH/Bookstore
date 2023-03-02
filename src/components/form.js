/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const titleInput = (e) => setTitle(e.target.value);

  const authorInput = (e) => setAuthor(e.target.value);

  const categoryInput = (e) => setCategory(e.target.value);

  const addNewBook = (e) => {
    e.preventDefault();
    const book = {
      title,
      author,
      category,
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="form-container">
      <p className="form-heading">Add New Book</p>
      <form onSubmit={addNewBook}>
        <input
          type="text"
          className="book-name-input"
          placeholder="Book Title"
          onChange={titleInput}
          value={title}
          required
        />
        <input
          type="text"
          className="book-author-input"
          placeholder="Author Name"
          onChange={authorInput}
          value={author}
          required
        />
        <select onChange={categoryInput} value={category} className="book-category-input" required>
          <option value="">Select Category</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Romance">Romance</option>
          <option value="Fiction">Science Fiction</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit" className="form-button">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
