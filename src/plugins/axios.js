"use strict";

import axios from "axios";

let config = {
  baseURL: "http://120.53.31.103:84"
  // baseURL: "https://wap.365msmk.com"
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    // token请求头
    config.headers.Authorization = sessionStorage.getItem("token")
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default _axios;
