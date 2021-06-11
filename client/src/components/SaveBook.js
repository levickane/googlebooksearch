import React from 'react';

export function SaveButton(props) {
  return (
    <button
      className=" btn btn-secondary col-lg-1 m-1"
      onClick={(e) => props.saveBook(e)}
      value={props.id}
    >
      save
    </button>
  );
}

export default SaveButton;
