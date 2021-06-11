import React from 'react';

function SaveBook(props) {
  console.log(props);
  return (
    <button className=" btn btn-secondary col-lg-1 m-1">
      save
      {/* <a
        className="text-decoration-none text-light"
        href={props.volumeInfo.canonicalVolumeLink}
        rel="noreferrer"
        target="_blank"
      >
        Save
      </a> */}
    </button>
  );
}

export default SaveBook;
