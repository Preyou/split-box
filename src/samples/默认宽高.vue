<template>
  <split-box class="flex-col">
    <use-element-size
      v-slot="{ width = 0, height = 0 }"
      class="h-200px flex flex-none flex-col items-center justify-center bg-red-500 text-[2em]"
    >
      <span>默认高: 200px </span>
      <span>宽: {{ width?.toFixed(2) }}px</span>
      <span>高: {{ height?.toFixed(2) }}px</span>
    </use-element-size>
    <split-box>
      <use-element-size
        v-slot="{ width = 0, height = 0 }"
        class="w-200px flex flex-none flex-col items-center justify-center bg-green-500 text-[2em]"
      >
        <span>默认宽: 200px </span>
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
 * 直接用css给子元素设置宽高就相当于指定了默认宽高
 * @default 未指定时，所有元素平分容器的空间
 * @warn 因为split-box是flex布局，所以子元素的宽高会被压缩或拉伸，如果你不希望子元素被压缩或拉伸，可以给子元素设置`flex: none;`
 * @error 暂不支持使用style指定默认宽高，因为子组件也是采用的style来动态设置宽高，当你指定了子组件的style后，子组件就成为了受控组件，将无法修改自己的宽高。目前仅`width`与`height`属性不支持，其他属性不受影响
 * @todo 要不了多久应该会支持使用style指定默认宽高
 */

import SplitBox from '@headerless/split-box'
import { UseElementSize } from '@vueuse/components'
</script>
