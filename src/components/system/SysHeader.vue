<template>
  <un-flex class="box-border w-full flex items-center px-4">
    <left-header>
      <template #logo>
        <slot name="logo" />
      </template>
      <slot name="title" />
    </left-header>
    <center-header v-bind="$props"> <slot /> </center-header>
    <right-header>
      <slot name="mate" />
    </right-header>
  </un-flex>
</template>

<script setup lang="ts">
import LeftHeader from './sysHeader/LeftHeader.vue'
import RightHeader from './sysHeader/RightHeader.vue'
import CenterHeader from './sysHeader/CenterHeader.vue'

defineOptions({
  mixins: [CenterHeader],
})
</script>
