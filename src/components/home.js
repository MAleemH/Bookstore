import Books from './book';
import Form from './form';

const booksList = [
  { title: 'Dune', author: 'Frank Herbert' },
];

const Home = () => (
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

export default Home;
