import axios from "axios";
import Cookies from "js-cookie";
export default class Api {
  constructor(setToken = true, baseURL) {
    this.api = axios.create({
      baseURL: baseURL,
    });

    if (setToken) {
      this.setToken();
    }
  }

  setToken = () => {
    this.api.interceptors.request.use((config) => {
      config.headers["Authorization"] = `Bearer ${Cookies.get("access_token")}`;
      return config;
    });
  };

  get = (url, data) => {
    return this.api
      .get(url, { params: data })
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  };

  post = (url, data, headers = null) => {
    if (headers) {
      for (const header in headers) {
        if (headers[header]) {
          this.api.defaults.headers[header] = headers[header];
        }
      }
    }
    return this.api
      .post(url, data)
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  };

  put = (url, data) => {
    return this.api
      .put(url, data)
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  };

  delete = (url) => {
    return this.api
      .delete(url)
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  };
}
