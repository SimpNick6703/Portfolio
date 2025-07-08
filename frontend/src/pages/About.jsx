import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          About Me
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
          Full-stack developer passionate about building innovative and user-friendly applications.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl">
                SimpNick
              </h2>
              <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <svg className="flex-shrink-0 mr-1.5 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Remote, Worldwide
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <svg className="flex-shrink-0 mr-1.5 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                  Full-Stack Developer
                </div>
              </div>
            </div>
            <div className="mt-5 flex md:mt-0 md:ml-4">
              <a
                href="https://github.com/SimpNick6703"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                GitHub Profile
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Bio</h3>
            <div className="mt-4 prose dark:prose-invert max-w-none">
              <p>
                I'm a passionate full-stack developer with a focus on creating elegant, efficient, and user-friendly web applications.
                With experience in both frontend and backend development, I enjoy working on projects that solve real-world problems.
              </p>
              <p>
                My journey in software development started with Python, and I've since expanded my skill set to include
                modern JavaScript frameworks like React, as well as backend technologies like FastAPI and Django.
                I believe in writing clean, maintainable code and constantly learning new technologies to stay at the forefront of web development.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Skills</h3>
            <div className="mt-4">
              <h4 className="text-md font-medium text-gray-700 dark:text-gray-300">Programming Languages</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-100">
                  Python
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100">
                  JavaScript
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100">
                  HTML/CSS
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-700 dark:text-purple-100">
                  SQL
                </span>
              </div>

              <h4 className="mt-4 text-md font-medium text-gray-700 dark:text-gray-300">Frameworks & Libraries</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-100">
                  React
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100">
                  FastAPI
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-700 dark:text-purple-100">
                  Django
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-pink-100 text-pink-800 dark:bg-pink-700 dark:text-pink-100">
                  Tailwind CSS
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100">
                  Node.js
                </span>
              </div>

              <h4 className="mt-4 text-md font-medium text-gray-700 dark:text-gray-300">Tools & Technologies</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100">
                  Git
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-100">
                  Docker
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100">
                  VS Code
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-700 dark:text-purple-100">
                  PostgreSQL
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-700 dark:text-orange-100">
                  MongoDB
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Experience</h3>
            <div className="mt-4 space-y-6">
              <div>
                <h4 className="text-md font-medium text-gray-900 dark:text-white">Full-Stack Developer</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">2022 - Present</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Developing modern web applications using React, Python, and various backend frameworks.
                  Focus on creating responsive, user-friendly interfaces and robust API solutions.
                </p>
              </div>
              <div>
                <h4 className="text-md font-medium text-gray-900 dark:text-white">Software Developer</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">2021 - 2022</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Worked on various projects involving data analysis, web scraping, and automation.
                  Gained experience in Python development and database management.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Education & Interests</h3>
            <div className="mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Self-taught developer with a passion for continuous learning. I enjoy exploring new technologies,
                contributing to open-source projects, and building applications that make a difference.
              </p>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                When I'm not coding, I enjoy reading about technology trends, playing games, and exploring the outdoors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;