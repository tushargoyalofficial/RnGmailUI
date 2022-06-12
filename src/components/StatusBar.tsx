import React, { FC, memo } from 'react';
import { useTheme } from '@shopify/restyle';
import { StatusBar as NativeStatusBar } from 'react-native';
import { Theme } from '@/themes';

const StatusBar: FC = () => {
  const theme = useTheme<Theme>();

  return (
    <NativeStatusBar
      animated
      backgroundColor={theme.colors.$windowBackground || 'white'}
      barStyle={theme.statusBar?.barStyle}
    />
  );
};

export default memo(StatusBar);
