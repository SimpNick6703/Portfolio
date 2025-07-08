import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { githubService } from '../api/githubService';

const Project = () => {
  const { repoName } = useParams();
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepository = async () => {
      try {
        const repo = await githubService.getRepository(repoName);
        setRepo(repo);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch repository details');
        setLoading(false);
        console.error('Error fetching repository:', err);
      }
    };

    fetchRepository();
  }, [repoName]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error || !repo) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 dark:text-red-400 text-lg">{error || 'Repository not found'}</div>
        <Link 
          to="/projects"
          className="mt-4 inline-block px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Link 
          to="/projects"
          className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300"
        >
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{repo.name}</h1>
          <p className="mt-1 max-w-2xl text-gray-500 dark:text-gray-400">
            {repo.description || 'No description available'}
          </p>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Repository URL</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  {repo.html_url}
                </a>
              </dd>
            </div>
            
            {repo.homepage && (
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Homepage</dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                  <a 
                    href={repo.homepage} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    {repo.homepage}
                  </a>
                </dd>
              </div>
            )}
            
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Language</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                {repo.language ? (
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium ${getLanguageColor(repo.language)}`}>
                    {repo.language}
                  </span>
                ) : (
                  'Not specified'
                )}
              </dd>
            </div>
            
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Last Updated</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                {new Date(repo.updated_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </dd>
            </div>
            
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Topics</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                <div className="flex flex-wrap gap-2">
                  {repo.topics && repo.topics.length > 0 ? (
                    repo.topics.map((topic, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-700 dark:text-primary-100"
                      >
                        {topic}
                      </span>
                    ))
                  ) : (
                    'No topics'
                  )}
                </div>
              </dd>
            </div>
            
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Stats</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-2">{repo.stargazers_count} stars</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-2">{repo.forks_count} forks</span>
                  </div>
                </div>
              </dd>
            </div>
          </dl>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-4 sm:px-6">
          <div className="flex justify-between">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
            >
              View on GitHub
              <svg className="ml-2 -mr-0.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;