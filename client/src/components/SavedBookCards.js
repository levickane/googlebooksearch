import React from 'react';
import DeleteButton from './DeleteButton';

//id comes in through props as props.book._id
function SavedBookCards(props) {
  //   console.log('looking for id', props);
  let book = props.book;
  return (
    <div className="card my-2 p-3 border border-dark">
      <div className="container row">
        <h2 className="col-lg-9">{book.title}</h2>
        <button className=" btn btn-secondary col-lg-1 m-1">
          <a
            className="text-decoration-none text-light"
            href={book.link}
            rel="noreferrer"
            target="_blank"
          >
            View
          </a>
        </button>
        <DeleteButton deleteBook={(e) => props.handleDelete(e)} id={book._id} />
        <h5>
          Written by: <span>{book.author}</span>
        </h5>
        <img className="col-lg-3 my-auto" alt={book.title} src={book.image} />
        <p className="col-lg-9">{book.description}</p>
      </div>
    </div>
  );
}

export default SavedBookCards;
