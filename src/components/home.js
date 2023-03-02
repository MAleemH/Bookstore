import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Books from './book';
import Form from './form';
import { fetchBooksData } from '../redux/books/booksSlice';

const Home = () => {
  let booksList = useSelector((state) => state.book.book);
  if (booksList === null || booksList === undefined) {
    booksList = [];
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooksData());
    // eslint-disable-next-line
  }, []);
  console.log(booksList);

  return (
    <div className="home-container">
      {booksList.map((book) => (
        <Books
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <span className="line" />
      <Form />
    </div>
  );
};

export default Home;
