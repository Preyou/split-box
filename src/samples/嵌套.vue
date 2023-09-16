<template>
  <split-box class="flex-col">
    <div class="bg-blue-500" />
    <split-box>
      <div class="bg-red-500" />
      <split-box class="flex-col">
        <div class="bg-green-500" />
        <div class="bg-yellow-500" />
      </split-box>
    </split-box>
  </split-box>
</template>

<script setup lang="ts">
import SplitBox from '@headerless/split-box'
</script>
