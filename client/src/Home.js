import React, { useState, useEffect, useContext } from "react";
import Artists from "./tabs/Artists";
import Tracks from "./tabs/Tracks";
import Recent from "./tabs/Recent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ThemeContext } from "./providers/ThemeContext";
import axios from "axios";



export default function Home(props) {


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

  const { colorTheme, setTheme } = useContext(ThemeContext)
  const [ likedTracks, setLikedTracks ] = useState({
    'short_term':null,
    'medium_term':null,
    'long_term':null
  })

  const [ topArtists, setTopArtists ] = useState({
    'short_term':null,
    'medium_term':null,
    'long_term':null
  })

  const [ recentlyPlayed, setRecentlyPlayed ] = useState()

  const [ activeTab, setActiveTab ] = useState(getPathName)

  const code = props.code
  
  const headers = {
    Authorization: `Bearer ${code}`,
    'Content-Type': 'application/json',
  }

  const getRecentlyPlayedTracks = () => {
    axios.get('https://api.spotify.com/v1/me/player/recently-played', {headers})
      .then(res => res.data)
      .then(data => {
        setRecentlyPlayed(data.items)
      }, function(err){
        console.log(err.message)
      })
  }

  const getTopArtists = () => {
    axios.get('https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term', {headers})
      .then(res => res.data)
      .then(data => {
        setTopArtists(() => {
          topArtists.long_term = data.items
          return topArtists
        })   
      }, function(err){
        console.log(err.message)
      })

      axios.get('https://api.spotify.com/v1/me/top/artists?limit=50', {headers})
      .then(res => res.data)
      .then(data => {
        setTopArtists(() => {
          topArtists.medium_term = data.items
          return topArtists
        })   
      }, function(err){
        console.log(err.message)
      })

      axios.get('https://api.spotify.com/v1/me/top/artists?limit=50&time_range=short_term', {headers})
      .then(res => res.data)
      .then(data => {
        setTopArtists(() => {
          topArtists.short_term = data.items
          return topArtists
        })   
      }, function(err){
        console.log(err.message)
      })
    }
  
  const getTopTracks = () => {
    axios.get('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term', {headers})
      .then(res => res.data)
      .then(data => {
        setLikedTracks(() => {
          likedTracks.long_term = data.items
          return likedTracks
        })     
      }, function(err){
        console.log(err.message)
      })

      axios.get('https://api.spotify.com/v1/me/top/tracks?limit=50', {headers})
      .then(res => res.data)
      .then(data => {
        setLikedTracks(() => {
          likedTracks.medium_term = data.items
          return likedTracks
        })   
      }, function(err){
        console.log(err.message)
      })

      axios.get('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=short_term', {headers})
      .then(res => res.data)
      .then(data => {
        setLikedTracks(() => {
          likedTracks.short_term = data.items
          return likedTracks
        })  
      }, function(err){
        console.log(err.message)
      })
  }

  useEffect(() => {
    getTopArtists()
    getTopTracks()
    getRecentlyPlayedTracks()
  }, [])

  return (
      <div className="transition duration-500">
        <div className="hidden lg:block">
        <div className="h-screen flex bg-gray-100 dark:bg-dark">
        <Router>
          <main className="relative w-64 dark:bg-card-dark bg-card-light">
            <div className="text-gray-700 dark:text-white pt-10 md:px-4 lg:px-6 font-bold text-2xl tracking-wider">
              Explorify
            </div>
            <div className="pt-20 md:px-4 lg:px-6">
              <nav className="animate-nav flex flex-col gap-6">
                <Link to="/">
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
          <Switch>
              <Route exact path="/">
                <Artists data={topArtists}/>
              </Route>
              <Route exact path="/top-tracks">
                <Tracks data={likedTracks}/>
              </Route>
              <Route exact path="/recently-played">
                <Recent data={recentlyPlayed}/>
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
                <Artists data={topArtists}/>
              </Route>
              <Route exact path="/top-tracks">
                <Tracks data={likedTracks}/>
              </Route>
              <Route exact path="/recently-played">
                <Recent data={recentlyPlayed}/>
              </Route>
            </Switch>
          <div className="flex-0 sticky overflow-hidden bottom-0 left-0 right-0">
            <div className="py-5 px-10 bg-white dark:bg-card-dark text-gray-700 shadow-lg w-full flex justify-between">
              <Link to="/">
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
      </div>
    );
  }
  