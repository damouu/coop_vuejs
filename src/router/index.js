import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
        path: '/logpage',
        name: 'LogPage',
        component: () => import(/* webpackChunkName: "about" */ '../views/LogPage.vue')
    },
    {
        path: '/ViewUsers',
        name: 'ViewUsers',
        component: () => import(/* webpackChunkName: "about" */ '../views/viewAllUsers.vue')
    },
    {
        path: '/Conversations',
        name: 'Conversations',
        props: true,
        component: () => import(/* webpackChunkName: "about" */ '../views/Conversations.vue')
    },
    {
        path: '/UserInfo/:id',
        name: 'UserInfo',
        props: true,
        component: () => import(/* webpackChunkName: "about" */ '../views/UserInfo.vue')
    },
    {
        path: '/conversation',
        name: 'conversation',
        component: () => import(/* webpackChunkName: "about" */ '../views/Conversation.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
