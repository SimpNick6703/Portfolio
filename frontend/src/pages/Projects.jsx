import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { githubService } from '../api/githubService';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        console.log('Fetching repositories...');
        console.log('Environment:', {
          NODE_ENV: process.env.NODE_ENV,
          REACT_APP_USE_LOCAL_API: process.env.REACT_APP_USE_LOCAL_API,
          REACT_APP_API_URL: process.env.REACT_APP_API_URL
        });
        
        const repos = await githubService.getRepositories();
        console.log('Successfully fetched repositories:', repos.length);
        setRepos(repos);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching repositories:', err);
        console.error('Error details:', {
          message: err.message,
          status: err.response?.status,
          statusText: err.response?.statusText,
          data: err.response?.data
        });
        setError(`Failed to fetch repositories: ${err.message}`);
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  // Function to get language color
  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 dark:from-yellow-700 dark:to-yellow-600 dark:text-yellow-100',
      Python: 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 dark:from-blue-700 dark:to-blue-600 dark:text-blue-100',
      HTML: 'bg-gradient-to-r from-red-100 to-red-200 text-red-800 dark:from-red-700 dark:to-red-600 dark:text-red-100',
      CSS: 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 dark:from-purple-700 dark:to-purple-600 dark:text-purple-100',
      'Jupyter Notebook': 'bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 dark:from-orange-700 dark:to-orange-600 dark:text-orange-100',
      React: 'bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-800 dark:from-cyan-700 dark:to-cyan-600 dark:text-cyan-100',
      TypeScript: 'bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 dark:from-indigo-700 dark:to-indigo-600 dark:text-indigo-100',
      default: 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 dark:from-gray-700 dark:to-gray-600 dark:text-gray-100',
    };

    return colors[language] || colors.default;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gradient-to-r from-blue-600 to-purple-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 dark:text-red-400 text-lg">{error}</div>
        <button 
          className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent sm:text-5xl">
          My Projects
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Browse through my GitHub repositories. These projects showcase my skills and interests in various technologies, 
          from AI-powered applications to full-stack web development.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {repos.map((repo) => (
          <Link 
            key={repo.id} 
            to={`/projects/${repo.name}`}
            className="group bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 transform hover:scale-105"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {repo.name}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300 h-12 overflow-hidden leading-relaxed">
                {repo.description || 'No description available'}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {repo.language && (
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getLanguageColor(repo.language)}`}>
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 dark:from-yellow-700 dark:to-yellow-600 dark:text-yellow-100">
                    <svg className="mr-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {repo.stargazers_count}
                  </span>
                )}
                {repo.forks_count > 0 && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-green-100 to-green-200 text-green-800 dark:from-green-700 dark:to-green-600 dark:text-green-100">
                    <svg className="mr-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1.323l-3.954 1.582A1.5 1.5 0 004 7.323V16.5a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5V7.323a1.5 1.5 0 00-1.046-1.418L11 4.323V3a1 1 0 00-1-1zm0 2.618l4.372 1.749a.5.5 0 01.378.473V16.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V6.84a.5.5 0 01.378-.473L10 4.618z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M6.5 9.5a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1zm0 4a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    {repo.forks_count}
                  </span>
                )}
              </div>
              <div className="mt-8 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white mr-3">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                Updated {new Date(repo.updated_at).toLocaleDateString()}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;