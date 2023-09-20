<template>
  <split-box>
    <g-show-code :code="code" class="h-full" />
    <vue-comp />
  </split-box>
</template>

<script setup lang="ts">
import SplitBox from '@headerless/split-box'
import VueComp from '@/samples/最大最小宽高.vue'
import code from '@/samples/最大最小宽高.vue?raw'

definePage({
  meta: {
    title: '最大最小宽高',
    order: 6,
  },
})
</script>
