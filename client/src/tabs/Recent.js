import React, { useContext } from "react";
import { ThemeContext } from "../providers/ThemeContext";


export default function Recent(props){

  const { data } = props
  const { colorTheme, setTheme } = useContext(ThemeContext)

    return(
        <>
        <div className="dark:bg-primary-dark bg-primary-light flex-1 overflow-y-scroll">
              <div className="relative dark:bg-primary-dark bg-primary-light">
                    <img className="h-64 sm:h-80 w-full object-cover" src="/assets/header_recent.jpg"/>
                    <div className="absolute bottom-0 left-0 right-0 pb-10 pl-5 text-3xl text-white font-semibold">Recently Played</div>
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
                <div className="container dark:bg-primary-dark bg-primary-light">
                {!data && <div className="flex justify-center items-center mt-20">
                      <div className="h-2.5 w-2.5 bg-text-secondary-light dark:bg-text-secondary-dark rounded-full mr-1 animate-bounce"></div>
                      <div className="h-2.5 w-2.5 bg-text-secondary-light dark:bg-text-secondary-dark rounded-full mr-1 animate-bounce200"></div>
                      <div className="h-2.5 w-2.5 bg-text-secondary-light dark:bg-text-secondary-dark rounded-full animate-bounce400"></div>
                    </div>}
                {data && data.map((item, index) => {
                  return(
                  <a className="list-item" key={index} href={item.track.uri}>
                    <div className="py-4 px-5 hover:bg-card-light dark:hover:bg-card-dark">
                    <div className="grid grid-flow-col w-full justify-start items-center gap-6">
                      <div className="text-xs md:text-sm font-semibold dark:text-text-secondary-dark text-text-secondary-light">{index+1}</div>
                      {item.track.album.images && <img src={item.track.album.images[0].url} className="h-16 w-16 rounded-md object-cover">
                      </img>}
                      <div className="flex flex-col">
                        <div className="text-sm md:text-base font-semibold pb-1 dark:text-text-primary-dark text-text-primary-light">{item.track.name}</div>
                        <div className="text-xs md:text-sm font-semibold dark:text-text-secondary-dark text-text-secondary-light flex">
                          {item.track.artists[0].name}{item.track.artists.length>1 && item.track.artists.slice(1).map((artist, key) => {
                            return <span key={key}>, {artist.name}</span>
                          })}
                        </div>
                      </div>
                    </div>
                </div>
                  </a>
                  )
                })}
                </div>
            </div>
        </>
    )
}