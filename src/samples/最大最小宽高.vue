<template>
  <use-element-size v-slot="{ width: rootWidth, height: rootHeight }">
    <split-box class="flex-col">
      <use-element-size
        v-slot="{ width = 0, height = 0 }"
        class="min-h-400px flex flex-col items-center justify-center bg-red-500 text-[2em]"
        style="max-height: 80%"
      >
        <span>最小高: 400px </span>
        <span>最大高: 80% </span>
        <span>宽: {{ width.toFixed(2) }}px</span>
        <span>高: {{ height.toFixed(2) }}px</span>
        <span>宽: {{ ((width / rootWidth) * 100).toFixed(2) }}%</span>
        <span>高: {{ ((height / rootHeight) * 100).toFixed(2) }}%</span>
      </use-element-size>
      <split-box>
        <use-element-size
          v-slot="{ width, height }"
          class="max-w-4/5 min-w-1/5 flex flex-col items-center justify-center bg-green-500 text-[2em]"
        >
          <span>最大宽: 80% </span>
          <span>最小宽: 20% </span>
          <span>宽: {{ ((width / rootWidth) * 100).toFixed(2) }}%</span>
          <span>高: {{ ((height / rootHeight) * 100).toFixed(2) }}%</span>
        </use-element-size>
        <use-element-size
          v-slot="{ width = 0, height = 0 }"
          class="flex flex-col items-center justify-center bg-blue-500 text-[2em]"
          style="min-width: 40%"
        >
          <span>最小宽: 40% </span>
          <span>宽: {{ ((width / rootWidth) * 100).toFixed(2) }}%</span>
          <span>高: {{ ((height / rootHeight) * 100).toFixed(2) }}%</span>
        </use-element-size>
      </split-box>
    </split-box>
  </use-element-size>
</template>

<script setup lang="ts">
/**
 * 直接用css设置`max-width`、`max-height`、`min-width`、`min-height`属性来指定子元素的最大最小宽高
 * @warn 组件完全受css样式控制，内部并未作边界检查，也不打算作边界检查，所以用户需自行注意其中冲突。比如，在横向模式下，所有子组件的最小宽之和不应超出容器的宽度
 */

import SplitBox from '@headerless/split-box'
import { UseElementSize } from '@vueuse/components'
</script>
