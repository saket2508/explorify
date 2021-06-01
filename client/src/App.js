import React from "react";
import Home from "./Home";
import Landing from "./Landing";
import useAuth from "./hooks/useAuth";

const code = new URLSearchParams(window.location.search).get("code")

function App() {
  const {accessToken, SignOut} = useAuth(code)
  return accessToken==="null" || !accessToken ? <Landing/>:  <Home code={accessToken} signOut = {SignOut}/>
}

export default App;
