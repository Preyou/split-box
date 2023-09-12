<template>
  <router-view />
</template>

<script setup lang="ts">
definePage({
  name: '简单',
  redirect: {
    name: '左右分屏',
  },
})
</script>
