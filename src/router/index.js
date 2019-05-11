import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import shipin from '@/components/shipin'
import yujing from '@/components/yujing'
import danjingBaojing from '@/components/danjingBaojing'
import danjingJiankong from '@/components/danjingJiankong'
import diancan from '@/components/diancan'
import diangongtu from '@/components/diangongtu'
import louyou from '@/components/louyou'
import shipinGrid from '@/components/shipinGrid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/shipin',
      name: 'shipin',
      component: shipin
    }, {
      path: '/yujing',
      name: 'yujing',
      component: yujing
    }, {
      path: '/danjingBaojing',
      name: 'danjingBaojing',
      component: danjingBaojing
    }, {
      path: '/danjingJiankong',
      name: 'danjingJiankong',
      component: danjingJiankong
    }, {
      path: '/diancan',
      name: 'diancan',
      component: diancan
    }, {
      path: '/diangongtu',
      name: 'diangongtu',
      component: diangongtu
    }, {
      path: '/louyou',
      name: 'louyou',
      component: louyou
    }, {
      path: '/shipinGrid',
      name: 'shipinGrid',
      component: shipinGrid
    }
  ]
})
