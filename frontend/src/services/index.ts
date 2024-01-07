import Axios from "axios";

import { getToken } from "./helpers";
import { baseURL } from "./urls";

const service = Axios.create({
  baseURL: baseURL,
});

// request interceptor to add the token
service.interceptors.request.use((request) => {
  const authInfo = getToken();
  if (authInfo) {
    request.headers["Authorization"] = `Bearer ${authInfo}`;
    request.headers["Content-Type"] = "application/json";
  }
  request.headers["Access-Control-Allow-Origin"] = "*";
  return request;
});

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      if (
        !getToken() &&
        !["/login", "/register", "/"].includes(window.location.pathname)
      )
        window.location.replace("/login");

      // error.response.data.detail = "Invalid Token";
    }
    return Promise.reject(error);
  }
);

export default service;
