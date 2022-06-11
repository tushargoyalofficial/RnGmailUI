import React, { FC, memo } from 'react';
import { Box, Container, Text, TouchableOpacity } from '@/atoms';

import NoteList from '@/components/NoteList';
import HeaderBar from '@/components/HeaderBar';
import FeatherIcon from '@/components/Icon';

const MainScreen: FC = () => {
  return (
    <Container justifyContent="center" alignItems="center">
      <NoteList />
      <HeaderBar>
        <TouchableOpacity m="xs" p="xs" rippleBorderLess>
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
