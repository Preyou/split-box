import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from 'vue-router/auto/routes'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    ...routes,
    { path: '/', redirect: '/主页' },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})
