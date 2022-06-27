import Vue from 'vue'
import VueRouter from 'vue-router'
import AppLayout from '@/components/app-layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: AppLayout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home'),
      },
      {
        path: 'find',
        name: 'Find',
        component: () => import('@/views/find'),
      },
      // 艺人服务
      {
        path: 'service',
        name: 'artistService',
        component: () => import('@/views/artistService'),
      },
      // 音乐发行
      {
        path: 'publish',
        name: 'muiscPublish',
        component: () => import('@/views/muiscPublish'),
      },
      // 音乐专区
      {
        path: 'prefecture',
        name: 'muiscPrefecture',
        component: () => import('@/views/muiscPrefecture'),
      },
      // 关于我们
      {
        path: 'about',
        name: 'aboutUs',
        component: () => import('@/views/aboutUs'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes,
})

export default router
