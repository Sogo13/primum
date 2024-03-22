import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import createProjectView from '@/views/createProjectView.vue'

const router = createRouter({
    // scrollBehavior(to, from, savedPosition) {
    //     // always scroll to top
    //     return { top: 0 }
    // },
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/createProjectPage',
            name: 'createProjectPage',
            component: createProjectView,
        },
    ],
})

export default router
