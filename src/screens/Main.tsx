import React, { FC, memo } from 'react';
import { Container } from '@/atoms';
import NoteList from '@/components/NoteList';

const MainScreen: FC = () => {
  return (
    <Container justifyContent="center" alignItems="center">
      <NoteList />
    </Container>
  );
};

export default memo(MainScreen);
