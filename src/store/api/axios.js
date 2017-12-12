// 只做请求 公用的http请求类
import promise from 'es6-promise'
import axios from 'axios' // 兼容ie11的promise
promise.polyfill()
class Axios {
  get(cb, sub, type, url) {
    console.log(sub)
    axios({
      method: type,
      url: url
    })
      .then((res) => {
        cb(res)
      })
      .catch((res) => {
      })
  }
}

export const $axios = new Axios()
