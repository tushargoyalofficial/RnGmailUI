import React, { FC, memo } from 'react';
import { Container } from '@/atoms';

import NoteList from '@/components/NoteList';
import HeaderBar from '@/components/HeaderBar';
import FeatherIcon from '@/components/Icon';

const MainScreen: FC = () => {
  return (
    <Container justifyContent="center" alignItems="center">
      <NoteList />
      <HeaderBar>
        <FeatherIcon name="more-vertical" size={22} />
      </HeaderBar>
    </Container>
  );
};

export default memo(MainScreen);
