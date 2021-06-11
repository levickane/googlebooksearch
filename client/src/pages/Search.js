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

  //   const handleSave = (e) => {
  //     e.preventDefault();
  //     API.saveBooks();
  //   };
  return (
    <div>
      <h1>Search for a book!</h1>
      <form id="searchForm">
        <input id="seach" onChange={handleInputChange}></input>
        <button type="submit" onClick={handleSearch}>
          Search!
        </button>
      </form>
      <div className="container row justify-content-center">
        {books.length === 0 ? (
          <h2 className="card mt-4 p-5">No books to display</h2>
        ) : (
          books.map((book) => <BookCard key={book.id} book={book} />)
        )}
      </div>
    </div>
  );
}

export default Search;
