import React, { useState } from 'react'
import Container from '../components/container'
import { BrowserRouter as Router, Link } from "react-router-dom";

// Renders on small devices
export default function SmallView() {

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
        <div className="xl:hidden min-h-screen flex flex-col bg-white dark:bg-card-dark">
          <Router>
          <Container/>
          <div className="flex-0 sticky overflow-hidden bottom-0 left-0 right-0">
            <div className="py-5 px-10 bg-white dark:bg-card-dark text-gray-700 shadow-lg w-full flex justify-between sm:justify-around">
              <Link to="/top-artists">
                {activeTab==='Artists' ? <a className="text-text-primary-light dark:text-text-primary-dark">
                  <span className="flex flex-col text-xs items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    Top Artists
                  </span>
                </a> : <a onClick={() => setActiveTab('Artists')} className="dark:text-text-secondary-dark text-text-secondary-light hover:text-black dark:hover:text-white">
                  <span className="flex flex-col text-xs items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    Top Artists
                  </span>
                </a>}
              </Link>
              <Link to="/top-tracks">
               {activeTab==='Tracks' ? <a className="text-text-primary-light dark:text-text-primary-dark">
                  <span className="flex flex-col text-xs items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Top Tracks
                  </span>
                </a> : <a onClick={() => setActiveTab('Tracks')} className="dark:text-text-secondary-dark text-text-secondary-light hover:text-black dark:hover:text-white">
                  <span className="flex flex-col text-xs items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Top Tracks
                  </span>
                </a>}
              </Link>
              <Link to="/recently-played">
               { activeTab==='Recent' ? <a className="text-text-primary-light dark:text-text-primary-dark">
                  <span className="flex flex-col items-center text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Recent
                  </span>
                </a> : <a onClick={() => setActiveTab('Recent')} className="dark:text-text-secondary-dark text-text-secondary-light hover:text-black dark:hover:text-white">
                  <span className="flex flex-col items-center text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Recent
                  </span>
                </a>}
              </Link>
            </div>
          </div>
          </Router>
        </div>
    )
}
