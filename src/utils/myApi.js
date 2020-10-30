import axios from '../plugins/axios';

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} data [请求时携带的参数]
 */
export function get(url, data) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: data
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} data [请求时携带的参数] 
 */
export function post(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
// 登录
export const AjaxLogin = data => post('/api/app/login',data) // 1密码登录 2验证码登录
export const AjaxSmsLogin = data => post('/api/app/smsCode',data) // 验证码
export const AjaxPass = data => post('/api/app/password',data) // 修改密码

export const GetData = data => get('api/app/courseClassify',data) // 课程信息
export const GetDataList = data => get('api/app/courseBasis',data) // 课程列表
export const GetCurriculum = data => get('api/app/courseInfo/basis_id='+data) // 课程单页数据
export const Search = data => get('api/app/courseBasis',data) // 搜索课程

export const GetHomeList = data => get('/api/app/recommend/appIndex',data) 

// // // 我的页面
// export const AjaxInfo = data => get('/api/app/userInfo',data) // 个人信息
// export const AjaxEdit = data => axios.put('/api/app/user',data) // 修改个人信息
