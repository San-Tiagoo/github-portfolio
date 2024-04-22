// SearchFilter.js
import React, { useState } from 'react';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search GitHub..."
        value={searchTerm}
        onChange={handleChange}
        style={{background: 'white'}}
      />
      <button type="submit" style={{backgroundColor: 'green'}}><a href="https://api.github.com/users/San-Tiagoo/repos">Search</a></button>
    </form>
  );
}

export default Search;
