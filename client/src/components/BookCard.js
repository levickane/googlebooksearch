import React from 'react';
import SaveButton from './SaveButton';

function BookCard(props) {
  let book = props.book;
  return (
    <div className="card my-2 p-3 border border-dark">
      <div className="container row">
        <h2 className="col-lg-9">{book.volumeInfo.title}</h2>
        <button className=" btn btn-secondary col-lg-1 m-1">
          <a
            className="text-decoration-none text-light"
            href={book.volumeInfo.canonicalVolumeLink}
            rel="noreferrer"
            target="_blank"
          >
            View
          </a>
        </button>
        <SaveButton saveBook={(e) => props.handleSave(e)} id={book.id} />
        <h5>
          Written by:{' '}
          {book.volumeInfo.authors.length > 1 ? (
            book.volumeInfo.authors.map((author) => (
              <span key={author}>{author} </span>
            ))
          ) : (
            <span key={book.volumeInfo.authors[0]}>
              {book.volumeInfo.authors[0]}
            </span>
          )}
        </h5>
        <img
          className="col-lg-3 my-auto"
          alt={book.id}
          src={book.volumeInfo.imageLinks.smallThumbnail}
        />
        <p className="col-lg-9">{book.volumeInfo.description}</p>
      </div>
    </div>
  );
}

export default BookCard;
