<template>
  <split-box class="flex-col">
    <use-element-size
      v-slot="{ width, height }"
      class="h-200px flex flex-none flex-col items-center justify-center bg-red-500 text-[2em]"
    >
      <span>默认高: 200px </span>
      <span>宽: {{ width }}</span>
      <span>高: {{ height }}</span>
    </use-element-size>
    <split-box>
      <use-element-size
        v-slot="{ width, height }"
        class="w-200px flex flex-none flex-col items-center justify-center bg-green-500 text-[2em]"
      >
        <span>默认宽: 200px </span>
        <span>宽: {{ width }}</span>
        <span>高: {{ height }}</span>
      </use-element-size>
      <use-element-size
        v-slot="{ width, height }"
        class="flex flex-col items-center justify-center bg-blue-500 text-[2em]"
      >
        <span>宽: {{ width }}</span>
        <span>高: {{ height }}</span>
      </use-element-size>
    </split-box>
  </split-box>
</template>

<script setup lang="ts">
import SplitBox from '@headerless/split-box'
import '@headerless/split-box/style.css'
</script>
