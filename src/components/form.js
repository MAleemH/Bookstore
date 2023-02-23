const Form = () => (
  <div className="form-container">
    <p className="form-heading">Add New Book</p>
    <form>
      <input type="text" className="book-name-input" placeholder="Book Title" />
      <input type="text" className="book-author-input" placeholder="Author Name" />
      <button type="submit" className="form-button">Add Book</button>
    </form>
  </div>
);

export default Form;
