import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAuth(code) {

  const getAccessToken = () => {
    if(localStorage.getItem('access_token')){
      return localStorage.getItem('access_token')
    }
    return 'null'
  }

  const getRefreshToken = () => {
    if(localStorage.getItem('refresh_token')){
      return localStorage.getItem('refresh_token')
    }
    return 'null'
  }

  const getExpiresIn = () => {
    if(localStorage.getItem('expires_in')){
      return localStorage.getItem('expires_in')
    }
    return 'null'
  }

  const getTokenStatus = () => {
    if(localStorage.getItem('timestamp')){
      return (Date.now() - localStorage.getItem('timestamp'))>= 3600000
    }
    else{
      return false
    }
  }


    const [accessToken, setAccessToken] = useState(getAccessToken);
    const [refreshToken, setRefreshToken] = useState(getRefreshToken);
    const [expiresIn, setExpiresIn] = useState(getExpiresIn);
    const tokenExpired = getTokenStatus()
  
    useEffect(() => {
      if(!code)
        return 
      if(accessToken==='null')
        axios.post('http://localhost:5000/login', {
            code
        }).then(res => {
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            localStorage.setItem('access_token', res.data.accessToken)
            localStorage.setItem('refresh_token', res.data.refreshToken)
            localStorage.setItem('expires_in', res.data.expiresIn)
            localStorage.setItem('timestamp', Date.now())
            window.history.pushState({}, null, "/")
        }).catch(err => {
            console.error(err)
            window.location = '/'
        })
    }, [code])

    useEffect(() => {
      if(refreshToken==='null') return
      if(tokenExpired===true){
        axios.post("http://localhost:5000/refresh", {
          refreshToken,
        }).then(res => {
          setAccessToken(res.data.accessToken)
          setExpiresIn(res.data.expiresIn)
          localStorage.setItem('access_token', accessToken)
          localStorage.setItem('timestamp', Date.now())
        })
      }
    }, [refreshToken, tokenExpired])

    return accessToken
}
