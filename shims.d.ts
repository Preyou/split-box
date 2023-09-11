declare module '*.md' {
  import { type DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.vue' {
  import { type DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '~pages' {
  import type { RouteRecordRaw } from 'vue-router'

  const routes: RouteRecordRaw[]
  export default routes
}

declare module 'pages-generated' {
  import type { RouteRecordRaw } from 'vue-router'

  const routes: RouteRecordRaw[]
  export default routes
}

declare module 'virtual:generated-pages' {
  import type { RouteRecordRaw } from 'vue-router'

  const routes: RouteRecordRaw[]
  export default routes
}
