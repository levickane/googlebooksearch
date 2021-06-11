import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <h1>
      Click <Link to="/search">Here</Link> to start searching
    </h1>
  );
}

export default Landing;
