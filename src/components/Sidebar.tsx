import React, { FC, memo, useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Box, Text } from '@/atoms';
import BookList from './BookList';

const Sidebar: FC<DrawerContentComponentProps> = ({ navigation }) => {
  const handleBookListItemPress = useCallback(() => {
    navigation.closeDrawer();
  }, [navigation]);

  return (
    <Box flex={1} bg="$sidebarBackground">
      <SafeAreaView>
        <Text variant="sidebar" m="lg">
          Home
        </Text>
      </SafeAreaView>
      <BookList onPressItem={handleBookListItemPress} />
    </Box>
  );
};

export default memo(Sidebar);
