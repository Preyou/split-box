<template>
  <split-box>
    <read-me />
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
import SplitBox from '@lib/index'
import ReadMe from '@lib/README.md'

definePage({
  name: '概述',
})
</script>
