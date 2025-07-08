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
        const repos = await githubService.getRepositories();
        setRepos(repos);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch repositories');
        setLoading(false);
        console.error('Error fetching repositories:', err);
      }
    };

    fetchRepositories();
  }, []);

  // Function to get language color
  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100',
      Python: 'bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-100',
      HTML: 'bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100',
      CSS: 'bg-purple-100 text-purple-800 dark:bg-purple-700 dark:text-purple-100',
      'Jupyter Notebook': 'bg-orange-100 text-orange-800 dark:bg-orange-700 dark:text-orange-100',
      default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100',
    };

    return colors[language] || colors.default;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 dark:text-red-400 text-lg">{error}</div>
        <button 
          className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
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
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          My Projects
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
          Browse through my GitHub repositories. These projects showcase my skills and interests in various technologies.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {repos.map((repo) => (
          <Link 
            key={repo.id} 
            to={`/projects/${repo.name}`}
            className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">{repo.name}</h3>
              <p className="mt-1 text-gray-500 dark:text-gray-400 h-12 overflow-hidden">
                {repo.description || 'No description available'}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {repo.language && (
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium ${getLanguageColor(repo.language)}`}>
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100">
                    <svg className="mr-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {repo.stargazers_count}
                  </span>
                )}
                {repo.forks_count > 0 && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100">
                    <svg className="mr-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1.323l-3.954 1.582A1.5 1.5 0 004 7.323V16.5a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5V7.323a1.5 1.5 0 00-1.046-1.418L11 4.323V3a1 1 0 00-1-1zm0 2.618l4.372 1.749a.5.5 0 01.378.473V16.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V6.84a.5.5 0 01.378-.473L10 4.618z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M6.5 9.5a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1zm0 4a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    {repo.forks_count}
                  </span>
                )}
              </div>
              <div className="mt-6 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg className="flex-shrink-0 mr-1.5 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
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