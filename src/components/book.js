const Books = (book) => {
  const { title, author } = book;
  return (
    <div className="books">
      <div className="book-container">
        <div className="first-column">
          <div>
            <p className="book-title">{ title }</p>
            <p className="book-author">{ author }</p>
          </div>
          <div>
            <ul className="book-edits">
              <li className="book-option">
                <button type="button" className="remove-button">Remove</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
