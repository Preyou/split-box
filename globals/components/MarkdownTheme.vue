<template>
  <link
    v-if="isDark"
    rel="stylesheet"
    type="text/css"
    href="markdown-css/drake-dark.css"
  />
  <link
    v-else
    rel="stylesheet"
    type="text/css"
    href="markdown-css/drake-light.css"
  />
</template>

<script lang="ts" setup>
import { useDark } from '@vueuse/core'

const isDark = useDark()
</script>
