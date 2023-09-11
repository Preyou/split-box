import type { ReadonlyDeep } from 'type-fest'
import defSysConfig from '@/asset/config/sysConfig.json'
import defITheme from '@/asset/config/theme.json'

const defConfig = {
  sysConfig: defSysConfig,
  theme: defITheme,
}

function assignDeep<T extends object, U extends T>(target: T, source: U): T {
  Object.entries(target).forEach(([key, value]) => {
    if (typeof value === 'object' && value !== null) {
      // @ts-ignore
      assignDeep(value, source[key])
    } else if (key in source) {
      // @ts-ignore
      target[key] = source[key]
    }
  })
  return target
}

export const [sysConfig, theme] = (await Promise.all(
  ['sysConfig', 'theme'].map(async (url) =>
    assignDeep(
      await (await fetch(`./config/${url}.json`)).json(),
      // @ts-ignore
      defConfig[url]
    )
  )
)) as [ReadonlyDeep<typeof defSysConfig>, ReadonlyDeep<typeof defITheme>]

export { defConfig }
