<template>
  <div class="split-box relative h-full w-full overflow-hidden">
    <un-flex
      ref="containerRef"
      v-bind="$attrs"
      :class="{
        'flex-row': direction === 'row',
        'flex-col': direction === 'column',
      }"
      class="relative h-full w-full layer-split:[&>*]:(box-border h-full w-full)"
    >
      <slot />
    </un-flex>
    <hover-line
      v-for="(bind, i) in hoverLineArr"
      v-bind="bind"
      :key="i"
      class="absolute"
      :class="[
        direction === 'column' ? 'cursor-row-resize' : 'cursor-col-resize',
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import {
  syncRef,
  useCssVar,
  useElementSize,
  useMutationObserver,
} from '@vueuse/core'
import { ExtractPublicPropTypes, EffectScope, Ref } from 'vue'
import HoverLine from './HoverLine.vue'

type HoverLineProps = ExtractPublicPropTypes<
  InstanceType<typeof HoverLine>['$props']
>

const containerRef = shallowRef<HTMLElement>()
const hoverLineArr = shallowRef<HoverLineProps[]>([])
const direction = computed(() => {
  if (containerRef.value) {
    return getComputedStyle(containerRef.value).flexDirection
  }
  return 'none'
})

onMounted(() => {
  containerRef.value!.style.setProperty(
    `--${import.meta.env.VITE_cssPrefix}${-1}-move-width`,
    '0'
  )
  containerRef.value!.style.setProperty(
    `--${import.meta.env.VITE_cssPrefix}${-1}-move-height`,
    '0'
  )
})

const { width: containerW, height: containerH } = useElementSize(containerRef)

const containerWCssVar = `--${import.meta.env.VITE_cssPrefix}container-w`
const containerHCssVar = `--${import.meta.env.VITE_cssPrefix}container-h`

syncRef(useCssVar(containerWCssVar, containerRef), containerW, {
  transform: {
    ltr: (arg) => Number.parseFloat(arg) || 0,
    rtl: (arg) => `${arg}`,
  },
})
syncRef(useCssVar(containerHCssVar, containerRef), containerH, {
  transform: {
    ltr: (arg) => Number.parseFloat(arg) || 0,
    rtl: (arg) => `${arg}`,
  },
})

function getBounding(node?: HTMLElement) {
  if (!node) {
    return {
      width: 0,
      height: 0,
      minWidth: 0,
      minHeight: 0,
      maxWidth: Infinity,
      maxHeight: Infinity,
    }
  }
  const { width, height } = node.getBoundingClientRect()

  const tempFlex = node.style.flex
  node.style.setProperty(`flex`, `none`)

  const tempX = node.style.width
  const tempY = node.style.height

  node.style.setProperty(`width`, '0px')
  node.style.setProperty(`height`, '0px')
  const { width: minWidth, height: minHeight } = getComputedStyle(node)

  node.style.setProperty(`width`, '100%')
  node.style.setProperty(`height`, '100%')
  const { width: maxWidth, height: maxHeight } = getComputedStyle(node)

  node.style.setProperty(`width`, tempX)
  node.style.setProperty(`height`, tempY)
  node.style.setProperty(`flex`, tempFlex)

  return {
    width,
    height,
    minWidth: Number.parseFloat(minWidth.slice(0, -2)) || 0,
    minHeight: Number.parseFloat(minHeight.slice(0, -2)) || 0,
    maxWidth: Number.parseFloat(maxWidth.slice(0, -2)) || Infinity,
    maxHeight: Number.parseFloat(maxHeight.slice(0, -2)) || Infinity,
  }
}

