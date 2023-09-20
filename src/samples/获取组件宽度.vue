<template>
  <split-box class="flex-col">
    <use-element-size
      v-slot="{ width = 0, height = 0 }"
      class="flex flex-col items-center justify-center bg-red-500 text-[2em]"
    >
      <span>宽: {{ width?.toFixed(2) }}px</span>
      <span>高: {{ height?.toFixed(2) }}px</span>
    </use-element-size>
    <split-box>
      <use-element-size
        v-slot="{ width = 0, height = 0 }"
        class="flex flex-col items-center justify-center bg-green-500 text-[2em]"
      >
        <span>宽: {{ width?.toFixed(2) }}px</span>
        <span>高: {{ height.toFixed(2) }}px</span>
      </use-element-size>
      <use-element-size
        v-slot="{ width = 0, height = 0 }"
        class="flex flex-col items-center justify-center bg-blue-500 text-[2em]"
      >
        <span>宽: {{ width.toFixed(2) }}px</span>
        <span>高: {{ height.toFixed(2) }}px</span>
      </use-element-size>
    </split-box>
  </split-box>
</template>

<script setup lang="ts">
/**
 * 为了减小包体积，以及实现*0api*，组件本身并没有提供获取宽高的方法，不过用户可以自行结合其他库获取，比如使用[vueuse]{@link https://vueuse.org/core/useElementSize/#useelementsize }
 */

import SplitBox from '@headerless/split-box'
import { UseElementSize } from '@vueuse/components'
</script>
