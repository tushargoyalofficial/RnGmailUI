import React, { FC, memo } from 'react';
import AnimatedBox, { AnimatedBoxProps } from '@/atoms/animated-box';
import { Bar } from '@/atoms';
import { Dimensions } from 'react-native';

const HeaderBar: FC<AnimatedBoxProps> = ({ children, ...rest }) => {
  const height = Dimensions.get('window').height;
  const topPosition = height * 0.02;

  return (
    <AnimatedBox
      position="absolute"
      top={topPosition}
      left={0}
      right={0}
      {...rest}>
      <Bar
        variant="headerBar"
        flexDirection="row"
        alignItems="center"
        mx="lg"
        my="md"
        px="sm"
        minHeight={44}>
        {children}
      </Bar>
    </AnimatedBox>
  );
};

export default memo(HeaderBar);
