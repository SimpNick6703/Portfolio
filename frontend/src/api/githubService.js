import api from './config';

const USERNAME = 'SimpNick6703'; // GitHub username
const isDevelopment = process.env.NODE_ENV === 'development';
const useLocalAPI = process.env.REACT_APP_USE_LOCAL_API === 'true';

export const githubService = {
  async getRepositories() {
    try {
      if (isDevelopment && useLocalAPI) {
        // Use local FastAPI backend in development
        const response = await api.get('/api/repos');
        return response.data;
      } else {
        // Use GitHub API directly for production/GitHub Pages
        const response = await api.get(`/users/${USERNAME}/repos`, {
          params: {
            sort: 'updated',
            per_page: 100,
            type: 'public'
          }
        });
        return response.data;
      }
    } catch (error) {
      console.error('Error fetching repositories:', error);
      throw error;
    }
  },

  async getRepository(repoName) {
    try {
      if (isDevelopment && useLocalAPI) {
        // Use local FastAPI backend in development
        const response = await api.get(`/api/repos/${repoName}`);
        return response.data;
      } else {
        // Use GitHub API directly for production/GitHub Pages
        const response = await api.get(`/repos/${USERNAME}/${repoName}`);
        return response.data;
      }
    } catch (error) {
      console.error('Error fetching repository:', error);
      throw error;
    }
  },

  async getRepositoryLanguages(repoName) {
    try {
      const response = await api.get(`/repos/${USERNAME}/${repoName}/languages`);
      return response.data;
    } catch (error) {
      console.error('Error fetching repository languages:', error);
      return {};
    }
  },

  async getRepositoryReadme(repoName) {
    try {
      const response = await api.get(`/repos/${USERNAME}/${repoName}/readme`, {
        headers: {
          'Accept': 'application/vnd.github.v3.raw'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching repository readme:', error);
      return null;
    }
  }
};
