import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="text-center py-16 max-w-4xl bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 rounded-3xl shadow-2xl mx-4">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          <span className="block bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Hi, I'm SimpNick</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
          Passionate software developer with expertise in Python, JavaScript, and modern web technologies. 
          I build scalable web applications, AI-powered systems, and automation tools with a focus on creating user-centric solutions.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 px-4">
          <Link
            to="/projects"
            className="px-8 py-4 text-base font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 text-base font-medium rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-900 dark:text-white hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-full py-12 mt-12 bg-gradient-to-r from-white via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 rounded-2xl shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold tracking-wide uppercase">Technical Skills</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent sm:text-4xl">
              Technologies I Work With
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    Frontend Development
                  </dt>
                  <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    React, JavaScript, HTML, CSS, TailwindCSS, Bootstrap
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    Backend Development
                  </dt>
                  <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Python, Flask, FastAPI, SQLAlchemy, RESTful APIs
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    AI/ML & Databases
                  </dt>
                  <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Machine Learning, PostgreSQL, SQLite, Data Analysis
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.365 1.19.404 1.836z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    Tools & DevOps
                  </dt>
                  <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Docker, Git, WebSockets, Cryptography, API Integration
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    Automation & Security
                  </dt>
                  <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Web Scraping, BeautifulSoup, Fernet Encryption, Multi-threading
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    Education & Research
                  </dt>
                  <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    B.Tech CSE from NIT Rourkela, AI Research, Digital Twin Models
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="w-full py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold tracking-wide uppercase">Portfolio</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent sm:text-4xl">
              Featured Projects
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              Showcasing diverse technical skills and real-world applications
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* TalentScout - AI-Powered Hiring Assistant */}
            <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 overflow-hidden shadow-xl rounded-2xl border border-gray-200 dark:border-gray-600 transform hover:scale-105 transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">TalentScout - AI-Powered Hiring Assistant</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                  AI-powered conversational hiring assistant that automates technical interviews with structured phases, 
                  progressive assessment, and natural conversation flow using OpenAI API integration.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 dark:from-blue-700 dark:to-blue-600 dark:text-blue-100">
                    Python
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-green-100 to-green-200 text-green-800 dark:from-green-700 dark:to-green-600 dark:text-green-100">
                    Flask
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 dark:from-purple-700 dark:to-purple-600 dark:text-purple-100">
                    OpenAI API
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 dark:from-indigo-700 dark:to-indigo-600 dark:text-indigo-100">
                    ML
                  </span>
                </div>
                <div className="mt-6">
                  <a
                    href="https://github.com/SimpNick6703/TalentScout-Hiring-AI-Assistant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Splitwise Clone */}
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-700 overflow-hidden shadow-xl rounded-2xl border border-gray-200 dark:border-gray-600 transform hover:scale-105 transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Splitwise Clone - Expense Tracking</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                  Full-stack expense tracking application with comprehensive group expense management, 
                  multiple split types, automated balance calculations, and Docker containerization.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-800 dark:from-cyan-700 dark:to-cyan-600 dark:text-cyan-100">
                    React
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 dark:from-emerald-700 dark:to-emerald-600 dark:text-emerald-100">
                    FastAPI
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 dark:from-blue-700 dark:to-blue-600 dark:text-blue-100">
                    PostgreSQL
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 dark:from-gray-700 dark:to-gray-600 dark:text-gray-100">
                    Docker
                  </span>
                </div>
                <div className="mt-6">
                  <a
                    href="https://github.com/SimpNick6703/Splitwise-Clone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl shadow-sm text-white bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Disgram - Telegram to Discord Bridge */}
            <div className="bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-gray-700 overflow-hidden shadow-xl rounded-2xl border border-gray-200 dark:border-gray-600 transform hover:scale-105 transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Disgram - Telegram to Discord Bridge</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                  Automated message forwarding system with robust web scraping, rate limiting, 
                  multi-process architecture, and comprehensive media format support.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 dark:from-yellow-700 dark:to-yellow-600 dark:text-yellow-100">
                    Python
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 dark:from-orange-700 dark:to-orange-600 dark:text-orange-100">
                    Web Scraping
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-red-100 to-red-200 text-red-800 dark:from-red-700 dark:to-red-600 dark:text-red-100">
                    API Integration
                  </span>
                </div>
                <div className="mt-6">
                  <a
                    href="https://github.com/SimpNick6703"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Transport Company Management System */}
            <div className="bg-gradient-to-br from-white to-emerald-50 dark:from-gray-800 dark:to-gray-700 overflow-hidden shadow-xl rounded-2xl border border-gray-200 dark:border-gray-600 transform hover:scale-105 transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Transport Company Management</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                  Comprehensive web application for vehicle rental operations with CRUD operations, 
                  dashboard metrics, and responsive Bootstrap interface.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-green-100 to-green-200 text-green-800 dark:from-green-700 dark:to-green-600 dark:text-green-100">
                    Flask
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 dark:from-blue-700 dark:to-blue-600 dark:text-blue-100">
                    SQLAlchemy
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 dark:from-purple-700 dark:to-purple-600 dark:text-purple-100">
                    Bootstrap
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 dark:from-yellow-700 dark:to-yellow-600 dark:text-yellow-100">
                    JavaScript
                  </span>
                </div>
                <div className="mt-6">
                  <a
                    href="https://github.com/SimpNick6703"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl shadow-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-900 dark:text-white hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;