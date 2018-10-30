import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

const HelloWorld = () => import(/* webpackChunkName: "test" */ '@/components/HelloWorld')
const Login = () => import('@/view/login/index')


Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})


router.beforeEach((to, from, next) => {
  // islogin
  const isLogin = !!localStorage.getItem('token');

  if (!isLogin && to.name !== 'Login') {
    next({
      name: 'Login',
      query: { redirect: to.name },
    });
  } else {
    next();
  }
})


export default router