import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from 'vue-router/auto/routes'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    ...routes,
    { path: '/:pathMatch(.*)*', redirect: '/' },
    { path: '/', redirect: '/主页' },
  ],
})
