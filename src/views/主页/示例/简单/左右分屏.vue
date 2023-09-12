<template>
  <split-box>
    <n-code word-wrap :code="code" language="javascript" show-line-numbers />
    <l-r-split />
  </split-box>
</template>

<script setup lang="ts">
import SplitBox from '@headerless/split-box'
import '@headerless/split-box/style.css'
import LRSplit from '@/samples/左右分屏/左右分屏.vue'
import code from '@/samples/左右分屏/左右分屏.vue?raw'

definePage({
  name: '左右分屏',
})
</script>
