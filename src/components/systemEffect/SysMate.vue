<template>
  <n-switch
    v-model:value="isDark"
    :style="`--n-button-color: var(--n-color)`"
    :rail-style="() => (isDark ? 'background: #2f2f2f' : '')"
  >
    <template #checked> 夜间 </template>
    <template #unchecked> 日间 </template>
    <template #checked-icon>
      <i-material-symbols-dark-mode-outline color="#ccc" />
    </template>
    <template #unchecked-icon>
      <i-ph-sun-dim />
    </template>
  </n-switch>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { useThemeVars } from 'naive-ui'

const themeVars = useThemeVars()

const isDark = useDark()
</script>

<style>
.hover-line {
  background-color: v-bind('themeVars.dividerColor');
}

.hover-line-hover:hover,
.hover-line-hover:active {
  background-color: v-bind('themeVars.primaryColorHover');
}
</style>
