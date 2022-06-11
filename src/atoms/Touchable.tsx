import React, { FC, memo } from 'react';
import Pressable, { PressableProps } from './pressable';
import { Platform } from 'react-native';
import {
  composeRestyleFunctions,
  BackgroundColorProps,
  BackgroundColorShorthandProps,
  BorderProps,
  OpacityProps,
  backgroundColorShorthand,
  backgroundColor,
  opacity,
  ResponsiveValue,
  useRestyle,
  useResponsiveProp,
  useTheme,
  border,
} from '@shopify/restyle';
import { Theme } from '@/themes';

type IRestyleProps = BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  BorderProps<Theme> &
  OpacityProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, IRestyleProps>([
  backgroundColorShorthand,
  backgroundColor,
  border,
  opacity,
]);

interface IProps extends PressableProps {
  pressed?: IRestyleProps;
  rippleColor?: ResponsiveValue<keyof Theme['colors'], Theme>;
  rippleBorderLess?: boolean;
}

const Touchable: FC<IProps> = ({
  pressed,
  rippleColor,
  rippleBorderLess,
  style,
  ...rest
}) => {
  const { style: pressedStyle } = pressed
    ? useRestyle(restyleFunctions, pressed)
    : { style: undefined };

  const theme = useTheme<Theme>();
  const rippleColorProp = rippleColor && useResponsiveProp(rippleColor);
  const rippleColorValue = rippleColorProp && theme.colors[rippleColorProp];

  return (
    <Pressable
      {...rest}
      android_ripple={{ color: rippleColorValue, borderless: rippleBorderLess }}
      // @ts-ignore
      style={({ pressed: isPressed }) =>
        isPressed ? [style, pressedStyle] : style
      }
    />
  );
};

export const TouchableOpacity: React.FC<IProps> = props => (
  <Touchable
    rippleColor="$foreground"
    {...props}
    pressed={{ opacity: Platform.select({ ios: 0.6 }) }}
  />
);

export default memo(Touchable);