function nodes2hoverLineArr(nodes?: HTMLCollection): HoverLineProps[] {
  let left = 0
  let top = 0

  const arr = Array.from(nodes ?? [])
    .filter((node): node is HTMLElement => node instanceof HTMLElement)
    .map((node, i, nodeList) => {
      const nextNode = nodeList[i + 1]
      const rect = node.getBoundingClientRect()

      if (direction.value === 'column') {
        top += rect.height
      } else {
        left += rect.width
      }
      let scope: EffectScope
      const lastWidthCssVar = `--${import.meta.env.VITE_cssPrefix}${
        i - 1
      }-move-width`
      const lastHeightCssVar = `--${import.meta.env.VITE_cssPrefix}${
        i - 1
      }-move-height`

      const moveWidthCssVar = `--${
        import.meta.env.VITE_cssPrefix
      }${i}-move-width`
      const moveHeightCssVar = `--${
        import.meta.env.VITE_cssPrefix
      }${i}-move-height`

      const selfWidthCssVar = `--${
        import.meta.env.VITE_cssPrefix
      }${i}-self-width`
      const selfHeightCssVar = `--${
        import.meta.env.VITE_cssPrefix
      }${i}-self-height`

      const selfWidth = useCssVar(selfWidthCssVar, containerRef)
      const selfHeight = useCssVar(selfHeightCssVar, containerRef)

      selfWidth.value = `${rect.width}`
      selfHeight.value = `${rect.height}`

      nextTick(() => {
        containerRef.value!.style.setProperty(moveWidthCssVar, '0')
        containerRef.value!.style.setProperty(moveHeightCssVar, '0')
        watchEffect(() => {
          node.style.setProperty(
            'width',
            direction.value === 'column'
              ? '100%'
              : `calc((var(${moveWidthCssVar}) + var(${selfWidthCssVar}) - var(${lastWidthCssVar})) / var(${containerWCssVar}) * 100% )`
          )
          node.style.setProperty(
            'height',
            direction.value === 'column'
              ? `calc((var(${moveHeightCssVar}) + var(${selfHeightCssVar}) - var(${lastHeightCssVar})) / var(${containerHCssVar}) * 100% )`
              : '100%'
          )
        })
      })
      let minX = 0
      let minY = 0
      let maxX = 0
      let maxY = 0

      return {
        direction: direction.value === 'column' ? 'row' : 'column',
        hoverable: true,
        style:
          direction.value === 'column'
            ? {
                left: `${left}px`,
                top: `calc(${top}px - var(--thickness) / 2)`,
              }
            : {
                left: `calc(${left}px - var(--thickness) / 2)`,
                top: `calc(${top}px)`,
              },
        useDrag: {
          container: containerRef,
        },
        onDrag({ moveX, moveY, type }) {
          switch (type.value) {
            case 'dragstart': {
              const {
                width,
                height,
                minWidth,
                minHeight,
                maxWidth,
                maxHeight,
              } = getBounding(node)
              const {
                width: widthNext,
                height: heightNext,
                minWidth: minWidthNext,
                minHeight: minHeightNext,
                maxWidth: maxWidthNext,
                maxHeight: maxHeightNext,
              } = getBounding(nextNode)
              minY =
                Math.max(minHeight - height, heightNext - maxHeightNext) +
                moveY.value
              maxY =
                Math.min(maxHeight - height, heightNext - minHeightNext) +
                moveY.value
              minX =
                Math.max(minWidth - width, widthNext - maxWidthNext) +
                moveX.value
              maxX =
                Math.min(maxWidth - width, widthNext - minWidthNext) +
                moveX.value

              scope = effectScope()

              scope.run(() => {
                syncRef(useCssVar(moveWidthCssVar, containerRef), moveX, {
                  transform: {
                    ltr: (arg) => Number.parseFloat(arg) || 0,
                    rtl: (arg) => `${arg}`,
                  },
                })
                syncRef(useCssVar(moveHeightCssVar, containerRef), moveY, {
                  transform: {
                    ltr: (arg) => Number.parseFloat(arg) || 0,
                    rtl: (arg) => `${arg}`,
                  },
                })
              })

              break
            }
            case 'dragend': {
              scope?.stop()
              break
            }
            case 'dragging':
            default:
              if (direction.value === 'column') {
                moveX.value = 0

                if (moveY.value < minY) {
                  moveY.value = minY
                }
                if (moveY.value > maxY) {
                  moveY.value = maxY
                }
              } else {
                moveY.value = 0

                if (moveX.value < minX) {
                  moveX.value = minX
                }
                if (moveX.value > maxX) {
                  moveX.value = maxX
                }
              }
          }
        },
      } satisfies HoverLineProps
    })
  arr.pop()
  return arr
}
let scope: EffectScope
function reset() {
  scope?.stop()
  scope = effectScope()
  scope.run(() => {
    hoverLineArr.value = nodes2hoverLineArr(containerRef.value!.children)
  })
}

onMounted(() => {
  const { width, height } = useElementSize(containerRef)
  watch([direction, width], () => {
    if (direction.value !== 'column') {
      reset()
    }
  })
  watch([direction, height], () => {
    if (direction.value === 'column') {
      reset()
    }
  })
})

useMutationObserver(containerRef, reset, { childList: true })
</script>

<style>
@layer split {
  .split-box {
    --thickness: 5px;
  }

  .split-box :has(.hover-line:active) {
    user-select: none;
  }
}
</style>
