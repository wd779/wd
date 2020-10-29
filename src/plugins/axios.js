
import axios from "axios";

let config = {
  baseURL: "http://120.53.31.103:84",
  // baseURL: "https://wap.365msmk.com"
  timeout: 10 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    // token请求头
    config.headers.Authorization = localStorage.getItem("token")
    return config;
  },
  function (error) {
    // 未响应
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // 响应成功
    return response;
  },
  function (error) {
    // 响应失败
    return Promise.reject(error);
  }
);

export default _axios;
