import axios from "axios";
// import QS from "qs";
import { Loading } from 'element-ui';

// 创建axios实例
const service = axios.create({
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: process.env.NODE_ENV === "production" ? "" : "",
  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 5000
});
let loadingInstance
// 添加请求拦截器
service.interceptors.request.use(
  config => {
    if (!config.hideloading) {
      loadingInstance = Loading.service({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
    }
    return config;
  },
  error => {
    // 请求失败
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    loadingInstance.close();
    return response;
  },
  error => {
    loadingInstance.close();
    // 回调失败
    if (error && error.response) {
      switch (error.response.status) {
        case 401:
          alert("未授权，请重新登录(401)");
          break;
        case 403:
          alert("拒绝访问(403)");
          break;
        case 404:
          alert("请求出错(404)");
          break;
        case 500:
          alert("服务器错误(500)");
          break;
        default:
          alert("请求出错(连接出错)");
      }
    }
    return Promise.reject(error);
  }
);

export default service;
