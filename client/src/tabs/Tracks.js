import React from "react";

export default function Tracks(props){

  const {data} = props

    return(
        <>
        <div className="dark:bg-primary-dark bg-primary-light flex-1 overflow-y-scroll">
              <div className="relative dark:bg-primary-dark bg-primary-light">
                    <img className="h-64 sm:h-80 w-full object-cover" src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"/>
                    <div className="absolute bottom-0 left-0 right-0 pb-10 pl-5 text-3xl text-white font-semibold">Your Top Tracks</div>
                </div>
                <div className="container dark:bg-primary-dark bg-primary-light">
                {!data && <div className="flex justify-center items-center mt-20">
                      <div className="h-2.5 w-2.5 bg-text-secondary-light dark:bg-text-secondary-dark rounded-full mr-1 animate-bounce"></div>
                      <div className="h-2.5 w-2.5 bg-text-secondary-light dark:bg-text-secondary-dark rounded-full mr-1 animate-bounce200"></div>
                      <div className="h-2.5 w-2.5 bg-text-secondary-light dark:bg-text-secondary-dark rounded-full animate-bounce400"></div>
                    </div>}
                {data && data.map((item, index) => {
                 return <a className="list-item" key={index} href={item.uri}>
                   <div key={index} className="py-4 px-5 flex items-center justify-between hover:bg-card-light dark:hover:bg-card-dark">
                  <div className="inline-flex items-center gap-3 md:gap-6">
                    <div className="text-base font-semibold dark:text-text-secondary-dark text-text-secondary-light">{index+1}</div>
                    <img src={item.album.images[1].url} className="h-16 w-16 rounded-md">
                    </img>
                    <div className="flex flex-col">
                      <div className="text-base font-semibold pb-1 dark:text-text-primary-dark text-text-primary-light">{item.name}</div>
                      <div className="text-sm font-semibold dark:text-text-secondary-dark text-text-secondary-light flex flex-wrap">
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