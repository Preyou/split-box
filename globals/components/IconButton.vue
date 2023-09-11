<template>
  <n-tooltip v-bind="$props" trigger="hover">
    <template #trigger>
      <n-button text v-bind="$attrs">
        <template #icon>
          <slot />
        </template>
      </n-button>
    </template>
  </n-tooltip>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui'

defineOptions({
  extends: NButton,
})
</script>
