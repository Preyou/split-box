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
    // // 是可选的
    // isAdmin?: boolean
    // // 每个路由都必须声明
    // requiresAuth: boolean
  }
}
