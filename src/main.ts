import '@/utils/initConfig'
import 'virtual:uno.css'
import '@/asset/globalStyle.css'
import '@headerless/split-box/style.css'

import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
/* @ts-ignore * */
import { openCodeClient } from '@guijixing/vue-code-link'
import App from './App.vue'
import router from './router/index'
import SvgIcon from '~virtual/svg-component'

if (import.meta.env.DEV) {
  openCodeClient.init()
}

const app = createApp(App)
  .use(createPinia())
  .use(router)
  .use(hljsVuePlugin)
  .component(SvgIcon.name, SvgIcon)

app.config.warnHandler = (msg, instance, trace) => {
  if (msg.startsWith('Extraneous non-props attributes (code-location)')) {
    return
  }
  console.warn(msg, instance, trace)
}

app.mount('#app')
