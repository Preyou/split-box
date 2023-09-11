<template>
  <un-flex class="flex-none flex-nowrap items-center gap-2">
    <slot name="logo" />
    <n-ellipsis :line-clamp="1">
      <slot />
    </n-ellipsis>
  </un-flex>
</template>

<script setup lang="ts"></script>

<style scoped></style>
