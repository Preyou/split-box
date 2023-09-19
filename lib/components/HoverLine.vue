<template>
  <div
    class="drag-none hover-line"
    :class="{
      'hover-line-hover': hoverable,
      'hover-line-horizontal': direction === 'row',
      'hover-line-vertical': direction === 'column',
    }"
    :style="style"
  />
</template>

<script setup lang="ts">
import { useCurrentElement } from '@vueuse/core'
import { CSSProperties } from 'vue'
import { useDragEvent, useDragEventOptions } from '../hooks'

const {
  direction = 'none',
  hoverable = true,
  useDrag = true,
  style = {},
} = $defineProps<{
  direction?: 'row' | 'column' | 'none'
  hoverable?: boolean
  useDrag?: useDragEventOptions
  style?: CSSProperties
}>()
const el = useCurrentElement<HTMLElement>()

const $emit = defineEmits<{
  drag: [
    val: Parameters<Parameters<ReturnType<typeof useDragEvent>['onDrag']>[0]>[0]
  ]
}>()

if (useDrag) {
  const dragOptions = typeof useDrag === 'object' ? useDrag : {}
  let dragEvent: ReturnType<typeof useDragEvent>
  watch(
    $$(style),
    () => {
      nextTick(() => {
        dragEvent?.cleanup()
        dragEvent = useDragEvent(el, dragOptions)
        dragEvent.onDrag((...r) => $emit('drag', ...r))
      })
    },
    {
      immediate: true,
    }
  )
}
</script>

<style>
@layer split {
  .hover-line {
    flex: none;
    z-index: 9999;
    background-color: rgba(255, 255, 255, 0.09);
  }

  .hover-line-hover:hover,
  .hover-line-hover:active {
    background-color: #7fe7c4;
  }

  .hover-line-horizontal {
    width: 100%;
    height: var(--thickness);
  }

  .hover-line-vertical {
    width: var(--thickness);
    height: 100%;
    width: calc();
  }
}
</style>
