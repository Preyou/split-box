import { ExtractPublicPropTypes } from 'vue'
import { RouterLink } from 'vue-router/auto'
import { RouteRecordRaw } from 'vue-router'
import SysHeader from '@/components/system/SysHeader.vue'
import router from '@/router'

function generateMenu(route: RouteRecordRaw): NaiveUI.MenuOption[] {
  return route.children
    ?.filter(({ meta }) => !meta?.hidden)
    .map((child) => {
      return {
        label: () => (
          <RouterLink to={child}>{child.meta?.title ?? child.name}</RouterLink>
        ),
        key: child.name,
        children:
          (child.children?.length ?? 0) > 0 ? generateMenu(child) : undefined,
      }
    }) as NaiveUI.MenuOption[]
}

const homeRoute = router.getRoutes().find((route) => route.name === '主页')

console.assert(homeRoute, '主页路由不存在')

export default {
  mode: 'horizontal',
  options: generateMenu(homeRoute!),
  value: computed(() => router.currentRoute.value.name),
} satisfies ExtractPublicPropTypes<InstanceType<typeof SysHeader>['$props']>
