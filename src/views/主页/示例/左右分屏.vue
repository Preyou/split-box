<template>
  <split-box>
    <g-show-code :code="code" class="h-full" />
    <vue-comp />
  </split-box>
</template>

<script setup lang="ts">
import SplitBox from '@headerless/split-box'
import VueComp from '@/samples/左右分屏.vue'
import code from '@/samples/左右分屏.vue?raw'

definePage({
  name: '左右分屏',
})
</script>
