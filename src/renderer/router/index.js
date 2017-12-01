import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Index from '@/components/index'
import RightIndex from '@/components/ContainerMain/rightmeun/index'
import RightMessage from '@/components/ContainerMain/rightmeun/message'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
        { path: '/index/rightindex', name: 'rightindex', component: RightIndex},
        { path: '/', name:"rightindex", component: RightIndex },
        { path: '/index/rightmessage', name: 'RightMessage', component: RightMessage}

      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
