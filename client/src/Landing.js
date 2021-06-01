import React from 'react'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=f03e3b87cf5e45a89bbf4552cc4f1205&response_type=code&redirect_uri=http://localhost:3000&scope=user-read-private%20user-top-read%20playlist-read-private%20playlist-read-collaborative%20user-read-recently-played"

export default function Landing() {

    return (
        <div className="relative h-screen flex justify-center items-center">
            <img className="object-cover h-full w-full" src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"/>
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
