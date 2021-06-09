import React, { useState } from 'react';
import API from '../utils/API';

function Search() {
  const [books, setBooks] = useState([]);
  const getbooks = () => {
    API.searchBooks('harry potter').then((response) => {
      console.log(response);
    });
  };
  getbooks();
  return (
    <div>
      <h1>search page</h1>
    </div>
  );
}

export default Search;
