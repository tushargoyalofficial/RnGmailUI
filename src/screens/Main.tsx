import React, { FC, memo, useCallback } from 'react';
import { Box, Container, Text, TouchableOpacity } from '@/atoms';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { HomeDrawerParamList, RootStackParamsList } from '@/Navs';

import NoteList from '@/components/NoteList';
import HeaderBar from '@/components/HeaderBar';
import FeatherIcon from '@/components/Icon';

type IProps = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamsList>
>;

const MainScreen: FC<IProps> = ({ navigation }) => {
  const handleSidebarToggle = useCallback(() => {
    navigation.toggleDrawer();
  }, []);

  return (
    <Container justifyContent="center" alignItems="center">
      <NoteList />
      <HeaderBar>
        <TouchableOpacity
          m="xs"
          p="xs"
          rippleBorderLess
          onPress={handleSidebarToggle}>
          <FeatherIcon name="menu" size={22} />
        </TouchableOpacity>
        <Box flex={1} alignItems="center">
          <Text fontWeight="bold">All Notes</Text>
        </Box>
        <TouchableOpacity m="xs" p="xs" rippleBorderLess>
          <FeatherIcon name="more-vertical" size={22} />
        </TouchableOpacity>
      </HeaderBar>
    </Container>
  );
};

export default memo(MainScreen);
