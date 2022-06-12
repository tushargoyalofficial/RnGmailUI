import React, { FC, memo } from 'react';
import { SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { AnimatedBox, Box } from '@/atoms';
import FeatherIcon from '@/components/Icon';

interface IProps {
  progress: Readonly<SharedValue<number>>;
}

const NoteListItemActionView: FC<IProps> = ({ progress }) => {
  const iconStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: progress.value,
      },
    ],
  }));

  return (
    <Box
      flex={1}
      bg="$primary"
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-end"
      pr="xl">
      <AnimatedBox
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        style={iconStyle}>
        <FeatherIcon name="folder" color="white" size={18} />
        <FeatherIcon name="arrow-right" color="white" size={12} />
      </AnimatedBox>
    </Box>
  );
};

export default memo(NoteListItemActionView);
