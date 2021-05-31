import React from "react";
import Artists from "./tabs/Artists";
import Tracks from "./tabs/Tracks";
import Recent from "./tabs/Recent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";

export default function Home() {

  const { colorTheme, setTheme } = React.useContext(ThemeContext)

  return (
      <div className="Home">
        <div className="hidden lg:block">
        <div className="h-screen flex bg-gray-100 dark:bg-dark">
        <Router>
          <main className="relative w-64 dark:bg-card-dark bg-card-light">
            <div className="text-black dark:text-white pt-10 md:px-4 lg:px-6 font-bold text-2xl tracking-wider">
              Explorify
            </div>
            <div className="pt-20 md:px-4 lg:px-6">
              <nav className="flex flex-col gap-6 border-b pb-5 border-gray-300 dark:border-gray-700">
                <Link to="/">
                 <a className = "text-text-secondary-light dark:text-text-secondary-dark hover:text-black dark:hover:text-white">
                  <div className="font-medium py-3 flex items-center">
                      <span className="pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </span>
                      Artists
                    </div>
                 </a>
                </Link>
                <Link to="/top-tracks">
                 <a className="text-text-secondary-light dark:text-text-secondary-dark hover:text-black dark:hover:text-white">
                 <div className="font-medium py-3 flex items-center">
                    <span className="pr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Tracks
                  </div>
                 </a>
                </Link>
                <Link to="/recently-played">
                  <a className="text-text-secondary-light dark:text-text-secondary-dark hover:text-black dark:hover:text-white">
                  <div className="font-medium py-3 flex items-center">
                    <span className="pr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    Recent
                  </div>
                  </a>
                </Link>
              </nav>
            </div>
            <div className="absolute bottom-0 left-0 right-0 pb-10 md:px-4 lg:px-6">
            <button onClick={() => setTheme(colorTheme)} className="text-text-secondary-light dark:text-text-secondary-dark pt-5">
                    {colorTheme==='dark' ? <div className="font-medium py-3 flex items-center">
                    Dark
                      <span className="pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                      </span>
                    </div> : <div className="font-medium text-sm py-3 flex items-center">
                    Light
                      <span className="pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                        </svg>
                      </span>
                    </div>}
                  </button>
            </div>
          </main>
          <main className="flex-1 flex overflow-hidden bg-card-light dark:bg-card-dark">
            <Switch>
              <Route exact path="/">
                <Artists/>
              </Route>
              <Route exact path="/top-tracks">
                <Tracks/>
              </Route>
              <Route exact path="/recently-played">
                <Recent/>
              </Route>
            </Switch>
          </main>
          </Router>
        </div>
        </div>
  
        <div className="lg:hidden min-h-screen flex flex-col bg-white dark:bg-card-dark">
          <Router>
            <Switch>
              <Route exact path="/">
                <Artists/>
              </Route>
              <Route exact path="/top-tracks">
                <Tracks/>
              </Route>
              <Route exact path="/recently-played">
                <Recent/>
              </Route>
            </Switch>
          <div className="flex-0 sticky overflow-hidden bottom-0 left-0 right-0">
            <div className="py-5 px-10 bg-white dark:bg-card-dark text-gray-700 shadow-lg w-full flex justify-between">
              <Link to="/">
                <a className="text-text-secondary-light hover:text-text-primary-light dark:text-text-primary-dark dark:hover:text-yellow-400">
                  <span className="flex flex-col text-xs items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    Top Artists
                  </span>
                </a>
              </Link>
              <Link to="/top-tracks">
                <a className="text-text-secondary-light hover:text-text-primary-light dark:text-text-primary-dark dark:hover:text-yellow-400">
                  <span className="flex flex-col text-xs items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Top Tracks
                  </span>
                </a>
              </Link>
              <Link to="/recently-played">
                <a className="text-text-secondary-light hover:text-text-primary-light dark:text-text-primary-dark dark:hover:text-yellow-400">
                  <span className="flex flex-col items-center text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Recent
                  </span>
                </a>
              </Link>
              <div>
               <button onClick={() => setTheme(colorTheme)} className="text-text-secondary-light hover:text-text-primary-light dark:text-text-primary-dark dark:hover:text-yellow-400">
               {colorTheme==='dark' ? <span className="flex flex-col items-center text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  Dark
                </span> : <span className="flex flex-col items-center text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Light
                </span>}
               </button>
              </div>
            </div>
          </div>
          </Router>
        </div>
      </div>
    );
  }
  