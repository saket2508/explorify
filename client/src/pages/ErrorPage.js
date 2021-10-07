import React from 'react'

export default function ErrorPage() {
    return (
        <div className="w-full">
            <div className="mt-10 flex flex-col justify-center items-center">
                <img className="h-72 w-72 sm:h-80 sm:w-80" src='/assets/error.png'/>
                <h1 className="text-4xl text-black dark:text-white pt-3 font-semibold">Error</h1>
                <p className="text-center text-gray-700 text-sm sm:text-base dark:text-white tracker-wide mt-4">
                    There was an error getting data from Spotify :(
                </p>
            </div>
        </div>
    )
}
