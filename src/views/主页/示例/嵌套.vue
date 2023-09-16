<template>
  <split-box>
    <g-show-code :code="code" class="h-full" />
    <vue-comp />
  </split-box>
</template>

<script setup lang="ts">
import SplitBox from '@headerless/split-box'
import VueComp from '@/samples/嵌套.vue'
import code from '@/samples/嵌套.vue?raw'

definePage({
  name: '嵌套',
})
</script>
