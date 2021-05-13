import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载
const Home = () => import('../views/home/Home');
const Cart = () => import('../views/cart/Cart');
const Category = () => import('../views/category/Category');
const Profile = () => import('../views/profile/Profile');

// 1、安装插件
Vue.use(VueRouter)


// 2、创建router
const routes = [
  // {path: '', redirect: '/home',},
  {path: '', redirect: '/category',},
  {path: '/home', component: Home,},
  {path: '/cart', component: Cart,},
  {path: '/category', component: Category,},
  {path: '/profile', component: Profile,},
]

const router = new VueRouter({
  routes,
  // 跳转的路由中没有 '#'
  mode:"history"
})

// 3、导出
export default router
