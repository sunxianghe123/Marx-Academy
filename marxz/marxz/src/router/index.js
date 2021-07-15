//配置路由相关信息
import VueRouter from 'vue-router';
import Vue from 'vue';
const Home = () => import('@/views/home/Home');
const Profile = () => import('@/views/profile/Profile');
const Leader = () => import('@/views/profile/Leader')
const Organization = () => import('@/views/profile/Organization');
const Teachers = () => import('@/views/team/Teachers');
const Professors = () => import('@/views/team/Professors');
const Course = () => import('@/views/teaching/Course');
const Institution = () => import('@/views/teaching/Institution');
const Subject = () => import('@/views/research/Subject');
const Terrace = () => import('@/views/research/Terrace');
const Institutions = () => import('@/views/research/Institution');
const WorkFir = () => import('@/views/work/WorkFir');
const WorkSec = () => import('@/views/work/WorkSec');
const WorkThi = () => import('@/views/work/WorkThi');
const WorkFou = () => import('@/views/work/WorkFou');
const WorkFif = () => import('@/views/work/WorkFif');
const WorkSix = () => import('@/views/work/WorkSix');
const ThemeFir = () => import('@/views/theme/ThemeFir');
const ThemeSec = () => import('@/views/theme/ThemeSec');
const ThemeThi = () => import('@/views/theme/ThemeThi');
const ProfileCon = () => import('@/views/profile/ProfileCon');

//1.通过Vue.use(插件),安装插件
Vue.use(VueRouter);


//2.创建VueRouter对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/leader',
    component: Leader
  },
  {
    path: '/organization',
    component: Organization
  },
  {
    path: '/teachers',
    component: Teachers
  },
  {
    path: '/professors',
    component: Professors
  },
  {
    path: '/course',
    component: Course
  },
  {
    path: '/institution',
    component: Institution
  },
  {
    path: '/subject',
    component: Subject
  },
  {
    path: '/terrace',
    component: Terrace
  },
  {
    path: '/institutions',
    component: Institutions
  },
  {
    path: '/workfir',
    component: WorkFir
  },
  {
    path: '/worksec',
    component: WorkSec
  },
  {
    path: '/workthi',
    component: WorkThi
  },
  {
    path: '/workfou',
    component: WorkFou
  },
  {
    path: '/workfif',
    component: WorkFif
  },
  {
    path: '/worksix',
    component: WorkSix
  },
  {
    path: '/themefir',
    component: ThemeFir
  },
  {
    path: '/themesec',
    component: ThemeSec
  },
  {
    path: '/themethi',
    component: ThemeThi
  },
  {
    path: '/profilecon',
    component: ProfileCon
  }
];
const router = new VueRouter({
  //配置路由和组件之间的应用关系
  routes,
  mode: 'history',
});

//3.将router对象传入到Vue实例
export default router;