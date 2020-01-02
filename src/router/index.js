import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Log from "../components/Log";
import HelloWorld from "../components/HelloWorld";
import LogPage from "../views/LogPage";
import ViewU from "../components/ViewU";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/logpage',
    name: 'LogPage',
    component: LogPage
  },
  {
    path: '/ViewUsers',
    name: 'ViewUsers',
    component: ViewU
  },
  {
    path: '/Conversation',
    name: 'Conversation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Conversation.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
