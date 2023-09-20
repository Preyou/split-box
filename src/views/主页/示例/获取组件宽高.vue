<template>
  <split-box>
    <g-show-code :code="code" class="h-full" />
    <vue-comp />
  </split-box>
</template>

<script setup lang="ts">
import SplitBox from '@headerless/split-box'
import VueComp from '@/samples/获取组件宽度.vue'
import code from '@/samples/获取组件宽度.vue?raw'

definePage({
  meta: {
    title: '获取组件宽度',
    order: 4,
  },
})
</script>
