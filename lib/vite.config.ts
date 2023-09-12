// @ts-ignore
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {
  NaiveUiResolver,
  VueUseComponentsResolver,
  VueUseDirectiveResolver,
} from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
// @ts-ignore
import VueMacros from 'unplugin-vue-macros/vite'
// @ts-ignore
import UnoCSS from 'unocss/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import dts from 'vite-plugin-dts'
// import ConfigPlugin from 'unplugin-config/vite'
// vite.config.js
// https://vitejs.dev/config/
export default defineConfig({
  envDir: '../env',
  build: {
    target: 'esnext',
    // sourcemap: 'inline',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, './index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    dts({ rollupTypes: true }),
    UnoCSS(),
    Icons({ autoInstall: true, compiler: 'vue3', jsx: 'preact' }),
    VueMacros({
      setupBlock: true,
      defineOptions: true,
      shortEmits: true,
      hoistStatic: true,
      defineSlots: true,
      defineModels: true,
      namedTemplate: false,
      exportProps: false,

      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.setup\.[cm]?[jt]sx?$/],
          reactivityTransform: resolve(__dirname, 'components'),
          template: {
            compilerOptions: {
              nodeTransforms: [],
              isCustomElement: (tag) => tag.startsWith('un-'),
            },
          },
        }),
        vueJsx: vueJsx(),
      },
    }),

    Components({
      dts: './types/auto/component.d.ts',
      // dirs: ['src/components/system/*.vue'],
      // extensions: ['vue', 'jsx', 'tsx', 'js', 'ts'],
      // Glob patterns to match file names to be detected as components.
      // When specified, the `dirs` and `extensions` options will be ignored.
      // globs: ['src/components/system/*.vue', 'src/utils/components/*.vue'],
      allowOverrides: true,
      version: 3,
      resolvers: [
        NaiveUiResolver(),
        VueUseComponentsResolver(),
        VueUseDirectiveResolver(),
        IconsResolver({ prefix: 'i' }),
        {
          type: 'component',
          resolve: (name) => {
            if (name.startsWith('G')) {
              return {
                name: 'default',
                from: `@g/components/${name.slice(1)}.vue`,
              }
            }
            return null
          },
        },
      ],
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView'],
        },
      ],
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        'vue',
        VueRouterAutoImports,
        'pinia',
        // '@vueuse/core',
        // '@vueuse/math',
        // '@vueuse/head',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
          ],
          // '[package-name]': [
          //   '[import-names]',
          //   // alias
          //   ['[from]', '[alias]'],
          // ],
        },
      ],
      // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
      dts: './types/auto/auto-import.d.ts',
      eslintrc: {
        enabled: false, // Default `false`
        filepath: '../.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: 'readonly', // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
  ],

  resolve: {
    conditions: ['default'],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.md'],
  },
})
