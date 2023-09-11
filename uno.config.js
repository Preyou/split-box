import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'
import transformerCompileClass from '@unocss/transformer-compile-class'
import presetTagify from '@unocss/preset-tagify'
import { presetExtra } from 'unocss-preset-extra'

export default defineConfig({
  // https://unocss.vercel.app/options
  presets: [
    presetUno(),
    presetAttributify({
      prefix: 'un-',
    }),
    presetIcons({
      autoInstall: true,
      warn: true,
    }),
    presetTagify({
      prefix: 'un-',
    }),
    presetExtra(),
  ],
  transformers: [transformerCompileClass()],

  shortcuts: [
    // you could still have object style
    // {
    //   btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
    // },
    // // dynamic shortcuts
    // [/^flex(-(row|col))?(-)?$/, ([a, , c]) => `flex flex-col`],
  ],
})
