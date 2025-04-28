import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Clients from '../pages/Clients.vue'
import Programs from '../pages/Programs.vue'
import Bookings from '../pages/Bookings.vue'
import Blogs from '../pages/Blogs.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/clients', component: Clients },
    { path: '/programs', component: Programs },
    { path: '/bookings', component: Bookings },
    { path: '/blogs', component: Blogs },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
