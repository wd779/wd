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
export function put(url) {
    return new Promise((resolve, reject) => {
        axios.put(url)
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
// 课程
export const GetData = data => get('api/app/courseClassify',data) // 课程信息
export const GetDataList = data => get('api/app/courseBasis',data) // 课程列表
export const GetCurriculum = data => get('api/app/courseInfo/basis_id='+data) // 课程详情
export const Search = data => get('api/app/courseBasis?limit=10&page=1&course_type=0&keywords='+data) // 搜索课程
export const Collect = data => post('/api/app/collect',data) // 收藏课程
export const CancelCollect = data => put('api/app/collect/cancel/'+data+'/1') // 取消收藏课程
// 首页
export const GetHomeList = data => get('/api/app/recommend/appIndex',data) //获取首页数据
export const GetTeacherInfo = data => get('/api/app/teacher/'+data) //获取教师数据
export const GetTeacherDetailed = data => get('/api/app/teacher/info/'+data) //获取教师详情数据
export const collectTeacher = data => get('api/app/teacher/collect/'+data) //关注教师
export const cancelCollectTeacher = collect_id => get(`api/app/teacher/collect/${collect_id}`); // 取消关注
export const collectTeacherList = data => get("/api/app/collect", data); // 关注列表
export const cancelCollect = collect_id => put(`api/app/collect/cancel/${collect_id}/2`); // 取消关注
export const SignUp = data => post(`api/app/order/downOrder`,data); // 报名课程

// 我的
export const AjaxInfo = data => get("/api/app/userInfo", data); // 获取用户信息
export const AjaxEdit = data => axios.put('/api/app/user',data) // 修改用户信息
export const GetCollect = data => get('api/app/collect?page=1&limit=10&type=1',data) // 所有我的收藏数据
// api/app/order/downOrder
// 约课

// 练习
export const AjaxQues_collect = data => post("api/app/message/classifyMessage", data);// 习题收藏
