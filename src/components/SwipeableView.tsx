import React, {
  FC,
  forwardRef,
  memo,
  ReactNode,
  useCallback,
  useImperativeHandle
} from 'react'
import { Dimensions } from 'react-native'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps
} from 'react-native-gesture-handler'
import {
  interpolate,
  runOnJS,
  SharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { Box } from '@/atoms'
import AnimatedBox, { AnimatedBoxProps } from '@/atoms/animated-box'

type SwipeLeftCallback = () => any

interface BackViewProps {
  progress: Readonly<SharedValue<number>>
}

interface IProps
  extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'>,
    AnimatedBoxProps {
  children: ReactNode
  backView?: ReactNode | FC<BackViewProps>
  onSwipeLeft?: (conceal: SwipeLeftCallback) => any
  revealed?: boolean
}

interface SwipeableViewHandle {
  conceal: () => void
}

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const SWIPE_THREASHOLD = -0.2

const SwipeableView = forwardRef<SwipeableViewHandle, IProps>((props, ref) => {
  const { children, backView, onSwipeLeft, simultaneousHandlers, ...boxProps } =
    props
  const translateX = useSharedValue(0)

  const invokeSwipeLeft = useCallback(() => {
    if (onSwipeLeft) {
      onSwipeLeft(() => {
        translateX.value = withTiming(0)
      })
    }
  }, [onSwipeLeft])

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      const x = interpolate(event.translationX, [-SCREEN_WIDTH, 0], [-1, 0])
      translateX.value = Math.max(-1, Math.min(0, x))
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < SWIPE_THREASHOLD
      if (shouldBeDismissed) {
        translateX.value = withTiming(-1)
        runOnJS(invokeSwipeLeft)()
      } else {
        translateX.value = withTiming(0)
      }
    }
  })

  const facadeStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(translateX.value, [-1, 0], [-SCREEN_WIDTH, 0])
      }
    ]
  }))

  const progress = useDerivedValue(() => {
    return interpolate(
      Math.max(translateX.value, SWIPE_THREASHOLD),
      [-0.2, 0],
      [1, 0]
    )
  })

  useImperativeHandle(ref, () => ({
    conceal: () => {
      translateX.value = withTiming(0)
    }
  }))

  return (
    <AnimatedBox {...boxProps}>
      {backView && (
        <Box position="absolute" left={0} right={0} top={0} bottom={0}>
          {typeof backView === 'function' ? backView({ progress }) : backView}
        </Box>
      )}
      <PanGestureHandler
        activeOffsetX={[-5, 1000]}
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGesture}
      >
        <AnimatedBox style={facadeStyle}>{children}</AnimatedBox>
      </PanGestureHandler>
    </AnimatedBox>
  )
})

export default memo(SwipeableView)
