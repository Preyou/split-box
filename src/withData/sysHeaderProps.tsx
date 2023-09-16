import { ExtractPublicPropTypes } from 'vue'
import { RouterLink } from 'vue-router/auto'
import { RouteRecordRaw } from 'vue-router'
import SysHeader from '@/components/system/SysHeader.vue'
import router from '@/router'

function generateMenu(route: RouteRecordRaw): NaiveUI.MenuOption[] {
  return route.children
    ?.filter(({ meta }) => !meta?.hidden)
    .sort((a, b) => (a.meta?.order ?? 0) - (b.meta?.order ?? 0))
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

export default function useMenuProps() {
  const homeRoute = router.getRoutes().find((route) => route.name === '主页')
  console.assert(homeRoute, '主页路由不存在')

  return reactive({
    mode: 'horizontal',
    options: generateMenu(homeRoute!),
    defaultValue: router.currentRoute.value.name as string,
  } satisfies ExtractPublicPropTypes<InstanceType<typeof SysHeader>['$props']>)
}
