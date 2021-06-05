import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const SERVER_URI =
  process.env.NODE_ENV === "production"
    ? "https://explorify-backend.herokuapp.com"
    : "http://localhost:5000";

export default function useAuth(code) {
  const getAccessToken = () => {
    return Cookies.get("access_token");
  };

  const getRefreshToken = () => {
    return Cookies.get("refresh_token");
  };

  const getExpiresIn = () => {
    return Cookies.get("expires_in");
  };

  const SignOut = () => {
    // console.log('signing out')
    setAccessToken();
    setExpiresIn();
    setRefreshToken();
    Cookies.removeItem("access_token");
    Cookies.removeItem("refresh_token");
    Cookies.removeItem("expires_in");
    window.location = "/";
  };

  const getTokenStatus = () => {
    if (Cookies.get("timestamp")) {
      return Date.now() - Cookies.get("timestamp") >= 3600000;
    }
    return false;
  };

  const [accessToken, setAccessToken] = useState(getAccessToken);
  const [refreshToken, setRefreshToken] = useState(getRefreshToken);
  const [expiresIn, setExpiresIn] = useState(getExpiresIn);
  const [tokenExpired, setTokenExpired] = useState(getTokenStatus);

  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    if (!code) {
      return;
    }
    if (accessToken === "null" || !accessToken) {
      setConnecting(true);
      axios
        .post(`${SERVER_URI}/login`, {
          code,
        })
        .then((res) => {
          setAccessToken(res.data.accessToken);
          setRefreshToken(res.data.refreshToken);
          setExpiresIn(res.data.expiresIn);
          Cookies.set("access_token", res.data.accessToken);
          Cookies.set("refresh_token", res.data.refreshToken);
          Cookies.set("expires_in", res.data.expiresIn);
          Cookies.set("timestamp", Date.now());
          setConnecting(false);
          window.history.pushState({}, null, "/");
        })
        .catch((err) => {
          console.error(err);
          setConnecting(false);
          window.location = "/";
        });
    }
  }, [code]);

  useEffect(() => {
    if (
      !refreshToken ||
      !expiresIn ||
      refreshToken === "null" ||
      expiresIn === "null"
    ) {
      return;
    }
    if (tokenExpired === true) {
      axios
        .post(`${SERVER_URI}/refresh`, {
          refreshToken,
        })
        .then((res) => {
          setAccessToken(res.data.accessToken);
          setExpiresIn(res.data.expiresIn);
          Cookies.set("access_token", res.data.accessToken);
          Cookies.set("expires_in", res.data.expiresIn);
          Cookies.set("timestamp", Date.now());
          window.location.href = "/";
        })
        .catch((e) => {
          console.log("error");
          console.error(e);
          window.location = "/";
        });
    }
  }, [tokenExpired]);

  return { accessToken, connecting };
}
