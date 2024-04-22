import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function ReposDetail({ id }) {
  const [repository, setRepository] = useState(null);

  const fetchRepository = useCallback(async () => {
    try {
      const response = await axios.get(`https://api.github.com/Finellaa/repositories/${id}`);
      setRepository(response.data);
    } catch (error) {
      console.error('Error fetching repository:', error);
    }
  }, [id]); 
  useEffect(() => {
    fetchRepository();
  }, [fetchRepository]);

  return (
    <div>
      {repository ? (
        <div>
          <h2>{repository.name}</h2>
          <p>{repository.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ReposDetail;
