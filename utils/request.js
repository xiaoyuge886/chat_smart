import axios from 'axios'
import {router} from '../src/router'

// let loadingInstance = null     // 加载全局的loading
axios.defaults.baseURL = 'http://127.0.0.1:8000'
const instance = axios.create({    //创建axios实例，在这里可以设置请求的默认配置
    timeout: 10000, // 设置超时时间10s
    // baseURL: process.env.NODE_ENV === 'production' ? '' : '/api'   //根据自己配置的反向代理去设置不同环境的baeUrl
    baseURL: '/api',
    withCredentials: false,
    crossDomain : true
})



// 文档中的统一设置post请求头。下面会说到post请求的几种'Content-Type'
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// let httpCode = {        //这里我简单列出一些常见的http状态码信息，可以自己去调整配置
//     400: '请求参数错误',
//     401: '权限不足, 请重新登录',
//     403: '服务器拒绝本次访问',
//     404: '请求资源未找到',
//     500: '内部服务器错误',
//     501: '服务器不支持该请求中使用的方法',
//     502: '网关错误',
//     504: '网关超时'
// }

/** 添加请求拦截器 **/
instance.interceptors.request.use(config => {
    config.headers['token'] = sessionStorage.getItem('token') || ''
    config.headers['Access-Control-Allow-Origin'] = '*'
    // loadingInstance = Loading.service({       // 发起请求时加载全局loading，请求失败或有响应时会关闭
    //     spinner: 'fa fa-spinner fa-spin fa-3x fa-fw',
    //     text: '拼命加载中...'
    // })
    if (config.method === 'get') { // 添加时间戳参数，防止浏览器（IE）对get请求的缓存
        config.params = {
            ...config.params,
            t: new Date().getTime()
        }
    }
    return config
}, error=> {
    // 对请求错误做些什么
    return Promise.reject(error)
})

/** 添加响应拦截器  **/
instance.interceptors.response.use(response => {
    // loadingInstance.close()
    console.log(response, 1111111)
    if (response.data.code === 0) {     // 响应结果里的status: ok是我与后台的约定，大家可以根据实际情况去做对应的判断
        return Promise.resolve(response.data)
    } else {
        // Message({
        //     message: response.data.message,
        //     type: 'error'
        // })
        return Promise.reject(response.data.message)
    }
}, error => {
    // loadingInstance.close()
    if (error.response) {
        // 根据请求失败的http状态码去给用户相应的提示
        // let tips = error.response.status in httpCode ? httpCode[error.response.status] : error.response.data.message
        // Message({
        //     message: tips,
        //     type: 'error'
        // })
        if (error.response.status === 401) {    // token或者登陆失效情况下跳转到登录页面，根据实际情况，在这里可以根据不同的响应错误结果，做对应的事。这里我以401判断为例
            router.push({
                path: `/Login`
            })
        }
        return Promise.reject(error)
    } else {
        // Message({
        //     message: '请求超时, 请刷新重试',
        //     type: 'error'
        // })
        return Promise.reject(new Error('请求超时, 请刷新重试'))
    }
})

/* 统一封装get请求 */
export const get = (url, params, config = {}) => {
    // url = 'http:127.0.0.1:8000/api/v1/chat/'
    return new Promise((resolve, reject) => {
        instance({
            method: 'get',
            url,
            params,
            ...config
        }).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}

/* 统一封装post请求  */
export const post = (url, data, config = {}) => {
    // url = 'http:127.0.0.1:8000/api-jwt/token/'
    return new Promise((resolve, reject) => {
        instance({
            method: 'post',
            url,
            data,
            ...config

        }).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}

/* 或者写成下面这样： Promise.resolve() 和 Promise.reject()返回的是promise对象，二者都是语法糖  */
export const post_ = (url, data) => {
    return instance({
        method: 'post',
        url,
        data
    }).then(response => {
        return Promise.resolve(response)
    }).catch(error => {
        return Promise.reject(error)
    })
}