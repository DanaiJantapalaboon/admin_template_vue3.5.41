import { createRouter, createWebHistory } from 'vue-router'
import AccountView from '../views/AccountView.vue'
import UserManagementView from '@/views/UserManagementView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/account',
      name: 'account',
      component: AccountView,
      meta: { title: 'My Account' }
    },
    {
      path: '/user_management',
      name: 'user_management',
      component: UserManagementView,
      meta: { title: 'User Management' }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'About' }
    },
  ],
})

export default router
