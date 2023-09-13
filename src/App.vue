<template>
  <n-config-provider
    abstract
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme="isDark ? darkTheme : null"
    :theme-overrides="theme"
  >
    <n-global-style />
    <n-theme-editor>
      <n-dialog-provider>
        <n-message-provider>
          <router-view />
        </n-message-provider>
      </n-dialog-provider>
    </n-theme-editor>
  </n-config-provider>
</template>
<script lang="ts" setup>
import { zhCN, dateZhCN, darkTheme } from 'naive-ui'
import { useDark } from '@vueuse/core'
import { theme } from '@/utils/initConfig'

const isDark = useDark()
</script>
