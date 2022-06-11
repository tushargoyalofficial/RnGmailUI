import React, { FC, memo } from 'react';
import { Container } from '@/atoms';

import NoteList from '@/components/NoteList';
import HeaderBar from '@/components/HeaderBar';

const MainScreen: FC = () => {
  return (
    <Container justifyContent="center" alignItems="center">
      <NoteList />
      <HeaderBar />
    </Container>
  );
};

export default memo(MainScreen);
