<template>
  <n-layout
    class="h-screen w-screen"
    content-style="display:flex;flex-direction: column;"
  >
    <n-layout-header bordered class="flex-none">
      <sys-header
        v-bind="sysHeaderProps"
        :value="$router.currentRoute.value.name"
      >
        <template #logo>
          <i-ph-square-split-horizontal-fill />
        </template>
        <template #title> split-box </template>
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
import { useThemeVars } from 'naive-ui'
import useMenuProps from '@/withData/sysHeaderProps'
import sysMate from '@/components/systemEffect/SysMate.vue'

const themeVars = useThemeVars()

const sysHeaderProps = useMenuProps()

definePage({
  name: '主页',
  redirect: {
    name: '概述',
  },
})
</script>

<style>
.hover-line {
  background-color: v-bind('themeVars.dividerColor');
}

.hover-line-hover:hover,
.hover-line-hover:active {
  background-color: v-bind('themeVars.primaryColorHover');
}
.split-box {
  --thickness: 5px;
}
</style>
