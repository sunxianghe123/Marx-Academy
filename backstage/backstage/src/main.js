import Vue from 'vue'
import App from './App.vue'
import router from "./router"
//导入全局样式表
import './assets/css/normalize.css'
//导入elementUI
import './plugins/element.js'
//配置请求根路径
import axios from 'axios'
axios.defaults.baseURL = 'http://8.136.6.137:1315/'
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// axios.defaults.baseURL = 'https://httpbin.org/'
//config是请求对象
axios.interceptors.request.use(config => {
  console.log(config);
  config.headers.Authorization = window.sessionStorage.getItem('token');
  //在最后必须return config（固定写法）
  return config;
})
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
