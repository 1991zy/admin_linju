/* http请求 在这里要指定请求的    方式  和    url地址  和请求的 所有参数
*/
import axios from 'axios'
import { local } from './localStorage'
import { $axios } from './axios'  // 项目中数据
import * as allurl from './apiUrl' // 接口地址

export default {
  tologin: function (cb, sub) {
    $axios.get(cb, sub, allurl.TO_LOGIN.type, allurl.TO_LOGIN.url)
  }
}
