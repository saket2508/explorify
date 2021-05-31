import React from "react";


export default function Recent(props){

  const {data} = props

    return(
        <>
        <div className="flex-1 overflow-y-scroll">
              <div className="relative dark:bg-primary-dark bg-primary-light">
                    <img className="h-64 sm:h-80 w-full object-cover" src="https://images.unsplash.com/photo-1421217336522-861978fdf33a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"/>
                    <div className="absolute bottom-0 left-0 right-0 pb-10 pl-5 text-3xl text-white font-semibold">Recently Played</div>
                </div>
                <div className="container dark:bg-primary-dark bg-primary-light">
                {data && data.map((item, index) => {
                  return(
                  <div key={index} className="py-4 px-5 flex items-center justify-between hover:bg-card-light dark:hover:bg-card-dark">
                    <div className="inline-flex gap-3">
                      <div className="text-base font-semibold dark:text-text-primary-dark text-text-primary-light">{index+1}</div>
                      <div className="flex flex-col">
                        <div className="text-base font-semibold pb-1 dark:text-text-primary-dark text-text-primary-light">{item.track.name}</div>
                        <div className="text-sm font-semibold dark:text-text-secondary-dark text-text-secondary-light flex">
                          {item.track.artists[0].name}{item.track.artists.length > 1 && item.track.artists.slice(1).map((artist, key) => {
                            <span key={key}>, {artist.name}</span>
                          })}
                        </div>
                      </div>
                    </div>
                    <img src={item.track.album.images[1].url} className="h-16 w-16 rounded-full sm:w-24 sm:h-24">
                    </img>
                </div>
                  )
                })}
                </div>
            </div>
        </>
    )
}