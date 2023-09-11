<template>
  <router-view />
</template>

<script setup lang="ts">
definePage({
  name: '示例',
  redirect: {
    name: '示例1',
  },
})
</script>
