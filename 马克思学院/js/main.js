/**
 * Created by 孙祥赫 on 2021/3/17.
 */
new Vue({
  el: '#app',
  render: h=> (app)
});

import  {request} from "../network/request.js";

request({
  url: '/home/multidata'
}, res => {
  console.log(res);
}, err => {
  console.log(err);
});

//function request(config, success, failure){
//  //1.创建axios的实例
//  const instance = axios.create({
//    baseURL: 'http://123.207.32.32:8000',
//    timeout: 5000
//  });
//
//  instance(config)
//      .then(res =>{
//        success(res);
//      })
//      .catch(err =>{
//        failure(err);
//      })
//}

//request({
//  url: '/home/multidata'
//}, res => {
//  console.log(res);
//}, err => {
//  console.log(err);
//});