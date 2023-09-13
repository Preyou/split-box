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
  <link v-if="isDark" rel="stylesheet" type="text/css" :href="AtomOneDark" />
  <link v-else rel="stylesheet" type="text/css" :href="AtomOneLight" />
</template>

<script lang="ts" setup>
import { useDark } from '@vueuse/core'
import AtomOneDark from 'highlight.js/styles/atom-one-dark.css?url'
import AtomOneLight from 'highlight.js/styles/atom-one-light.css?url'

const isDark = useDark()
</script>
