import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Start',
    component: () => import(/* webpackChunkName: "about" */ '../views/Start.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue'),
    beforeEnter: (to, from, next) => {
      console.log(from);
      if (from.name !== 'Start' && from.name !== 'Final') {
        next({name: 'Start'})
      } else {
        next()
      }
    }
  },
  {
    path: '/final',
    name: 'Final',
    component: () => import(/* webpackChunkName: "about" */ '../views/Final.vue'),
    beforeEnter: (to, from, next) => {
      if (from.name !== 'Main') {
        next({name: 'Start'})
      } else {
        next()
      }
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
