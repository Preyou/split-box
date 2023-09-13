<template>
  <router-view />
</template>

<script setup lang="ts">
definePage({
  name: '示例',
  redirect: {
    name: '左右分屏',
  },
})
</script>
