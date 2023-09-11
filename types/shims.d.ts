import type { AttributifyAttributes } from '@unocss/preset-attributify'
import 'vue'

declare module '@vue/runtime-dom' {
  interface HTMLAttributes extends AttributifyAttributes {}
}
