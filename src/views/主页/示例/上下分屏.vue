<template>
  <split-box>
    <g-show-code :code="code" class="h-full" />
    <vue-comp />
  </split-box>
</template>

<script setup lang="ts">
import SplitBox from '@headerless/split-box'
import VueComp from '@/samples/上下分屏.vue'
import code from '@/samples/上下分屏.vue?raw'

definePage({
  name: '上下分屏',
})
</script>
