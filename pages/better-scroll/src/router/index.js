import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import exam1 from '@/components/exam1'
import exam2 from '@/components/exam2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/exam1',
      name: 'exam1',
      component: exam1
    },
    {
      path: '/exam2',
      name: 'exam2',
      component: exam2
    }
  ]
})
