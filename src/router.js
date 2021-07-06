import { createRouter, createWebHistory } from 'vue-router'

import Subpage from './components/Subpage'


let router = createRouter({
    history: createWebHistory(),
    routes: [
    {
        name: Subpage,
        component: Subpage,
        path: "/subpage"
    }]
})

export default router
