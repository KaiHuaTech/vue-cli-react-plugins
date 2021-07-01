import Axios from 'axios';
import { message } from 'antd';
import { isIE } from './platform';

const axios = Axios.create({
  timeout: 10000
});
// 默认不需要缓存
// axios.defaults.headers.get['Cache-Control'] = 'no-cache';
// axios.defaults.headers.post['Cache-Control'] = 'no-cache';
// axios.defaults.withCredentials = true; // 跨域访问必须使用cookie
axios.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// 定义顶层路径
axios.defaults.baseURL = '/policy-web/api';

if (process.env.VUE_APP_MOCK) {
  axios.defaults.baseURL = '/mock';
}

/**
 *
 * @param type  ajax类型 get post
 * @param options  = {
 *  url: 地址
 *  data: 数据
 *  success:  成功回调
 *  error:  错误回调
 *  contentType: 请求头内容类型    默认 application/json;charset=UTF-8
 *  needCache: 是否需要缓存  默认不缓存
 *  noErrorTip: 请求错是否自动提示 默认true
 *  modal: 弹窗提示是否需要遮罩  默认 true有遮罩
 * }
 * @returns promise
 */
const errorMap = {
  404: '系统未找到请求的接口，请联系运维人员或稍后重试！',
  500: '系统遇到错误，无法完成请求，请联系运维人员或稍后重试！',
  503: '系统目前无法使用，请联系运维人员或稍后重试！',
  504: '错误：连接超时',
  parsererror: '错误：发送数据异常'
};

axios.interceptors.request.use(
  (config) => {
    if ((config.method === 'get' && undefined === config.cache) || config.cache === false) {
      config.params = config.params || {};
      if (isIE) {
        config.params._ = Date.now();
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    // 设延时为了保证message显示在弹窗上面
    if (response.data.success === false) {
      if (response.data.messageCode === 'auth.not.login') {
        window.location.hash = '#/login';
        return;
      }
      const msg = response.data.message || response.data.msgCode || errorMap.parsererror;
      setTimeout(() => {
        message.error(msg);
      });
      return Promise.reject(response.data);
    }
    return response.data;
  },
  (error) => {
    if (error && error.response) {
      // 如果返回401需要单独校验
      if (error.response.status === 401) {
        // router.push('/login');
        return Promise.reject(error);
      }
      let msg = '';
      const status = Object.keys(errorMap).find((key) => {
        return key === error.response.status;
      });
      if (status) {
        msg = errorMap[status];
      } else if (error.response.data) {
        // 容错处理
        msg = error.response.data.message || error.response.data.msgCode || errorMap.parsererror;
      } else {
        msg = errorMap.parsererror;
      }
      setTimeout(() => {
        message.error(msg);
      }, 10);
    }
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export default axios;
