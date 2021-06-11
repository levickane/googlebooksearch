import React from 'react';

export function DeleteButton(props) {
  //   console.log('delete button props', props);
  return (
    <button
      className=" btn btn-secondary col-lg-1 m-1"
      onClick={(e) => props.deleteBook(e)}
      value={props.id}
    >
      Delete
    </button>
  );
}

export default DeleteButton;
