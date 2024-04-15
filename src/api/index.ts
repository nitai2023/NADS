import axios from "axios";
import { ElMessage } from "element-plus";
import { apiConfig } from "../config";

const request = axios.create({
  baseURL: apiConfig.directUrl,
  timeout: 5000,
});

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    if (error.response && error) {
      switch (error.response.status) {
        case 400:
          error.message = "错误请求";
          break;
        case 401:
          error.message = "未授权，请重新登录";
          break;
        case 403:
          error.message = "拒绝访问";
          break;
        case 404:
          error.message = "请求错误,未找到该资源";
          window.location.href = "/NotFound";
          break;
        case 405:
          error.message = "请求方法未允许";
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 500:
          error.message = "服务器端出错";
          // router.push("/login");
          // location.reload();
          // localStorage.removeItem("token");
          // localStorage.removeItem("user");
          break;
        case 501:
          error.message = "网络未实现";
          break;
        case 502:
          error.message = "网络错误";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "网络超时";
          break;
        case 505:
          error.message = "http版本不支持该请求";
          break;
        default:
          error.message = `连接错误${error.response.status}`;
      }
    } else if (error.message.startsWith("timeout")) {
      error.message = "服务器响应超时";
      ElMessage({
        showClose: true,
        message: error.message,
        type: "error",
      });
    }
    ElMessage({
      showClose: true,
      message: error.message || "相应错误",
      type: "error",
    });
  }
);

export default request;
