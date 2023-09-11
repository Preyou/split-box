import { usePreferredDark } from '@vueuse/core'

const isDark = usePreferredDark()

export default defineStore('sys', {
  state: () => ({
    isDark,
    toolBox: {},
  }),
})
