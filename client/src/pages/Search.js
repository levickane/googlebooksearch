import React, { useState } from 'react';
import API from '../utils/API';

function Search() {
  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setBookSearch(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    API.searchBooks(bookSearch).then((response) => {
      console.log(response.data.items);
      setBooks(response.data.items);
    });
  };
  return (
    <div>
      <h1>search page</h1>
      <form id="searchForm">
        <input id="seach" onChange={handleInputChange}></input>
        <button type="submit" onClick={handleSearch}>
          Search!
        </button>
      </form>
      {!books ? (
        <h1>Search for a book!</h1>
      ) : (
        books.map((book) => (
          <div className="card" key={book.id}>
            <h2>{book.volumeInfo.title}</h2>
            <h5>
              Written by:{' '}
              {book.volumeInfo.authors.length > 1 ? (
                book.volumeInfo.authors.map((author) => <span>{author} </span>)
              ) : (
                <span>{book.volumeInfo.authors[0]}</span>
              )}
            </h5>
            <img src={book.volumeInfo.imageLinks.smallThumbnail} />
            <p>{book.volumeInfo.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Search;
