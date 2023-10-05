<template>
  <use-element-size v-slot="{ height = 0 }">
    <n-scrollbar x-scrollable class="h-full w-full">
      <link
        rel="stylesheet"
        type="text/css"
        :href="isDark ? atomOneDark : atomOneLight"
      />
      <highlightjs
        v-bind="$attrs"
        class="w-full flex flex-col"
        :style="{ width: '100%', minHeight: height + 'px' }"
        :language="language"
        :autodetect="false"
        :code="code"
      />
    </n-scrollbar>
  </use-element-size>
</template>
<script setup lang="ts">
import { UseElementSize } from '@vueuse/components'
import { useDark } from '@vueuse/core'
import atomOneDark from 'highlight.js/styles/atom-one-dark.css?url'
import atomOneLight from 'highlight.js/styles/atom-one-light.css?url'

const { language = 'html', code } = $defineProps<{
  code: string
  language?: string
}>()

const isDark = useDark()
</script>
<style>
.hljs {
  width: 100%;
  height: 100%;
  white-space: pre-wrap;
  flex: auto;
}
</style>
