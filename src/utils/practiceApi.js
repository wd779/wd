import axios from "../plugins/axios";

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} data [请求时携带的参数]
 */
export function get(url, data) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: data
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} data [请求时携带的参数]
 */
export function post(url, data) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}

//题库选择分类
export function classify() {
  let token = localStorage.getItem("token");
  return request({
    url: `/api/app/point/classify`,
    headers: {
      Authorization: token
    },
    method: "GET"
  });
}

// 套卷练习分类接口
export function paper_package() {
  let token = localStorage.getItem("token");

  return request({
    url: `/api/app/exam/classify`,
    headers: {
      Authorization: token
    },
    method: "GET"
  });
}

// 习题收藏
export const AjaxQues_collect = data => get("/api/app/courseClassify", data);
