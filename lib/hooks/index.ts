import {
  Fn,
  MaybeComputedElementRef,
  createEventHook,
  syncRef,
  tryOnMounted,
  unrefElement,
  useCssVar,
  useEventListener,
} from '@vueuse/core'
import { Ref } from 'vue'

export interface useDragEventOptions {
  container?: MaybeComputedElementRef
}

type DragEventType = 'dragging' | 'dragstart' | 'dragend'

export function useDragEvent(
  target: MaybeComputedElementRef,
  { container = document.body }: useDragEventOptions = {}
) {
  let cleanup: Fn = () => {
    console.warn('该监听函数还未创建，请在mounted之后再调用')
  }
  const type = ref<DragEventType>('dragstart')
  const moveX = ref(0)
  const moveY = ref(0)
  const { on, trigger } = createEventHook<{
    moveX: Ref<number>
    moveY: Ref<number>
    type: Ref<DragEventType>
  }>()
  tryOnMounted(() => {
    const targetElement = unrefElement(target)!
    console.assert(!!targetElement, 'target element is not found')

    const initX = getComputedStyle(targetElement).left

    const initY = getComputedStyle(targetElement).top
    const containerElement = unrefElement(container)!
    const leftCssVar = `--${import.meta.env.VITE_cssPrefix}left`
    const topCssVar = `--${import.meta.env.VITE_cssPrefix}top`
    syncRef(useCssVar(leftCssVar, targetElement), moveX, {
      transform: {
        ltr: (left) => Number.parseFloat(left) || 0,
        rtl: (right) => `${right}`,
      },
    })
    syncRef(useCssVar(topCssVar, targetElement), moveY, {
      transform: {
        ltr: (left) => Number.parseFloat(left) || 0,
        rtl: (right) => `${right}`,
      },
    })
    moveX.value = 0
    moveY.value = 0

    targetElement.style.setProperty(
      'left',
      `calc(var(${leftCssVar}) * 1px + ${initX})`
    )
    targetElement.style.setProperty(
      'top',
      `calc(var(${topCssVar}) * 1px + ${initY})`
    )
    let left = 0
    let top = 0

    cleanup = useEventListener(
      targetElement,
      'mousedown',
      (downEvent: MouseEvent) => {
        type.value = 'dragstart'
        trigger({ moveX, moveY, type })
        const cleanupMove = useEventListener(
          containerElement,
          'mousemove',
          (moveEvent: MouseEvent) => {
            type.value = 'dragging'
            moveX.value = moveEvent.x - downEvent.x + left
            moveY.value = moveEvent.y - downEvent.y + top
            trigger({ moveX, moveY, type })
          }
        )

        const cleanupUp = useEventListener(['mouseup', 'mouseleave'], () => {
          type.value = 'dragend'
          trigger({ moveX, moveY, type })
          left = moveX.value
          top = moveY.value
          cleanupMove()
          cleanupUp()
        })
      }
    )
  })
  return {
    cleanup,
    onDrag: on,
    moveX,
    moveY,
  }
}
