import React, { FC, memo, ComponentProps } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { ColorProps, useResponsiveProp, useTheme } from '@shopify/restyle'
import { Theme } from '@/themes'

export type IIconProps = ComponentProps<typeof Feather>
type IProps = Omit<IIconProps, 'color'> & ColorProps<Theme>

const FeatherIcon: FC<IProps> = ({ color = '$foreground', ...rest }) => {
  const theme = useTheme<Theme>()
  const colorProp = useResponsiveProp(color)
  const vColor = theme.colors[colorProp || '$foreground']

  return <Feather {...rest} color={vColor} />
}

export default memo(FeatherIcon)
