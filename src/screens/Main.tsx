import React, { FC, memo } from 'react';
import { Box, Text } from '@/atoms';

const MainScreen: FC = () => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text>Main Screen!</Text>
    </Box>
  );
};

export default memo(MainScreen);
