import axios from "axios";
import { Toast } from "vant";
// 引入获取设备ID方法
import { Guid } from "../utils/guid";
let deviceid=null;//初始化设备id
// 先获取设备id 如果有 使用之前的 如果没有获取最新的
// console.log(Guid.NewGuid().ToString("D"))
let id= localStorage.getItem("deviceid")
if(id){
    deviceid=id
}else{
    deviceid=Guid.NewGuid().ToString("D")
}
localStorage.setItem("deviceid",deviceid)
let config = {
  baseURL: "http://120.53.31.103:84",
  // baseURL: "https://wap.365msmk.com",
  timeout: 5 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    Toast.loading({
      duration: 0,
      message: "加载中...",
      forbidClick: true,
    });
    // 携带token
    // console.log(JSON.parse(window.localStorage.getItem("user")).remember_token);


    let token = "";
    if (localStorage.getItem("user")) {
      // console.log("111");
        token = (JSON.parse(localStorage.getItem("user"))).remember_token ;
    } else { 
      token = ""
    }
    
    // console.log(token);
    if (token != "") {
      config.headers.Authorization = `Bearer${token}`
    }
    // devicetype
    config.headers.devicetype = "H5"
    // 设备ID
    config.headers.deviceid = deviceid

    
    return config;
  },
  function(error) {
    // 未响应
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // 响应成功

    Toast.clear();
    return response;
  },
  function(error) {
    // 响应失败
    return Promise.reject(error);
  }
);

export default _axios;
