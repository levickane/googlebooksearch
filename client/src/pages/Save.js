import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import SavedBookCards from '../components/SavedBookCards';

function Save() {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);
  function loadBooks() {
    API.getBooks()
      .then((res) => setSavedBooks(res.data))
      .catch((err) => console.log(err));
  }

  const handleDelete = (e) => {
    e.preventDefault();
    let filterBook = savedBooks.filter((book) => book._id === e.target.value);
    API.deleteBook(filterBook[0]._id).then((response) => {
      console.log(response);
    });
    loadBooks();
  };

  return (
    <div className="container">
      <h1>Saved Books!</h1>
      <div className="container row justify-content-center">
        {savedBooks.length === 0 ? (
          <h2>No saved books here</h2>
        ) : (
          savedBooks.map((book) => (
            <SavedBookCards
              book={book}
              key={book._id}
              handleDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Save;
