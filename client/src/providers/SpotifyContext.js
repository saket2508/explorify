import React, { createContext, useState, useContext, useEffect } from "react";
import useAuth from '../hooks/useAuth';
import axios from "axios";

const code = new URLSearchParams(window.location.search).get("code")

export const SpotifyContext = createContext()

function SpotifyProvider({ children }){
    const { accessToken, connecting, SignOut, error, setError, tokenExpired } = useAuth(code)

    const headers = {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
    }

    const [ isAuthenticated, setIsAuthenticated ] = useState(accessToken ? true : false)

    const [ topArtistsYear, setTopArtistsYear ] = useState()
    const [ topArtistsSixMonths, setTopArtistsSixMonths ] = useState()
    const [ topArtistsMonth, setTopArtistsMonth ] = useState()

    const [ likedTracksYear, setLikedTracksYear ] = useState()
    const [ likedTracksSixMonths, setLikedTracksSixMonths ] = useState()
    const [ likedTracksMonth, setLikedTracksMonth ] = useState()

    const [ recentlyPlayed, setRecentlyPlayed ] = useState()

    const getData = () => {
        // run all axios calls
        const recentlyPlayedTracksReq = axios.get('https://api.spotify.com/v1/me/player/recently-played', { headers })
        const topArtistsAllTimeReq = axios.get('https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term', { headers })
        const topArtistsSixMonthsReq = axios.get('https://api.spotify.com/v1/me/top/artists?limit=50', { headers })
        const topArtistsMonthReq = axios.get('https://api.spotify.com/v1/me/top/artists?limit=50&time_range=short_term', { headers })
        const topTracksAllTimeReq = axios.get('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term', { headers })
        const topTracksSixMonthsReq = axios.get('https://api.spotify.com/v1/me/top/tracks?limit=50', { headers })
        const topTracksMonthReq = axios.get('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=short_term', { headers })

        axios.all([
            recentlyPlayedTracksReq,
            topArtistsAllTimeReq,
            topArtistsSixMonthsReq,
            topArtistsMonthReq,
            topTracksAllTimeReq,
            topTracksSixMonthsReq,
            topTracksMonthReq
        ]).then(axios.spread((...responses) => {
            setRecentlyPlayed(responses[0].data.items)
            setTopArtistsYear(responses[1].data.items)
            setTopArtistsSixMonths(responses[2].data.items)
            setTopArtistsMonth(responses[3].data.items)
            setLikedTracksYear(responses[4].data.items)
            setLikedTracksSixMonths(responses[5].data.items)
            setLikedTracksMonth(responses[6].data.items)
        })).catch(errors => {
            console.log(errors)
            // trigger error only if the token isn't being refreshed
            if(!tokenExpired){
                setError(true)
            }
        })
    }

    useEffect(() => {
        if(error){
            return
        }
        if(!accessToken){
            setIsAuthenticated(false)
            return
        }
        setIsAuthenticated(true)
        getData()
    }, [accessToken])

    return (
        <SpotifyContext.Provider 
            value={{ 
                error,
                setError,
                connecting,
                SignOut,
                isAuthenticated, 
                setIsAuthenticated,
                topArtistsYear,
                topArtistsSixMonths,
                topArtistsMonth,
                likedTracksYear,
                likedTracksSixMonths,
                likedTracksMonth,
                recentlyPlayed
            }}>
          {children}
        </SpotifyContext.Provider>
      )
}

export default SpotifyProvider