<template>
  <split-box>
    <read-me class="min-w-100 p-4" />
    <split-box class="flex-col">
      <div class="bg-blue-500" />
      <split-box>
        <div class="bg-red-500" />
        <div class="bg-green-500" />
      </split-box>
    </split-box>
  </split-box>
</template>

<script setup lang="ts">
// import SplitBox from '@lib/dist/index.js'
// import '@lib/dist/style.css'
import ReadMe from '@lib/README.md'

import SplitBox from '@headerless/split-box'
import '@headerless/split-box/style.css'
// import ReadMe from '@headerless/split-box/README.md'

definePage({
  name: '概述',
})
</script>
