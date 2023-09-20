<template>
  <split-box>
    <g-show-code :code="code" class="h-full" />
    <vue-comp />
  </split-box>
</template>

<script setup lang="ts">
import SplitBox from '@headerless/split-box'
import VueComp from '@/samples/默认宽高.vue'
import code from '@/samples/默认宽高.vue?raw'

definePage({
  meta: {
    title: '默认宽高',
    order: 5,
  },
})
</script>
