import React, { FC, memo } from 'react';
import { SafeAreaView } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Box, Text } from '@/atoms';

const Sidebar: FC<DrawerContentComponentProps> = () => {
  return (
    <Box flex={1} bg="$sidebarBackground">
      <SafeAreaView>
        <Text variant="sidebar" m="lg">
          Home
        </Text>
      </SafeAreaView>
    </Box>
  );
};

export default memo(Sidebar);
