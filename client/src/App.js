import React, { useContext } from "react";
import Home from "./Home";
import Landing from "./Landing";
import { AuthContext } from "./providers/AuthContext";


function App() {
  const {accessToken} = useContext(AuthContext)
  return accessToken==="null" || !accessToken ? <Landing/>:  <Home code={accessToken}/>
}

export default App;
