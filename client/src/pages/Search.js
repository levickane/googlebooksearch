import React, { useState } from 'react';
import API from '../utils/API';
import BookCard from '../components/BookCard';

function Search() {
  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState('');
  //   const [saveBooks, setSaveBooks] = useState([]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setBookSearch(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    API.searchBooks(bookSearch).then((response) => {
      setBooks(response.data.items);
    });
  };
  console.log(books);

  const handleSave = (e) => {
    e.preventDefault();
    console.log('click', e.target.value);
    let filterBooks = books.filter((book) => book.id === e.target.value);
    console.log('filterbook', filterBooks[0].volumeInfo.title);
    API.saveBooks({
      title: filterBooks[0].volumeInfo.title,
      author: filterBooks[0].volumeInfo.authors[0],
      description: filterBooks[0].volumeInfo.description,
      image: filterBooks[0].volumeInfo.imageLinks.smallThumbnail,
      link: filterBooks[0].volumeInfo.canonicalVolumeLink
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="container">
      <h1>Search for a book!</h1>
      <div className="input-group mb-3 container row">
        <input
          type="text"
          className="form-control col-4"
          onChange={handleInputChange}
          placeholder="Search book or author"
          aria-label="Search book or author"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary col-md-2"
          onClick={handleSearch}
          type="button"
          id="button-addon2"
        >
          search
        </button>
      </div>
      <div className="container row justify-content-center">
        {books.length === 0 ? (
          <h2 className="card mt-4 p-5">No books to display</h2>
        ) : (
          books.map((book) => (
            <BookCard key={book.id} book={book} handleSave={handleSave} />
          ))
        )}
      </div>
    </div>
  );
}

export default Search;
