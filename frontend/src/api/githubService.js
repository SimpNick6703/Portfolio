import api from './config';
import axios from 'axios';

const USERNAME = 'SimpNick6703'; // GitHub username
const isDevelopment = process.env.NODE_ENV === 'development';
const useLocalAPI = process.env.REACT_APP_USE_LOCAL_API === 'true';

export const githubService = {
  async getRepositories() {
    try {
      if (isDevelopment && useLocalAPI) {
        // Use local FastAPI backend in development
        console.log('Attempting to fetch from local API:', process.env.REACT_APP_API_URL);
        const response = await api.get('/api/repos');
        console.log('Local API success:', response.data);
        return response.data;
      } else {
        // Use GitHub API directly for production/GitHub Pages
        console.log('Fetching from GitHub API directly');
        const response = await api.get(`/users/${USERNAME}/repos`, {
          params: {
            sort: 'updated',
            per_page: 100,
            type: 'public'
          }
        });
        console.log('GitHub API success:', response.data);
        return response.data;
      }
    } catch (error) {
      console.error('Error in getRepositories:', error);
      throw error;
    }
  },

  async getRepository(repoName) {
    try {
      if (isDevelopment && useLocalAPI) {
        // Use local FastAPI backend in development
        console.log('Attempting to fetch repository from local API:', repoName);
        try {
          const response = await api.get(`/api/repos/${repoName}`);
          console.log('Local API repository success:', response.data);
          return response.data;
        } catch (localError) {
          console.warn('Local API failed for repository, falling back to GitHub API:', localError.message);
          // Fallback to GitHub API if local API fails
          const githubApi = axios.create({
            baseURL: 'https://api.github.com',
            timeout: 10000,
            headers: {
              'Accept': 'application/vnd.github.v3+json',
            }
          });
          const response = await githubApi.get(`/repos/${USERNAME}/${repoName}`);
          return response.data;
        }
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
