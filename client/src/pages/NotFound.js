import React from 'react'

export default function NotFound() {
    return (
        <div className="dark:bg-primary-dark bg-primary-light flex-1 overflow-y-scroll">
            <div className="mt-10 flex flex-col justify-center items-center">
                <img className="h-72 w-72 sm:h-80 sm:w-80" src='/assets/not_found.png'/>
                <h1 className="text-4xl text-black dark:text-white font-semibold">404</h1>
                <p className="text-gray-700 text-sm sm:text-base dark:text-white tracker-wide mt-4">
                    The page you are looking for doesn't exist :(
                </p>
            </div>
        </div>
    )
}
