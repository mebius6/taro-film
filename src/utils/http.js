import Taro from '@tarojs/taro'
import querystring from 'querystring'
import config from './config'
// 错误提示
const networkErr = '网络请求超时'
// request 拦截器
// Taro.addInterceptor(chain => {
//   const requestParams = chain.requestParams
//   // const { method, data, rul } = requestParams
//   return chain
//     .procced(requestParams)
//     .then(res => {
//       return res
//     })
//     .catch(err => {
//       Taro.showToast({
//         title: err || networkErr,
//         icon: 'none'
//       })
//     })
// })
const http = {
  formatData: (code, res) => {
    return new Promise((resolve, reject) => {
      if (res.status === 200) {
        let data = res.data

        return resolve(data)
      } else {
        return reject(res.statusText)
      }
    })
  },
  get: (path, params, { url = '', port = 80, code = false }) => {
    return new Promise((resolve, reject) => {
      let apiUrl = `${config.apiUrl}:${port}/${path}`
      let header = {
        'content-type': 'application/xml;charset=UTF-8'
      }
      if (url) {
        apiUrl = `${url}:${port}/${path}`
      }
      Taro.request({
        url: apiUrl,
        method: 'GET',
        data: params,
        header
      })
        .then(res => {
          http.formatData(code, res).then(resolve, reject)
        })
        .catch(err => {
          return reject(err || networkErr)
        })
    })
  },
  post: (
    path,
    params,
    { url = '', port = 8810, code = false, raw = false, file = false }
  ) => {
    return new Promise((resolve, reject) => {
      let data = params
      let header = {
        'content-type': 'application/json;charset=UTF-8'
      }
      if (file) {
        header['content-type'] = 'multipart/form-data'
      } else if (!raw) {
        data = querystring.stringify(params)
        header['content-type'] = 'application/x-www-form-urlencoded'
      }

      let apiUrl = `${config.apiUrl}:${port}/${path}`
      if (url) {
        apiUrl = `${url}:${port}/${path}`
      }
      Taro.request({
        url: apiUrl,
        method: 'POST',
        data,
        header
      })
        .then(res => {
          http.formatData(code, res).then(resolve, reject)
        })
        .catch(err => {
          return reject(err || networkErr)
        })
    })
  }
}

export default http
