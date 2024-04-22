// RepositoryListPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import SearchFilter from './Search';
import ReposList from './ReposList';

function ReposListPage() {
  // State variables
  const [repositories, setRepositories] = useState([]);
  const [filteredRepositories, setFilteredRepositories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [repositoriesPerPage] = useState(10);

  // Fetch repositories from GitHub API
  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get('https://api.github.com/Finella/repos');
        setRepositories(response.data);
        setFilteredRepositories(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };
    fetchRepositories();
  }, []);

  // Handle pagination
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Handle search/filter
  const handleSearch = term => {
    const filtered = repositories.filter(repo =>
      repo.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredRepositories(filtered);
  };

  // Calculate current repositories for pagination
  const indexOfLastRepository = currentPage * repositoriesPerPage;
  const indexOfFirstRepository = indexOfLastRepository - repositoriesPerPage;
  const currentRepositories = filteredRepositories.slice(
    indexOfFirstRepository,
    indexOfLastRepository
  );

  return (
    <div>
      <h1>Welcome! Take A Quick Peak at My Repositories from GitHub</h1>
      <SearchFilter onSearch={handleSearch} />
      <ul>
        {currentRepositories.map(repo => (
          <ReposList key={repo.id} repository={repo} />
        ))}
      </ul>
      <Pagination
        itemsPerPage={repositoriesPerPage}
        totalItems={filteredRepositories.length}
        paginate={paginate}
      />
    </div>
  );
}

export default ReposListPage;
