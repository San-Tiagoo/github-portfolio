// RepositoryList.js
import React from 'react';
import { Link } from 'react-router-dom';

function ReposList({ repository }) {
  return (
    <li>
      <Link to={`/repositories/${repository.id}`}>
        <h2>{repository.name}</h2>
        <p>Description: {repository.description}</p>
      </Link>
    </li>
  );
}

export default ReposList;
