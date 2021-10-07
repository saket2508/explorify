import React, { useContext } from 'react'
import NotFound from '../pages/NotFound';
import Artists from "../tabs/Artists";
import Tracks from "../tabs/Tracks";
import Recent from "../tabs/Recent";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect 
  } from "react-router-dom";
import { SpotifyContext } from '../providers/SpotifyContext'

export default function Container() {

    const { topArtistsYear,
        topArtistsSixMonths,
        topArtistsMonth,
        likedTracksYear,
        likedTracksSixMonths,
        likedTracksMonth,
        recentlyPlayed } = useContext(SpotifyContext)

    return (
        <Switch>
            <Route exact path="/top-artists">
                  <Artists 
                    long_term={topArtistsYear} 
                    medium_term={topArtistsSixMonths} 
                    short_term={topArtistsMonth}
                    />
            </Route>
            <Route exact path="/top-tracks">
                  <Tracks 
                    long_term={likedTracksYear} 
                    medium_term={likedTracksSixMonths} 
                    short_term={likedTracksMonth}
                    />
            </Route>
            <Route exact path="/recently-played">
                <Recent data={recentlyPlayed}/>
            </Route>
            <Route exact path="/">
                <Redirect to="/top-artists"/>
            </Route>
            <Route component={NotFound}/>
        </Switch>
    )
}
