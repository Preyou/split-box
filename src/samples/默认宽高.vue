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
        class="w-200px flex flex-col items-center justify-center bg-green-500 text-[2em]"
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
/**
 * 直接用css给子元素设置宽高就相当于指定了默认宽高，但是要注意，因为split-box是flex布局，所以子元素的宽高会被压缩或拉伸，如果你不希望子元素被压缩或拉伸，可以给子元素设置flex: none;
 */

import SplitBox from '@headerless/split-box'
// import SplitBox from '@lib/dist/index.js'
// import '@lib/dist/style.css'

import { UseElementSize } from '@vueuse/components'
</script>
