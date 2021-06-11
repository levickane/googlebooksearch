import axios from 'axios';

export default {
  searchBooks: function (book) {
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + book);
  },
  saveBooks: function (book) {
    console.log('form axios', book);
    return axios.post('/api/books', book);
  }
};
