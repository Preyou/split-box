<template>
  <code-block
    highlightjs
    persistent-copy-button
    lang="html"
    height="100%"
    :theme="isDark ? 'atom-one-dark' : 'atom-one-light'"
    :code-block-radius="0"
  />
</template>
<script setup lang="ts">
import CodeBlock from 'vue3-code-block'
import { useDark } from '@vueuse/core'

const isDark = useDark()

defineOptions({
  extends: [CodeBlock],
})
</script>

<style>
.v-code-block--code {
  height: 100%;
}
</style>
