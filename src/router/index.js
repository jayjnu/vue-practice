import Vue from 'vue'
import Router from 'vue-router'
import Repos from '@/components/Repos'
import Youtube from '@/components/Youtube'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'repos',
      component: Repos
    },
    {
      path: '/youtube',
      name: 'youtube',
      component: Youtube
    }
  ]
})
