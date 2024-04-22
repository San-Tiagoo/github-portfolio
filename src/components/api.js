// api.js

// Function to fetch repositories from GitHub API
export const getRepositories = async () => {
    try {
      // Make API request to fetch repositories
      const response = await fetch('https://api.github.com/San-Tiagoo/repos', {
        headers: {
          Authorization: `Bearer `,
        },
      });
  
      // Check if response is successful
      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }
  
      // Parse response JSON and return repositories
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching repositories:', error);
      throw error; 
    }
  };
  