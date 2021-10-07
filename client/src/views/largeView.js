import React, { useState } from 'react'
import Container from '../components/container'
import { BrowserRouter as Router, Link } from "react-router-dom";
// Renders on large devices

export default function LargeView() {

  const getPathName = () => {
    if(window.location.pathname==='/recently-played'){
      return 'Recent'
    }
    else if(window.location.pathname === '/top-tracks'){
      return 'Tracks'
    }
    else{
      return 'Artists'
    }
}

  const [ activeTab, setActiveTab ] = useState(getPathName)

    return (
        <div className="hidden xl:block">
        <div className="h-screen flex bg-gray-100 dark:bg-dark">
        <Router>
          <main className="relative w-64 dark:bg-card-dark bg-card-light">
            <div className="text-gray-700 dark:text-white pt-10 md:px-4 lg:px-6 font-bold text-2xl tracking-wider">
              Explorify
            </div>
            <div className="pt-20 md:px-4 lg:px-6">
              <nav className="animate-nav flex flex-col gap-6">
                <Link to="/top-artists">
                 <div className="nav-item">
                 {activeTab==='Artists' ? <a className = "text-gray-700 dark:text-white">
                  <div className="font-medium py-3 flex items-center">
                      <span className="pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </span>
                      Artists
                    </div>
                 </a> : <a onClick={() => setActiveTab('Artists')} className = "dark:text-text-secondary-dark text-text-secondary-light hover:text-gray-700 dark:hover:text-white">
                  <div className="font-medium py-3 flex items-center">
                      <span className="pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </span>
                      Artists
                    </div>
                 </a>}
                 </div>
                </Link>
                <Link to="/top-tracks">
                 <div className="nav-item">
                 {activeTab === 'Tracks' ? <a className="text-gray-700 dark:text-white">
                 <div className="font-medium py-3 flex items-center">
                    <span className="pr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Tracks
                  </div>
                 </a> : <a onClick={() => setActiveTab('Tracks')} className="dark:text-text-secondary-dark text-text-secondary-light hover:text-gray-700 dark:hover:text-white">
                 <div className="font-medium py-3 flex items-center">
                    <span className="pr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Tracks
                  </div>
                 </a>}
                 </div>
                </Link>
                <Link to="/recently-played">
                  <div className="nav-item">
                  {activeTab==='Recent'? <a className="text-gray-700 dark:text-white">
                  <div className="font-medium py-3 flex items-center">
                    <span className="pr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    Recent
                  </div>
                  </a> : <a onClick={() => setActiveTab('Recent')} className="dark:text-text-secondary-dark text-text-secondary-light hover:text-gray-700 dark:hover:text-white">
                  <div className="font-medium py-3 flex items-center">
                    <span className="pr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    Recent
                  </div>
                  </a>}
                  </div>
                </Link>
              </nav>
            </div>
          </main>
          <main className="flex-1 flex overflow-hidden bg-card-light dark:bg-card-dark">
            <Container/>
          </main>
          </Router>
        </div>
        </div>
    )
}
