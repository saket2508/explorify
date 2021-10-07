import React, { useState, useEffect } from 'react';
import axios from 'axios';


const SERVER_URI = process.env.NODE_ENV==='production' ? 'https://explorify-backend.herokuapp.com' : 'http://localhost:5000'

export default function useAuth(code) {

  const getAccessToken = () => {
    if(localStorage.getItem('access_token')){
      return localStorage.getItem('access_token')
    }
    return null
  }

  const getRefreshToken = () => {
    if(localStorage.getItem('refresh_token')){
      return localStorage.getItem('refresh_token')
    }
    return null
  }

  const getExpiresIn = () => {
    if(localStorage.getItem('expires_in')){
      return localStorage.getItem('expires_in')
    }
    return null
  }

  const SignOut = () => {
    setAccessToken()
    setExpiresIn()
    setRefreshToken()
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('expires_in')
    window.location = '/'
  }

  const getTokenStatus = () => {
    if(localStorage.getItem('timestamp')){
      return (Date.now() - localStorage.getItem('timestamp'))>= 3600000
    }
    return false
  }


    const [ accessToken, setAccessToken ] = useState(getAccessToken);
    const [ refreshToken, setRefreshToken ] = useState(getRefreshToken);
    const [ expiresIn, setExpiresIn ] = useState(getExpiresIn);
    const [ tokenExpired, setTokenExpired ] = useState(getTokenStatus)
    const [ error, setError ] = useState(false)
    const [ connecting, setConnecting ] = useState(false)

  
    useEffect(() => {
      if(!code)
        return 
      // not signed in
      if(!accessToken){
        setConnecting(true)
        axios.post(`${SERVER_URI}/login`, {
            code
        }).then(res => {
            console.log('Signing in')
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            localStorage.setItem('access_token', res.data.accessToken)
            localStorage.setItem('refresh_token', res.data.refreshToken)
            localStorage.setItem('expires_in', res.data.expiresIn)
            localStorage.setItem('timestamp', Date.now())
            setConnecting(false)
            window.history.pushState({}, null, "/")
        }).catch(err => {
            console.error(err)
            setError(true)
            setConnecting(false)
        })
      }
    }, [code])


    useEffect(() => {
      if (!refreshToken || !expiresIn) 
        return 

      // token has expired
        if(tokenExpired){
          axios.post(`${SERVER_URI}/refresh`, {
            refreshToken,
          }).then(res => {
            console.log('Refreshing')
            setAccessToken(res.data.accessToken)
            setExpiresIn(res.data.expiresIn)
            localStorage.setItem('access_token', res.data.accessToken)
            localStorage.setItem('expires_in', res.data.expiresIn)
            localStorage.setItem('timestamp', Date.now())
          })
          .catch(e => {
            setError(true)
            console.log('error')
            console.error(e)
          })
        }
    }, [tokenExpired])

    return { accessToken, connecting, SignOut, error, setError, tokenExpired }
}


