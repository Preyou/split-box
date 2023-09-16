<template>
  <split-box>
    <n-scrollbar class="h-full">
      <read-me class="min-w-100 p-4" />
    </n-scrollbar>
    <vue-comp />
  </split-box>
</template>

<script setup lang="ts">
// import SplitBox from '@lib/dist/index.js'
// import '@lib/dist/style.css'
import ReadMe from '@lib/README.md'

import SplitBox from '@headerless/split-box'
import VueComp from '@/samples/概述.vue'
// import ReadMe from '@headerless/split-box/README.md'

definePage({
  name: '概述',
})
</script>
