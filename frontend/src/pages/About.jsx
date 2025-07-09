import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent sm:text-4xl">
          About Me
        </h1>
      </div>

      <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 shadow-xl overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
        <div className="px-6 py-8 sm:p-8">
          <div className="mb-8">
            <h3 className="text-lg font-medium bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Professional Summary</h3>
            <div className="mt-4 prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                Passionate software developer with expertise in Python, JavaScript, and modern web technologies. 
                Demonstrated experience in building scalable web applications, AI-powered systems, and automation tools. 
                Strong background in machine learning, data analysis, and system integration with a focus on creating user-centric solutions.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
            <h3 className="text-lg font-medium bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Technical Skills</h3>
            <div className="mt-4">
              <h4 className="text-md font-medium text-gray-700 dark:text-gray-300">Programming Languages</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 dark:from-blue-700 dark:to-blue-600 dark:text-blue-100">
                  Python
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 dark:from-yellow-700 dark:to-yellow-600 dark:text-yellow-100">
                  JavaScript
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-green-100 to-green-200 text-green-800 dark:from-green-700 dark:to-green-600 dark:text-green-100">
                  HTML/CSS
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 dark:from-purple-700 dark:to-purple-600 dark:text-purple-100">
                  SQL
                </span>
              </div>

              <h4 className="mt-4 text-md font-medium text-gray-700 dark:text-gray-300">Frontend Technologies</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-800 dark:from-cyan-700 dark:to-cyan-600 dark:text-cyan-100">
                  React
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-teal-100 to-teal-200 text-teal-800 dark:from-teal-700 dark:to-teal-600 dark:text-teal-100">
                  TailwindCSS
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 dark:from-purple-700 dark:to-purple-600 dark:text-purple-100">
                  Bootstrap
                </span>
              </div>

              <h4 className="mt-4 text-md font-medium text-gray-700 dark:text-gray-300">Backend & Databases</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-green-100 to-emerald-200 text-green-800 dark:from-green-700 dark:to-emerald-600 dark:text-green-100">
                  Flask
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-emerald-100 to-green-200 text-emerald-800 dark:from-emerald-700 dark:to-green-600 dark:text-emerald-100">
                  FastAPI
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-200 text-blue-800 dark:from-blue-700 dark:to-indigo-600 dark:text-blue-100">
                  PostgreSQL
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 dark:from-gray-700 dark:to-gray-600 dark:text-gray-100">
                  SQLite
                </span>
              </div>

              <h4 className="mt-4 text-md font-medium text-gray-700 dark:text-gray-300">AI/ML & Tools</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-pink-100 to-rose-200 text-pink-800 dark:from-pink-700 dark:to-rose-600 dark:text-pink-100">
                  Machine Learning
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-100 to-purple-200 text-indigo-800 dark:from-indigo-700 dark:to-purple-600 dark:text-indigo-100">
                  Docker
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-orange-100 to-red-200 text-orange-800 dark:from-orange-700 dark:to-red-600 dark:text-orange-100">
                  Git
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-violet-100 to-purple-200 text-violet-800 dark:from-violet-700 dark:to-purple-600 dark:text-violet-100">
                  WebSockets
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
            <h3 className="text-lg font-medium bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Education</h3>
            <div className="mt-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <h4 className="text-md font-semibold text-gray-900 dark:text-white">B.Tech in Computer Science and Engineering</h4>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">National Institute of Technology, Rourkela</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">2020 - 2024 • Rourkela, Odisha, India</p>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
            <h3 className="text-lg font-medium bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Key Achievements</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">10+</span>
                  <span className="ml-2 text-sm text-green-700 dark:text-green-300">Public Repositories</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">AI/ML</span>
                  <span className="ml-2 text-sm text-purple-700 dark:text-purple-300">Integration Expert</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">Web</span>
                  <span className="ml-2 text-sm text-blue-700 dark:text-blue-300">Development</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">Open Source</span>
                  <span className="ml-2 text-sm text-orange-700 dark:text-orange-300">Contributor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;