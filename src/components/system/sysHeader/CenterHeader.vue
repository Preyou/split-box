<template>
  <un-flex class="flex-1 px-4">
    <slot>
      <n-menu v-bind="$props" />
    </slot>
  </un-flex>
</template>

<script setup lang="ts">
import { NMenu } from 'naive-ui'

defineOptions({
  mixins: [NMenu],
})
</script>
