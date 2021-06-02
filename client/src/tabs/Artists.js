import React from "react";


export default function Artists(props){

  const {data} = props

    return(
        <>
        <div className="dark:bg-primary-dark bg-primary-light flex-1 overflow-y-scroll">
              <div className="relative dark:bg-primary-dark bg-primary-light">
                <img src="/images/artist.jpg" className="h-64 sm:h-80 w-full object-cover"/>
                    <div className="absolute bottom-0 left-0 right-0 pb-10 pl-5 text-3xl text-white font-semibold">Your Top Artists</div>
                </div>
                <div className="container dark:bg-primary-dark bg-primary-light">
                  {!data && <div className="flex justify-center items-center mt-20">
                      <div className="h-2.5 w-2.5 bg-text-secondary-light dark:bg-text-secondary-dark rounded-full mr-1 animate-bounce"></div>
                      <div className="h-2.5 w-2.5 bg-text-secondary-light dark:bg-text-secondary-dark rounded-full mr-1 animate-bounce200"></div>
                      <div className="h-2.5 w-2.5 bg-text-secondary-light dark:bg-text-secondary-dark rounded-full animate-bounce400"></div>
                    </div>}
                  {data && data.map((item, index) => {
                    return (
                      <a className="list-item" key={index} href={item.uri}>
                        <div key={index} className="py-4 px-5 flex items-center justify-between hover:bg-card-light dark:hover:bg-card-dark">
                          <div className="inline-flex items-center gap-3 md:gap-6">
                            <div className="text-base font-semibold dark:text-text-secondary-dark text-text-secondary-light">{index+1}</div>
                            <img src={item.images[1].url} className="h-16 w-16 rounded-md">
                          </img>
                            <div className="flex flex-col">
                              <div className="text-base font-semibold pb-1 dark:text-text-primary-dark text-text-primary-light">{item.name}</div>
                              <div className="capitalize text-sm font-semibold dark:text-text-secondary-dark text-text-secondary-light flex flex-wrap">
                                {item.genres[0]}{item.genres.length>1 && item.genres.length<=3 && item.genres.slice(1, 3).map((genre, key) => {
                                  return  <span key={key}>, {genre}</span>
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