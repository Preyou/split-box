<template>
  <split-box>
    <g-show-code :code="code" class="h-full" />
    <vue-comp />
  </split-box>
</template>

<script setup lang="ts">
import SplitBox from '@headerless/split-box'
import VueComp from '@/samples/内部测试.vue'
import code from '@/samples/内部测试.vue?raw'

definePage({
  name: '内部测试',
  meta: {
    title: '内部测试',
    hidden: false,
    order: -1,
  },
})
</script>
