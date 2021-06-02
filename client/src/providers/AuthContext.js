import React, { createContext } from "react";
import useAuth from "../hooks/useAuth";

const code = new URLSearchParams(window.location.search).get("code")

export const AuthContext = createContext()

function AuthProvider({ children }){
  const {accessToken} = useAuth(code)

  return (
    <AuthContext.Provider value={{ accessToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider