import React, { useState, useContext, useEffect } from "react";
import { SpotifyContext } from "../providers/SpotifyContext";
import { ThemeContext } from "../providers/ThemeContext";

export default function Tracks({long_term, short_term, medium_term}){

  const { colorTheme, setTheme } = useContext(ThemeContext)
  const [ data, setData ] = useState(long_term)
  const [ tab, setTab ] = useState('All Time')


  useEffect(() => {
  if(long_term)
    setData(long_term)
  },[long_term])
  
  const changeTab = link => {
    setTab(link)
    if(link === 'All Time'){
      setData(long_term)
    }
    else if(link === 'Last 6 Months'){
      setData(medium_term)
    }
    else{
      setData(short_term)
    }
  }

    return(
        <>
        <div className="dark:bg-primary-dark bg-primary-light flex-1 overflow-y-scroll">
              <div className="relative dark:bg-primary-dark bg-primary-light">
              <img src="assets/header_tracks.jpg" className="h-64 sm:h-80 w-full object-cover"/>
                    <div className="absolute bottom-0 left-0 right-0 pb-10 pl-5 text-3xl text-white font-semibold">Your Top Tracks</div>
                    <div className="absolute top-0 right-0 h-8 w-8 m-4 flex items-center justify-center rounded-full cursor-pointer bg-white text-black">
                      <button className="focus:outline-none" onClick={() => setTheme(colorTheme)}>
                      {colorTheme==='light' ? <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>}
                      </button>
                    </div>
                </div>
                <div className="container dark:bg-primary-dark bg-primary-light my-5">
                  <div className="px-5 py-4">
                  <nav className="grid grid-flow-col w-full items-center justify-start gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-text-secondary-light dark:text-text-secondary-dark">
                      {tab==='All Time' ? <div className="underline">All Time</div> : <div onClick={() => changeTab('All Time')} className="hover:underline">All Time</div>}
                      {tab==='Last 6 Months' ? <div className="underline">Last 6 Months</div> : <div onClick={() => changeTab('Last 6 Months')} className="hover:underline">Last 6 Months</div>}
                      {tab==='Last Month' ? <div className="underline">Last Month</div> : <div onClick={() => changeTab('Last Month')}  className="hover:underline">Last Month</div>}
                    </nav>
                  </div>
                </div>
                <div className="container dark:bg-primary-dark bg-primary-light">
                {!data && <div className="flex justify-center items-center mt-20">
                      <div className="h-2.5 w-2.5 bg-text-secondary-light dark:bg-text-secondary-dark rounded-full mr-1 animate-bounce"></div>
                      <div className="h-2.5 w-2.5 bg-text-secondary-light dark:bg-text-secondary-dark rounded-full mr-1 animate-bounce200"></div>
                      <div className="h-2.5 w-2.5 bg-text-secondary-light dark:bg-text-secondary-dark rounded-full animate-bounce400"></div>
                    </div>}
                {data && data.map((item, index) => {
                 return <a className="list-item" key={index} href={item.uri}>
                   <div key={index} className="py-4 px-5 hover:bg-card-light dark:hover:bg-card-dark">
                  <div className="grid grid-flow-col w-full justify-start items-center text-left gap-6">
                    <div className="text-xs sm:text-sm font-semibold dark:text-text-secondary-dark text-text-secondary-light flex justify-end">{index+1}</div>
                   {item.album.images && <img src={item.album.images[0].url} className="h-16 w-16 rounded-md object-cover flex-grow">
                    </img>}
                    <div className="flex flex-col flex-grow">
                      <div className="text-sm sm:text-base font-semibold pb-1 dark:text-text-primary-dark text-text-primary-light">{item.name}</div>
                      <div className="text-xs sm:text-sm font-semibold dark:text-text-secondary-dark text-text-secondary-light">
                        {item.artists[0].name}{item.artists.length>1 && item.artists.slice(1).map((artist, key) => {
                          return <span key={key}>, {artist.name}</span>
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                 </a>
                })}
                </div>
            </div>
        </>
    )
}