// vite.config.ts
import { defineConfig } from "file:///D:/%E4%BB%A3%E7%A0%81%E5%BA%93/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/split-box/node_modules/.pnpm/registry.npmmirror.com+vite@4.4.9_@types+node@20.6.0/node_modules/vite/dist/node/index.js";
import Vue from "file:///D:/%E4%BB%A3%E7%A0%81%E5%BA%93/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/split-box/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue@4.3.4_vite@4.4.9_vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Components from "file:///D:/%E4%BB%A3%E7%A0%81%E5%BA%93/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/split-box/node_modules/.pnpm/registry.npmmirror.com+unplugin-vue-components@0.22.12_rollup@3.29.1_vue@3.3.4/node_modules/unplugin-vue-components/dist/vite.mjs";
import {
  NaiveUiResolver,
  VueUseComponentsResolver,
  VueUseDirectiveResolver
} from "file:///D:/%E4%BB%A3%E7%A0%81%E5%BA%93/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/split-box/node_modules/.pnpm/registry.npmmirror.com+unplugin-vue-components@0.22.12_rollup@3.29.1_vue@3.3.4/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import { resolve } from "path";
import AutoImport from "file:///D:/%E4%BB%A3%E7%A0%81%E5%BA%93/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/split-box/node_modules/.pnpm/registry.npmmirror.com+unplugin-auto-import@0.12.2_@vueuse+core@10.4.1_rollup@3.29.1/node_modules/unplugin-auto-import/dist/vite.js";
import vueJsx from "file:///D:/%E4%BB%A3%E7%A0%81%E5%BA%93/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/split-box/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue-jsx@3.0.2_vite@4.4.9_vue@3.3.4/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { openCodeServer, addCodeLocation } from "file:///D:/%E4%BB%A3%E7%A0%81%E5%BA%93/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/split-box/node_modules/.pnpm/registry.npmmirror.com+@guijixing+vue-code-link@1.0.8/node_modules/@guijixing/vue-code-link/index.js";
import VueMacros from "file:///D:/%E4%BB%A3%E7%A0%81%E5%BA%93/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/split-box/node_modules/.pnpm/registry.npmmirror.com+unplugin-vue-macros@2.5.1_@vueuse+core@10.4.1_rollup@3.29.1_vite@4.4.9_vue@3.3.4/node_modules/unplugin-vue-macros/dist/vite.mjs";
import UnpluginSvgComponent from "file:///D:/%E4%BB%A3%E7%A0%81%E5%BA%93/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/split-box/node_modules/.pnpm/registry.npmmirror.com+unplugin-svg-component@0.5.2/node_modules/unplugin-svg-component/dist/vite.js";
import UnoCSS from "file:///D:/%E4%BB%A3%E7%A0%81%E5%BA%93/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/split-box/node_modules/.pnpm/registry.npmmirror.com+unocss@0.51.13_postcss@8.4.29_rollup@3.29.1_vite@4.4.9/node_modules/unocss/dist/vite.mjs";
import UnpluginGlob from "file:///D:/%E4%BB%A3%E7%A0%81%E5%BA%93/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/split-box/node_modules/.pnpm/registry.npmmirror.com+unplugin-glob@0.3.3_rollup@3.29.1/node_modules/unplugin-glob/dist/vite.mjs";
import Icons from "file:///D:/%E4%BB%A3%E7%A0%81%E5%BA%93/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/split-box/node_modules/.pnpm/registry.npmmirror.com+unplugin-icons@0.16.6/node_modules/unplugin-icons/dist/vite.mjs";
import IconsResolver from "file:///D:/%E4%BB%A3%E7%A0%81%E5%BA%93/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/split-box/node_modules/.pnpm/registry.npmmirror.com+unplugin-icons@0.16.6/node_modules/unplugin-icons/dist/resolver.mjs";
import { VueRouterAutoImports } from "file:///D:/%E4%BB%A3%E7%A0%81%E5%BA%93/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/split-box/node_modules/.pnpm/registry.npmmirror.com+unplugin-vue-router@0.6.4_rollup@3.29.1_vue-router@4.2.4_vue@3.3.4/node_modules/unplugin-vue-router/dist/index.mjs";
import VueRouter from "file:///D:/%E4%BB%A3%E7%A0%81%E5%BA%93/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/split-box/node_modules/.pnpm/registry.npmmirror.com+unplugin-vue-router@0.6.4_rollup@3.29.1_vue-router@4.2.4_vue@3.3.4/node_modules/unplugin-vue-router/dist/vite.mjs";
import Markdown from "file:///D:/%E4%BB%A3%E7%A0%81%E5%BA%93/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/split-box/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-md@0.21.5_vite@4.4.9/node_modules/vite-plugin-md/dist/index.js";
import MarkdownItHighlightjs from "file:///D:/%E4%BB%A3%E7%A0%81%E5%BA%93/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/split-box/node_modules/.pnpm/registry.npmmirror.com+markdown-it-highlightjs@4.0.1/node_modules/markdown-it-highlightjs/index.js";
var __vite_injected_original_dirname = "D:\\\u4EE3\u7801\u5E93\\\u6211\u7684\u9879\u76EE\\split-box";
var vite_config_default = defineConfig({
  // base: process.env.NODE_ENV === 'production' ? '/__dynamic_base__/' : '/',
  base: "./",
  envDir: "./env",
  build: {
    target: "esnext",
    outDir: "split-box"
  },
  plugins: [
    // dts({ rollupTypes: true }),
    ...process.env.NODE_ENV === "development" ? [addCodeLocation(), openCodeServer()] : [],
    // ConfigPlugin({
    //   disabledConfig: false,
    //   globConfigFileName: 'config.json',
    //   outputDir: '/public/config',
    //   envConfigPrefix: 'VITE_',
    // }),
    UnpluginGlob({
      // targets to resolve
      include: [
        /\.[tj]sx?$/,
        // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/,
        // .vue
        /\.md$/
        // .md
      ],
      exclude: [/\.d\.ts$/],
      root: process.cwd(),
      // Filepath to generate corresponding .d.ts files.
      // Defaults to both './glob.d.ts' and 'glob-global.d.ts' when provided `true`.
      // Set `false` to disable.
      dts: "./types/auto/glob"
      // boolean or string
    }),
    // dynamicBase({
    //   // dynamic public path var string, default window.__dynamic_base__
    //   publicPath: 'window.__dynamic_base__',
    //   // dynamic load resources on index.html, default false. maybe change default true
    //   transformIndexHtml: false,
    // }),
    UnoCSS(),
    Icons({
      autoInstall: true,
      compiler: "vue3",
      jsx: "preact"
    }),
    VueRouter({
      // Folder(s) to scan for vue components and generate routes. Can be a string, or
      // an object, or an array of those. Each option allows to override global options.
      // like exclude, extensions, etc.
      routesFolder: "src/views",
      // allowed extensions for components to be considered as pages
      // can also be a suffix: e.g. `.page.vue` will match `home.page.vue`
      // but remove it from the route path
      extensions: [".vue", ".md"],
      // list of glob files to exclude from the routes generation
      // e.g. ['**/__*'] will exclude all files and folders starting with `__`
      // e.g. ['**/__*/**/*'] will exclude all files within folders starting with `__`
      // e.g. ['**/*.component.vue'] will exclude components ending with `.component.vue`
      exclude: [],
      // Path for the generated types. Defaults to `./typed-router.d.ts` if typescript
      // is installed. Can be disabled by passing `false`.
      dts: "./types/auto/typed-router.d.ts",
      // Override the name generation of routes. unplugin-vue-router exports two versions:
      // `getFileBasedRouteName()` (the default) and `getPascalCaseRouteName()`. Import any
      // of them within your `vite.config.ts` file.
      // getRouteName: (routeNode) => myOwnGenerateRouteName(routeNode),
      // Customizes the default langage for `<route>` blocks
      // json5 is just a more permissive version of json
      routeBlockLang: "json5",
      // Change the import mode of page components. Can be 'async', 'sync', or a function with the following signature:
      // (filepath: string) => 'async' | 'sync'
      importMode: "async"
    }),
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
          include: [/\.vue$/, /\.setup\.[cm]?[jt]sx?$/, /.md$/],
          reactivityTransform: resolve(__vite_injected_original_dirname, "src"),
          template: {
            compilerOptions: {
              nodeTransforms: [],
              isCustomElement: (tag) => tag.startsWith("un-")
            }
          }
        }),
        vueJsx: vueJsx()
      }
    }),
    UnpluginSvgComponent({
      iconDir: "src/asset/svgIcon",
      projectType: "vue",
      dts: true,
      dtsDir: "./types/auto",
      prefix: "svg"
    }),
    Components({
      dts: "./types/auto/component.d.ts",
      // dirs: ['src/components/system/*.vue'],
      extensions: ["vue", "tsx", "ts", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.tsx?$/, /\.jsx?$/],
      // Glob patterns to match file names to be detected as components.
      // When specified, the `dirs` and `extensions` options will be ignored.
      // globs: ['src/components/system/*.vue', 'src/utils/components/*.vue'],
      allowOverrides: true,
      version: 3,
      resolvers: [
        NaiveUiResolver(),
        VueUseComponentsResolver(),
        VueUseDirectiveResolver(),
        IconsResolver({
          prefix: "i"
        }),
        {
          type: "component",
          resolve: (name) => {
            if (name.startsWith("G")) {
              return {
                name: "default",
                from: `@g/components/${name.slice(1)}.vue`
              };
            }
            return null;
          }
        }
      ],
      types: [
        {
          from: "vue-router",
          names: ["RouterLink", "RouterView"]
        }
      ]
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/,
        // .vue
        /\.md$/
        // .md
      ],
      imports: [
        "vue",
        VueRouterAutoImports,
        "pinia",
        // '@vueuse/core',
        // '@vueuse/math',
        // '@vueuse/head',
        {
          "naive-ui": [
            "useDialog",
            "useMessage",
            "useNotification",
            "useLoadingBar"
          ],
          "/src/utils/initConfig.ts": ["sysConfig", "theme"]
          // '[package-name]': [
          //   '[import-names]',
          //   // alias
          //   ['[from]', '[alias]'],
          // ],
        }
      ],
      // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
      dts: "./types/auto/auto-import.d.ts",
      eslintrc: {
        enabled: true,
        // Default `false`
        filepath: "./.eslintrc-auto-import.json",
        // Default `./.eslintrc-auto-import.json`
        globalsPropValue: "readonly"
        // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    Markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true
      },
      markdownItSetup(md) {
        md.use(MarkdownItHighlightjs);
      }
    })
    // VueDevTools(),
  ],
  resolve: {
    conditions: ["default"],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src"),
      // 路径别名
      "@g": resolve(__vite_injected_original_dirname, "globals"),
      // 路径别名
      "@lib": resolve(__vite_injected_original_dirname, "lib")
      // 路径别名
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTRFRTNcdTc4MDFcdTVFOTNcXFxcXHU2MjExXHU3Njg0XHU5ODc5XHU3NkVFXFxcXHNwbGl0LWJveFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU0RUUzXHU3ODAxXHU1RTkzXFxcXFx1NjIxMVx1NzY4NFx1OTg3OVx1NzZFRVxcXFxzcGxpdC1ib3hcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyVFNCVCQiVBMyVFNyVBMCU4MSVFNSVCQSU5My8lRTYlODglOTElRTclOUElODQlRTklQTElQjklRTclOUIlQUUvc3BsaXQtYm94L3ZpdGUuY29uZmlnLnRzXCI7Ly8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcclxuaW1wb3J0IHtcclxuICBOYWl2ZVVpUmVzb2x2ZXIsXHJcbiAgVnVlVXNlQ29tcG9uZW50c1Jlc29sdmVyLFxyXG4gIFZ1ZVVzZURpcmVjdGl2ZVJlc29sdmVyLFxyXG59IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IG9wZW5Db2RlU2VydmVyLCBhZGRDb2RlTG9jYXRpb24gfSBmcm9tICdAZ3Vpaml4aW5nL3Z1ZS1jb2RlLWxpbmsnXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IFZ1ZU1hY3JvcyBmcm9tICd1bnBsdWdpbi12dWUtbWFjcm9zL3ZpdGUnXHJcbmltcG9ydCBVbnBsdWdpblN2Z0NvbXBvbmVudCBmcm9tICd1bnBsdWdpbi1zdmctY29tcG9uZW50L3ZpdGUnXHJcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IFVucGx1Z2luR2xvYiBmcm9tICd1bnBsdWdpbi1nbG9iL3ZpdGUnXHJcbmltcG9ydCBWdWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXHJcbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJ1xyXG5pbXBvcnQgSWNvbnNSZXNvbHZlciBmcm9tICd1bnBsdWdpbi1pY29ucy9yZXNvbHZlcidcclxuaW1wb3J0IHsgZHluYW1pY0Jhc2UgfSBmcm9tICd2aXRlLXBsdWdpbi1keW5hbWljLWJhc2UnXHJcbmltcG9ydCB7IFZ1ZVJvdXRlckF1dG9JbXBvcnRzIH0gZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlcidcclxuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyL3ZpdGUnXHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xyXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAndml0ZS1wbHVnaW4tbWQnXHJcbmltcG9ydCB7IGNvZGUsIG1ldGEsIGxpbmsgfSBmcm9tICdtZC1wb3dlcnBhY2snXHJcbmltcG9ydCBNYXJrZG93bkl0SGlnaGxpZ2h0anMgZnJvbSAnbWFya2Rvd24taXQtaGlnaGxpZ2h0anMnXHJcbi8vIGltcG9ydCBDb25maWdQbHVnaW4gZnJvbSAndW5wbHVnaW4tY29uZmlnL3ZpdGUnXHJcbi8vIHZpdGUuY29uZmlnLmpzXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgLy8gYmFzZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICcvX19keW5hbWljX2Jhc2VfXy8nIDogJy8nLFxyXG4gIGJhc2U6ICcuLycsXHJcbiAgZW52RGlyOiAnLi9lbnYnLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICB0YXJnZXQ6ICdlc25leHQnLFxyXG4gICAgb3V0RGlyOiAnc3BsaXQtYm94JyxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIC8vIGR0cyh7IHJvbGx1cFR5cGVzOiB0cnVlIH0pLFxyXG4gICAgLi4uKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnXHJcbiAgICAgID8gW2FkZENvZGVMb2NhdGlvbigpLCBvcGVuQ29kZVNlcnZlcigpXVxyXG4gICAgICA6IFtdKSxcclxuICAgIC8vIENvbmZpZ1BsdWdpbih7XHJcbiAgICAvLyAgIGRpc2FibGVkQ29uZmlnOiBmYWxzZSxcclxuICAgIC8vICAgZ2xvYkNvbmZpZ0ZpbGVOYW1lOiAnY29uZmlnLmpzb24nLFxyXG4gICAgLy8gICBvdXRwdXREaXI6ICcvcHVibGljL2NvbmZpZycsXHJcbiAgICAvLyAgIGVudkNvbmZpZ1ByZWZpeDogJ1ZJVEVfJyxcclxuICAgIC8vIH0pLFxyXG4gICAgVW5wbHVnaW5HbG9iKHtcclxuICAgICAgLy8gdGFyZ2V0cyB0byByZXNvbHZlXHJcbiAgICAgIGluY2x1ZGU6IFtcclxuICAgICAgICAvXFwuW3RqXXN4PyQvLCAvLyAudHMsIC50c3gsIC5qcywgLmpzeFxyXG4gICAgICAgIC9cXC52dWUkLyxcclxuICAgICAgICAvXFwudnVlXFw/dnVlLywgLy8gLnZ1ZVxyXG4gICAgICAgIC9cXC5tZCQvLCAvLyAubWRcclxuICAgICAgXSxcclxuICAgICAgZXhjbHVkZTogWy9cXC5kXFwudHMkL10sXHJcblxyXG4gICAgICByb290OiBwcm9jZXNzLmN3ZCgpLFxyXG5cclxuICAgICAgLy8gRmlsZXBhdGggdG8gZ2VuZXJhdGUgY29ycmVzcG9uZGluZyAuZC50cyBmaWxlcy5cclxuICAgICAgLy8gRGVmYXVsdHMgdG8gYm90aCAnLi9nbG9iLmQudHMnIGFuZCAnZ2xvYi1nbG9iYWwuZC50cycgd2hlbiBwcm92aWRlZCBgdHJ1ZWAuXHJcbiAgICAgIC8vIFNldCBgZmFsc2VgIHRvIGRpc2FibGUuXHJcbiAgICAgIGR0czogJy4vdHlwZXMvYXV0by9nbG9iJywgLy8gYm9vbGVhbiBvciBzdHJpbmdcclxuICAgIH0pLFxyXG4gICAgLy8gZHluYW1pY0Jhc2Uoe1xyXG4gICAgLy8gICAvLyBkeW5hbWljIHB1YmxpYyBwYXRoIHZhciBzdHJpbmcsIGRlZmF1bHQgd2luZG93Ll9fZHluYW1pY19iYXNlX19cclxuICAgIC8vICAgcHVibGljUGF0aDogJ3dpbmRvdy5fX2R5bmFtaWNfYmFzZV9fJyxcclxuICAgIC8vICAgLy8gZHluYW1pYyBsb2FkIHJlc291cmNlcyBvbiBpbmRleC5odG1sLCBkZWZhdWx0IGZhbHNlLiBtYXliZSBjaGFuZ2UgZGVmYXVsdCB0cnVlXHJcbiAgICAvLyAgIHRyYW5zZm9ybUluZGV4SHRtbDogZmFsc2UsXHJcbiAgICAvLyB9KSxcclxuICAgIFVub0NTUygpLFxyXG4gICAgSWNvbnMoe1xyXG4gICAgICBhdXRvSW5zdGFsbDogdHJ1ZSxcclxuICAgICAgY29tcGlsZXI6ICd2dWUzJyxcclxuICAgICAganN4OiAncHJlYWN0JyxcclxuICAgIH0pLFxyXG4gICAgVnVlUm91dGVyKHtcclxuICAgICAgLy8gRm9sZGVyKHMpIHRvIHNjYW4gZm9yIHZ1ZSBjb21wb25lbnRzIGFuZCBnZW5lcmF0ZSByb3V0ZXMuIENhbiBiZSBhIHN0cmluZywgb3JcclxuICAgICAgLy8gYW4gb2JqZWN0LCBvciBhbiBhcnJheSBvZiB0aG9zZS4gRWFjaCBvcHRpb24gYWxsb3dzIHRvIG92ZXJyaWRlIGdsb2JhbCBvcHRpb25zLlxyXG4gICAgICAvLyBsaWtlIGV4Y2x1ZGUsIGV4dGVuc2lvbnMsIGV0Yy5cclxuICAgICAgcm91dGVzRm9sZGVyOiAnc3JjL3ZpZXdzJyxcclxuXHJcbiAgICAgIC8vIGFsbG93ZWQgZXh0ZW5zaW9ucyBmb3IgY29tcG9uZW50cyB0byBiZSBjb25zaWRlcmVkIGFzIHBhZ2VzXHJcbiAgICAgIC8vIGNhbiBhbHNvIGJlIGEgc3VmZml4OiBlLmcuIGAucGFnZS52dWVgIHdpbGwgbWF0Y2ggYGhvbWUucGFnZS52dWVgXHJcbiAgICAgIC8vIGJ1dCByZW1vdmUgaXQgZnJvbSB0aGUgcm91dGUgcGF0aFxyXG4gICAgICBleHRlbnNpb25zOiBbJy52dWUnLCAnLm1kJ10sXHJcblxyXG4gICAgICAvLyBsaXN0IG9mIGdsb2IgZmlsZXMgdG8gZXhjbHVkZSBmcm9tIHRoZSByb3V0ZXMgZ2VuZXJhdGlvblxyXG4gICAgICAvLyBlLmcuIFsnKiovX18qJ10gd2lsbCBleGNsdWRlIGFsbCBmaWxlcyBhbmQgZm9sZGVycyBzdGFydGluZyB3aXRoIGBfX2BcclxuICAgICAgLy8gZS5nLiBbJyoqL19fKi8qKi8qJ10gd2lsbCBleGNsdWRlIGFsbCBmaWxlcyB3aXRoaW4gZm9sZGVycyBzdGFydGluZyB3aXRoIGBfX2BcclxuICAgICAgLy8gZS5nLiBbJyoqLyouY29tcG9uZW50LnZ1ZSddIHdpbGwgZXhjbHVkZSBjb21wb25lbnRzIGVuZGluZyB3aXRoIGAuY29tcG9uZW50LnZ1ZWBcclxuICAgICAgZXhjbHVkZTogW10sXHJcblxyXG4gICAgICAvLyBQYXRoIGZvciB0aGUgZ2VuZXJhdGVkIHR5cGVzLiBEZWZhdWx0cyB0byBgLi90eXBlZC1yb3V0ZXIuZC50c2AgaWYgdHlwZXNjcmlwdFxyXG4gICAgICAvLyBpcyBpbnN0YWxsZWQuIENhbiBiZSBkaXNhYmxlZCBieSBwYXNzaW5nIGBmYWxzZWAuXHJcbiAgICAgIGR0czogJy4vdHlwZXMvYXV0by90eXBlZC1yb3V0ZXIuZC50cycsXHJcblxyXG4gICAgICAvLyBPdmVycmlkZSB0aGUgbmFtZSBnZW5lcmF0aW9uIG9mIHJvdXRlcy4gdW5wbHVnaW4tdnVlLXJvdXRlciBleHBvcnRzIHR3byB2ZXJzaW9uczpcclxuICAgICAgLy8gYGdldEZpbGVCYXNlZFJvdXRlTmFtZSgpYCAodGhlIGRlZmF1bHQpIGFuZCBgZ2V0UGFzY2FsQ2FzZVJvdXRlTmFtZSgpYC4gSW1wb3J0IGFueVxyXG4gICAgICAvLyBvZiB0aGVtIHdpdGhpbiB5b3VyIGB2aXRlLmNvbmZpZy50c2AgZmlsZS5cclxuICAgICAgLy8gZ2V0Um91dGVOYW1lOiAocm91dGVOb2RlKSA9PiBteU93bkdlbmVyYXRlUm91dGVOYW1lKHJvdXRlTm9kZSksXHJcblxyXG4gICAgICAvLyBDdXN0b21pemVzIHRoZSBkZWZhdWx0IGxhbmdhZ2UgZm9yIGA8cm91dGU+YCBibG9ja3NcclxuICAgICAgLy8ganNvbjUgaXMganVzdCBhIG1vcmUgcGVybWlzc2l2ZSB2ZXJzaW9uIG9mIGpzb25cclxuICAgICAgcm91dGVCbG9ja0xhbmc6ICdqc29uNScsXHJcblxyXG4gICAgICAvLyBDaGFuZ2UgdGhlIGltcG9ydCBtb2RlIG9mIHBhZ2UgY29tcG9uZW50cy4gQ2FuIGJlICdhc3luYycsICdzeW5jJywgb3IgYSBmdW5jdGlvbiB3aXRoIHRoZSBmb2xsb3dpbmcgc2lnbmF0dXJlOlxyXG4gICAgICAvLyAoZmlsZXBhdGg6IHN0cmluZykgPT4gJ2FzeW5jJyB8ICdzeW5jJ1xyXG4gICAgICBpbXBvcnRNb2RlOiAnYXN5bmMnLFxyXG4gICAgfSksXHJcbiAgICBWdWVNYWNyb3Moe1xyXG4gICAgICBzZXR1cEJsb2NrOiB0cnVlLFxyXG4gICAgICBkZWZpbmVPcHRpb25zOiB0cnVlLFxyXG4gICAgICBzaG9ydEVtaXRzOiB0cnVlLFxyXG4gICAgICBob2lzdFN0YXRpYzogdHJ1ZSxcclxuICAgICAgZGVmaW5lU2xvdHM6IHRydWUsXHJcbiAgICAgIGRlZmluZU1vZGVsczogdHJ1ZSxcclxuICAgICAgbmFtZWRUZW1wbGF0ZTogZmFsc2UsXHJcbiAgICAgIGV4cG9ydFByb3BzOiBmYWxzZSxcclxuXHJcbiAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICB2dWU6IFZ1ZSh7XHJcbiAgICAgICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwuc2V0dXBcXC5bY21dP1tqdF1zeD8kLywgLy5tZCQvXSxcclxuICAgICAgICAgIHJlYWN0aXZpdHlUcmFuc2Zvcm06IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXHJcbiAgICAgICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgICAgICBjb21waWxlck9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICBub2RlVHJhbnNmb3JtczogW10sXHJcbiAgICAgICAgICAgICAgaXNDdXN0b21FbGVtZW50OiAodGFnKSA9PiB0YWcuc3RhcnRzV2l0aCgndW4tJyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHZ1ZUpzeDogdnVlSnN4KCksXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIFVucGx1Z2luU3ZnQ29tcG9uZW50KHtcclxuICAgICAgaWNvbkRpcjogJ3NyYy9hc3NldC9zdmdJY29uJyxcclxuICAgICAgcHJvamVjdFR5cGU6ICd2dWUnLFxyXG4gICAgICBkdHM6IHRydWUsXHJcbiAgICAgIGR0c0RpcjogJy4vdHlwZXMvYXV0bycsXHJcbiAgICAgIHByZWZpeDogJ3N2ZycsXHJcbiAgICB9KSxcclxuXHJcbiAgICBDb21wb25lbnRzKHtcclxuICAgICAgZHRzOiAnLi90eXBlcy9hdXRvL2NvbXBvbmVudC5kLnRzJyxcclxuICAgICAgLy8gZGlyczogWydzcmMvY29tcG9uZW50cy9zeXN0ZW0vKi52dWUnXSxcclxuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAndHN4JywgJ3RzJywgJ21kJ10sXHJcbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvLCAvXFwubWQkLywgL1xcLnRzeD8kLywgL1xcLmpzeD8kL10sXHJcbiAgICAgIC8vIEdsb2IgcGF0dGVybnMgdG8gbWF0Y2ggZmlsZSBuYW1lcyB0byBiZSBkZXRlY3RlZCBhcyBjb21wb25lbnRzLlxyXG4gICAgICAvLyBXaGVuIHNwZWNpZmllZCwgdGhlIGBkaXJzYCBhbmQgYGV4dGVuc2lvbnNgIG9wdGlvbnMgd2lsbCBiZSBpZ25vcmVkLlxyXG4gICAgICAvLyBnbG9iczogWydzcmMvY29tcG9uZW50cy9zeXN0ZW0vKi52dWUnLCAnc3JjL3V0aWxzL2NvbXBvbmVudHMvKi52dWUnXSxcclxuICAgICAgYWxsb3dPdmVycmlkZXM6IHRydWUsXHJcbiAgICAgIHZlcnNpb246IDMsXHJcbiAgICAgIHJlc29sdmVyczogW1xyXG4gICAgICAgIE5haXZlVWlSZXNvbHZlcigpLFxyXG4gICAgICAgIFZ1ZVVzZUNvbXBvbmVudHNSZXNvbHZlcigpLFxyXG4gICAgICAgIFZ1ZVVzZURpcmVjdGl2ZVJlc29sdmVyKCksXHJcbiAgICAgICAgSWNvbnNSZXNvbHZlcih7XHJcbiAgICAgICAgICBwcmVmaXg6ICdpJyxcclxuICAgICAgICB9KSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiAnY29tcG9uZW50JyxcclxuICAgICAgICAgIHJlc29sdmU6IChuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChuYW1lLnN0YXJ0c1dpdGgoJ0cnKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICAgICAgICBmcm9tOiBgQGcvY29tcG9uZW50cy8ke25hbWUuc2xpY2UoMSl9LnZ1ZWAsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIHR5cGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZnJvbTogJ3Z1ZS1yb3V0ZXInLFxyXG4gICAgICAgICAgbmFtZXM6IFsnUm91dGVyTGluaycsICdSb3V0ZXJWaWV3J10sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pLFxyXG4gICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgIGluY2x1ZGU6IFtcclxuICAgICAgICAvXFwuW3RqXXN4PyQvLCAvLyAudHMsIC50c3gsIC5qcywgLmpzeFxyXG4gICAgICAgIC9cXC52dWUkLyxcclxuICAgICAgICAvXFwudnVlXFw/dnVlLywgLy8gLnZ1ZVxyXG4gICAgICAgIC9cXC5tZCQvLCAvLyAubWRcclxuICAgICAgXSxcclxuICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICd2dWUnLFxyXG4gICAgICAgIFZ1ZVJvdXRlckF1dG9JbXBvcnRzLFxyXG4gICAgICAgICdwaW5pYScsXHJcbiAgICAgICAgLy8gJ0B2dWV1c2UvY29yZScsXHJcbiAgICAgICAgLy8gJ0B2dWV1c2UvbWF0aCcsXHJcbiAgICAgICAgLy8gJ0B2dWV1c2UvaGVhZCcsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJ25haXZlLXVpJzogW1xyXG4gICAgICAgICAgICAndXNlRGlhbG9nJyxcclxuICAgICAgICAgICAgJ3VzZU1lc3NhZ2UnLFxyXG4gICAgICAgICAgICAndXNlTm90aWZpY2F0aW9uJyxcclxuICAgICAgICAgICAgJ3VzZUxvYWRpbmdCYXInLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgICcvc3JjL3V0aWxzL2luaXRDb25maWcudHMnOiBbJ3N5c0NvbmZpZycsICd0aGVtZSddLFxyXG4gICAgICAgICAgLy8gJ1twYWNrYWdlLW5hbWVdJzogW1xyXG4gICAgICAgICAgLy8gICAnW2ltcG9ydC1uYW1lc10nLFxyXG4gICAgICAgICAgLy8gICAvLyBhbGlhc1xyXG4gICAgICAgICAgLy8gICBbJ1tmcm9tXScsICdbYWxpYXNdJ10sXHJcbiAgICAgICAgICAvLyBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIC8vIFx1NTNFRlx1NEVFNVx1OTAwOVx1NjJFOWF1dG8taW1wb3J0LmQudHNcdTc1MUZcdTYyMTBcdTc2ODRcdTRGNERcdTdGNkVcdUZGMENcdTRGN0ZcdTc1Mjh0c1x1NUVGQVx1OEJBRVx1OEJCRVx1N0Y2RVx1NEUzQSdzcmMvYXV0by1pbXBvcnQuZC50cydcclxuICAgICAgZHRzOiAnLi90eXBlcy9hdXRvL2F1dG8taW1wb3J0LmQudHMnLFxyXG4gICAgICBlc2xpbnRyYzoge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsIC8vIERlZmF1bHQgYGZhbHNlYFxyXG4gICAgICAgIGZpbGVwYXRoOiAnLi8uZXNsaW50cmMtYXV0by1pbXBvcnQuanNvbicsIC8vIERlZmF1bHQgYC4vLmVzbGludHJjLWF1dG8taW1wb3J0Lmpzb25gXHJcbiAgICAgICAgZ2xvYmFsc1Byb3BWYWx1ZTogJ3JlYWRvbmx5JywgLy8gRGVmYXVsdCBgdHJ1ZWAsICh0cnVlIHwgZmFsc2UgfCAncmVhZG9ubHknIHwgJ3JlYWRhYmxlJyB8ICd3cml0YWJsZScgfCAnd3JpdGVhYmxlJylcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgTWFya2Rvd24oe1xyXG4gICAgICBtYXJrZG93bkl0T3B0aW9uczoge1xyXG4gICAgICAgIGh0bWw6IHRydWUsXHJcbiAgICAgICAgbGlua2lmeTogdHJ1ZSxcclxuICAgICAgICB0eXBvZ3JhcGhlcjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgbWFya2Rvd25JdFNldHVwKG1kKSB7XHJcbiAgICAgICAgLy8gYWRkIGFuY2hvciBsaW5rcyB0byB5b3VyIEhbeF0gdGFnc1xyXG4gICAgICAgIG1kLnVzZShNYXJrZG93bkl0SGlnaGxpZ2h0anMpXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIC8vIFZ1ZURldlRvb2xzKCksXHJcbiAgXSxcclxuXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgY29uZGl0aW9uczogWydkZWZhdWx0J10sXHJcbiAgICBleHRlbnNpb25zOiBbJy5tanMnLCAnLmpzJywgJy50cycsICcuanN4JywgJy50c3gnLCAnLmpzb24nXSxcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSwgLy8gXHU4REVGXHU1Rjg0XHU1MjJCXHU1NDBEXHJcbiAgICAgICdAZyc6IHJlc29sdmUoX19kaXJuYW1lLCAnZ2xvYmFscycpLCAvLyBcdThERUZcdTVGODRcdTUyMkJcdTU0MERcclxuICAgICAgJ0BsaWInOiByZXNvbHZlKF9fZGlybmFtZSwgJ2xpYicpLCAvLyBcdThERUZcdTVGODRcdTUyMkJcdTU0MERcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QjtBQUFBLEVBQ0U7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLE9BQ0s7QUFDUCxTQUFTLGVBQWU7QUFFeEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxZQUFZO0FBRW5CLFNBQVMsZ0JBQWdCLHVCQUF1QjtBQUVoRCxPQUFPLGVBQWU7QUFDdEIsT0FBTywwQkFBMEI7QUFDakMsT0FBTyxZQUFZO0FBRW5CLE9BQU8sa0JBQWtCO0FBRXpCLE9BQU8sV0FBVztBQUNsQixPQUFPLG1CQUFtQjtBQUUxQixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLGVBQWU7QUFFdEIsT0FBTyxjQUFjO0FBRXJCLE9BQU8sMkJBQTJCO0FBOUJsQyxJQUFNLG1DQUFtQztBQWtDekMsSUFBTyxzQkFBUSxhQUFhO0FBQUE7QUFBQSxFQUUxQixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsU0FBUztBQUFBO0FBQUEsSUFFUCxHQUFJLFFBQVEsSUFBSSxhQUFhLGdCQUN6QixDQUFDLGdCQUFn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
