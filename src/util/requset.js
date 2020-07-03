import axios from "axios";
// import store from '@/store';
import notification from "ant-design-vue/es/notification";

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000 // 请求超时时间
  //   headers: {} // header
});

// 异常拦截处理器
const errorHandler = error => {
  if (error.response) {
    const data = error.response.data;
    // 从 sessionStorage 获取 token
    const token = sessionStorage.getItem("token");
    // 身份验证失败
    if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      notification.error({
        message: "身份验证",
        description: "登录过期，需要重新验证身份"
      });
      // 如果登录了，则退出登录
      if (token) {
        // store.dispatch('Logout').then(() => {
        //   setTimeout(() => {
        //     window.location.reload()
        //   }, 1500)
        // })
      }
    }
    if (error.response.status === 403) {
      notification.error({
        message: "拒绝访问",
        description: data.message
      });
    } else if (error.response.status === 500) {
      notification.error({
        message: "服务器错误",
        description: data.message
      });

    } else {
      notification.error({
        message: "错误消息",
        description: data.message
      });
    }
  }
  return Promise.reject(error);
};

// 请求前拦截
request.interceptors.request.use(config => {
  const token = sessionStorage.getItem("token");
  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  if (token) {
    config.headers["Access-Token"] = token;
  }
  return config;
}, errorHandler);

// 请求后拦截
request.interceptors.response.use(response => {
  return response.data;
}, errorHandler);

export default request;
