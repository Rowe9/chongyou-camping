import {createRouter,createWebHashHistory} from 'vue-router'

let router = createRouter({
  history: createWebHashHistory(),
  routes:[
    {
      path:'/',
      component:()=>import('@/views/home/index.vue'),
      name:'home',
      redirect:'/home'
    },
    // 首页
    {
      path:'/home',
      name:'home',
      component:()=>import('@/views/home/index.vue'),
      meta: {
        title: '首页'
      },
    },
    // 其他
    {
      path:'/other',
      name:'other',
      component:()=>import('@/views/other/index.vue'),
      meta: {
        title: '其他',
      },
    }
  ]
})

export default router