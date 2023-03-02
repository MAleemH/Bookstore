import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Books = (books) => {
  const {
    id, title, author, category,
  } = books;
  const dispatch = useDispatch();

  return (
    <div className="books">
      <div className="book-container">
        <div className="first-column">
          <div>
            <p className="book-category">{ category }</p>
            <p className="book-title">{ title }</p>
            <p className="book-author">{ author }</p>
          </div>
          <div>
            <ul className="book-edits">
              <li className="book-option">
                <button type="button" className="comments-button">Comments</button>
              </li>
              <li className="book-option">
                <button type="button" className="remove-button" onClick={() => dispatch(removeBook(id))}>Remove</button>
              </li>
              <li className="book-option">
                <button type="button" className="edit-button">Edit</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="progress-part">
          <div className="second-column">
            <div className="circular-progress" />
            <div className="percentage-progress">
              <p className="percentage">64%</p>
              <p className="completed">Completed</p>
            </div>
          </div>
          <span className="right-border" />
          <div className="third-column">
            <p className="current-chapter">CURRENT CHAPTER</p>
            <p className="chapter-number">Chapter 17</p>
            <button type="button" className="update-progress">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
