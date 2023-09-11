<template>
  <n-layout
    class="h-screen w-screen"
    content-style="display:flex;flex-direction: column;"
  >
    <n-layout-header bordered class="flex-none">
      <sys-header v-bind="sysHeaderProps">
        <template #logo>
          <i-ion-accessibility />
        </template>
        <template #title> 标题 </template>
        <template #mate>
          <sys-mate />
        </template>
      </sys-header>
    </n-layout-header>
    <n-layout-content class="h-full">
      <router-view />
    </n-layout-content>
  </n-layout>
</template>

<script setup lang="ts">
import sysHeaderProps from '@/withData/sysHeaderProps'
import sysMate from '@/components/systemEffect/SysMate.vue'

definePage({
  name: '主页',
  redirect: {
    name: '概述',
  },
})
</script>
