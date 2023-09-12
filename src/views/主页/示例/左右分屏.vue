<template>
  <split-box default-direction="vertical" class="bg-red-500">
    <div class="bg-dark-500">bg-dark-500</div>
    <split-box>
      <div />
      <split-box default-direction="vertical">
        <div />
        <div />
      </split-box>
    </split-box>
    <div class="bg-green-500" />
  </split-box>
</template>

<script setup lang="ts">
import SplitBox from '@lib/index.js'
import '@lib/style.css'

definePage({
  name: '示例1',
})
</script>
