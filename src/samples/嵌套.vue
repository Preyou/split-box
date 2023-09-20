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
/**
 * 使用css样式`flex-direction`属性来指定子元素的排列方向
 */
import SplitBox from '@headerless/split-box'
</script>
