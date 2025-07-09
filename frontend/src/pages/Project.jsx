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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Loading repository details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !repo) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center bg-gradient-to-br from-white to-red-50 dark:from-gray-800 dark:to-red-900/20 rounded-2xl shadow-xl p-8 border border-red-200 dark:border-red-800 max-w-md">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Repository Not Found</h3>
            <p className="text-red-600 dark:text-red-400 mb-6">{error || 'The requested repository could not be found.'}</p>
            <Link 
              to="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
            >
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
      Java: 'bg-gradient-to-r from-red-100 to-orange-200 text-red-800 dark:from-red-700 dark:to-orange-600 dark:text-red-100',
      C: 'bg-gradient-to-r from-gray-100 to-blue-200 text-gray-800 dark:from-gray-700 dark:to-blue-600 dark:text-gray-100',
      'C++': 'bg-gradient-to-r from-blue-100 to-purple-200 text-blue-800 dark:from-blue-700 dark:to-purple-600 dark:text-blue-100',
      default: 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 dark:from-gray-700 dark:to-gray-600 dark:text-gray-100',
    };

    return colors[language] || colors.default;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation */}
      <div className="mb-8">
        <Link 
          to="/projects"
          className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
        >
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 shadow-xl overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
        {/* Header Section */}
        <div className="px-6 py-8 sm:px-8 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                {repo.name}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
                {repo.description || 'No description available for this repository.'}
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 mt-6">
                <div className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg px-3 py-2">
                  <svg className="h-5 w-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{repo.stargazers_count} stars</span>
                </div>
                <div className="flex items-center bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg px-3 py-2">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{repo.forks_count} forks</span>
                </div>
                {repo.open_issues_count !== undefined && (
                  <div className="flex items-center bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg px-3 py-2">
                    <svg className="h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{repo.open_issues_count} issues</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Details Section */}
        <div className="px-6 py-8 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technical Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Technical Information
              </h3>
              
              <div className="space-y-4">
                {/* Primary Language */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700/50 dark:to-blue-900/20 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Primary Language</h4>
                  {repo.language ? (
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getLanguageColor(repo.language)}`}>
                      {repo.language}
                    </span>
                  ) : (
                    <span className="text-gray-500 dark:text-gray-400 italic">Not specified</span>
                  )}
                </div>

                {/* Repository Size */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700/50 dark:to-blue-900/20 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Repository Size</h4>
                  <span className="text-gray-900 dark:text-white font-medium">
                    {repo.size ? `${(repo.size / 1024).toFixed(2)} MB` : 'Unknown'}
                  </span>
                </div>

                {/* Default Branch */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700/50 dark:to-blue-900/20 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Default Branch</h4>
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200">
                    {repo.default_branch || 'main'}
                  </span>
                </div>

                {/* License */}
                {repo.license && (
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700/50 dark:to-blue-900/20 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">License</h4>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {repo.license.name}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Project Details
              </h3>
              
              <div className="space-y-4">
                {/* Creation & Update Dates */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700/50 dark:to-blue-900/20 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Timeline</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Created:</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {new Date(repo.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Last Updated:</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {new Date(repo.updated_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Visibility */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700/50 dark:to-blue-900/20 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Visibility</h4>
                  <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                    repo.private 
                      ? 'bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100' 
                      : 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100'
                  }`}>
                    {repo.private ? 'Private' : 'Public'}
                  </span>
                </div>

                {/* Clone URL */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700/50 dark:to-blue-900/20 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Clone URL</h4>
                  <div className="flex items-center space-x-2">
                    <code className="flex-1 text-xs bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded font-mono text-gray-800 dark:text-gray-200 break-all">
                      {repo.clone_url}
                    </code>
                    <button
                      onClick={() => navigator.clipboard.writeText(repo.clone_url)}
                      className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                      title="Copy to clipboard"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Topics Section */}
          {repo.topics && repo.topics.length > 0 && (
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
                Topics & Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {repo.topics.map((topic, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-200 text-blue-800 dark:from-blue-700 dark:to-indigo-600 dark:text-blue-100 border border-blue-200 dark:border-blue-600"
                  >
                    #{topic}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-4">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
              >
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>
              
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-xl text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-200"
                >
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;