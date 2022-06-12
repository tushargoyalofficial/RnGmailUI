import React, { FC, memo, useCallback, useRef } from 'react';
import { Box, Container, Text, TouchableOpacity } from '@/atoms';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { HomeDrawerParamList, RootStackParamsList } from '@/Navs';
import useStickyHeader from '@/hooks/use-sticky-header';

import NoteList from '@/components/NoteList';
import HeaderBar from '@/components/HeaderBar';
import FeatherIcon from '@/components/Icon';
import MoveNoteSheet from '@/components/MoveNoteSheet';

type IProps = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamsList>
>;

const MainScreen: FC<IProps> = ({ navigation }) => {
  const refMoveNoteSheet = useRef<MoveNoteSheet>(null);
  const { handleNoteListLayout, handleScroll, headerBarStyle, headerBarHeight } =
    useStickyHeader();

  const handleSidebarToggle = useCallback(() => {
    navigation.toggleDrawer();
  }, []);

  const handleNoteListItemPress = useCallback((_noteId: string) => {
    //TODO: Later
  }, []);

  const handleNoteListItemSwipeLeft = useCallback(
    (_noteId: string, _conceal: () => void) => {
      const { current: menu } = refMoveNoteSheet;
      if (menu) {
        menu.show();
      }
    },
    [],
  );

  return (
    <Container justifyContent="center" alignItems="center">
      <NoteList
        contentInsetTop={headerBarHeight}
        onScroll={handleScroll}
        onItemPress={handleNoteListItemPress}
        onItemSwipeLeft={handleNoteListItemSwipeLeft}
      />
      <HeaderBar style={headerBarStyle} onLayout={handleNoteListLayout}>
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
      <MoveNoteSheet ref={refMoveNoteSheet} />
    </Container>
  );
};

export default memo(MainScreen);
