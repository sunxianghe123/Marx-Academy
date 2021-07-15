import Vue from "vue";
import VueRouter from "vue-router";

const Login = () => import("../components/Login");
const Home = () => import("../components/Home");

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
];

const router = new VueRouter({
  //配置路由和组件之间的应用关系
  routes,
  mode: 'history',
});

//挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   //to将要访问的路径
//   //from代表从哪个路径跳转而来
//   //next是一个函数，表示放行
//   //  newt() 放行   next('/login') 强制跳转
//
//   if(to.path === '/login') return next();
//   //获取token
//   const tokenStr = window.sessionStorage.getItem('token');
//   if(!tokenStr) return next('/login')
//   next();
// })

//将router对象传入到Vue实例
export default router;