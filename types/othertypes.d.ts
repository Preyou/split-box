import '@vue/runtime-core'
import 'vue-router'
import 'naive-ui'

export {}

declare module '@vue/runtime-core' {}
declare global {
  declare namespace NaiveUI {
    export * from 'naive-ui'
  }
}
declare module 'vue-router' {
  interface RouteMeta {
    /** 显示的标题，如果没有则取路由的name */
    title?: string
    /** 是否在自动构造的菜单上隐藏 */
    hidden?: boolean
    /** 自动构造时同一级菜单的排序 */
    order?: number
  }
}
