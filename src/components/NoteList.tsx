import React, { FC, memo, useCallback } from 'react';
import { FlatList, FlatListProps } from 'react-native';
import { createBox } from '@shopify/restyle';
import { Theme } from '@/themes';
import { Note } from '@/models';
import NoteListItem from './NoteListItem';
import NOTES from '@/fixtures/notes';

const StyledFlatList = createBox<Theme, FlatListProps<Note>>(FlatList);

interface IProps { }

const NoteList: FC<IProps> = () => {
  const renderItem = useCallback(({ item }) => {
    return <NoteListItem {...item} />;
  }, []);

  return (
    <StyledFlatList
      contentInsetAdjustmentBehavior="automatic"
      data={NOTES}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      width="100%"
    />
  );
};

export default memo(NoteList);
