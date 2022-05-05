import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Detail from '../views/DetailView.vue'
import Write from '../views/WriteView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/board/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/board/write/:id?',
    name: 'Write',
    component: Write
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router