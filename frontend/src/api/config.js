import axios from 'axios';

// For GitHub Pages deployment, we'll use GitHub API directly
const isDevelopment = process.env.NODE_ENV === 'development';
const useLocalAPI = process.env.REACT_APP_USE_LOCAL_API === 'true';

// Create axios instance with appropriate base URL
const api = axios.create({
  baseURL: (isDevelopment && useLocalAPI) 
    ? (process.env.REACT_APP_API_URL || 'http://localhost:8000')
    : 'https://api.github.com',
  timeout: 10000,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  }
});

export default api;
