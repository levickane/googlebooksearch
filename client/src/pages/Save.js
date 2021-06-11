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
  console.log(savedBooks);
  return (
    <>
      <h1>This is the save Page</h1>
      {savedBooks.map((book) => (
        <SavedBookCards book={book} key={book._id} />
      ))}
    </>
  );
}

export default Save;
