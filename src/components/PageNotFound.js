import React from 'react';
import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className='notFound ' >
        <h1>Error 404</h1>
        <p>PAGE NOT FOUND</p>
        <Link to="/">Back Home</Link>
    </div>
  )
}

export default PageNotFound;