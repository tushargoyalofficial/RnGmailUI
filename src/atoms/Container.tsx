import React, { FC } from 'react'
import { BoxProps } from '@shopify/restyle'
import { Theme } from '@/themes'
import Box from './box'

const Container: FC<BoxProps<Theme>> = props => (
  <Box flex={1} bg="$background" {...props}>
    {props.children}
  </Box>
)

export default Container
