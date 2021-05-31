import React from "react";
import Home from "./Home";
import useAuth from "./hooks/useAuth";
import Landing from "./Landing";

const code = new URLSearchParams(window.location.search).get("code")


function App() {
  const accessToken = useAuth(code)
  return accessToken==="null" ? <Landing/>:  <Home code={accessToken}/>
}

export default App;
