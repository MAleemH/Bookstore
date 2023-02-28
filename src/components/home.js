import { useSelector } from 'react-redux';
import Books from './book';
import Form from './form';

const Home = () => {
  const booksList = useSelector((state) => state.book.allBooks);

  return (
    <div className="home-container">
      {booksList.map((book) => (
        <Books
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
      <span className="line" />
      <Form />
    </div>
  );
};

export default Home;
