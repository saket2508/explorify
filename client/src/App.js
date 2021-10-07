import React, { useContext } from "react";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import { SpotifyContext } from "./providers/SpotifyContext";


function App() {
  const { isAuthenticated, error } = useContext(SpotifyContext)

  if(error){
    return(
      <ErrorPage/>
    )
  }
  
  return isAuthenticated 
    ? <Home/>
    : <Landing/>
}

export default App;