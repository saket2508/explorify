import React from 'react'

const redirect_uri = process.env.NODE_ENV === 'production' ? 'https://explorify-music.netlify.app/' : 'http://localhost:3000'

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirect_uri}&scope=user-read-private%20user-top-read%20playlist-read-private%20playlist-read-collaborative%20user-read-recently-played`

export default function Landing() {

    return (
        <div className="relative h-screen flex justify-center items-center">
            <img src="/images/landing_bg.jpg" className="object-cover h-full w-full"/>
            <div className="absolute">
                <div className="text-white text-center pb-5 font-bold text-4xl tracking-wider">
                    Explorify
                </div>
           <a href={AUTH_URL}>
                <div className="w-full flex bg-transparent border-2 border-white text-white hover:text-black hover:bg-white font-bold tracking-wider uppercase rounded-full px-6 py-3">
                    <span className="pr-2">
                    <i class="fab fa-spotify"></i>
                    </span>
                    Connect with Spotify
                </div>
            </a>
            </div>
        </div>
    )
}
