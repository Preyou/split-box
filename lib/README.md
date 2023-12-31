<g-markdown-theme />

# split-box

当前仅支持vue3

可能是用起来最简单的分屏组件，没有api，没有学习成本，一切行为均由css控制

推荐使用原子化css进行样式设置，当然，直接使用style或者普通的class也是可以的。

## 功能特色

- 基于flex的左右分屏、上下分屏
- 支持分屏嵌套
- 支持最大值、最小值、默认值
- 只有一个组件，**0 api**，一切行为均由css控制
- 支持使用任何css单位

## 快速开始

1. 安装

    npm

    ```sh
    npm i @headerless/split-box -S
    ```

    pnpm

    ```sh
    pnpm add @headerless/split-box -S
    ```

2. 使用

    - 全局注册

    ```ts
    // main.ts
    import { createApp } from 'vue'
    import SplitBox from '@headerless/split-box'
    import '@headerless/split-box/style.css'

    const app = createApp({})

    app.component('SplitBox', SplitBox)
    ```

    在SFC中使用

    ```html
    <!-- 在SFC中使用 -->
    <template>
        <split-box class="flex-col">
            <div class="bg-blue-500" />
            <split-box>
                <div class="bg-red-500" />
                <div class="bg-green-500" />
            </split-box>
        </split-box>
    </template>

    ```

    - 按需引用

    ```html
    <template>
        <split-box class="flex-col">
            <div class="bg-blue-500" />
            <split-box>
                <div class="bg-red-500" />
                <div class="bg-green-500" />
            </split-box>
        </split-box>
    </template>

    <script setup lang="ts">
    import SplitBox from '@headerless/split-box'
    import '@headerless/split-box/style.css'
    </script>

    ```

## 使用示例

[点此访问](http://103.200.29.128:32768/split-box)

## 开源地址

[github](https://github.com/Preyou/split-box)