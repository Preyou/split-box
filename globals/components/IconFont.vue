<template>
  <n-icon v-bind="$props">
    <svg aria-hidden="true">
      <use :xlink:href="`#${use}`" />
    </svg>
  </n-icon>
</template>
<script setup lang="ts">
import { NIcon } from 'naive-ui'

defineOptions({
  extends: NIcon,
  inheritAttrs: true,
  _n_icon__: false,
})

defineProps<{
  use?: 'string'
}>()
</script>

<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
