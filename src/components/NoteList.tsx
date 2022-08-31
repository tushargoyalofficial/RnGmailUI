import React, {FC, memo, useCallback} from 'react';
import {
  FlatListProps,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import Animated, {AnimateProps} from 'react-native-reanimated';
import {createBox} from '@shopify/restyle';
import {Theme} from '@/themes';
import {Note} from '@/models';
import NoteListItem from './NoteListItem';
import NOTES from '@/fixtures/notes';
import {Box} from '@/atoms';

const StyledFlatList = createBox<Theme, AnimateProps<FlatListProps<Note>>>(
  Animated.FlatList,
);

interface IProps {
  contentInsetTop: number;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onItemPress: (noteId: string) => void;
  onItemSwipeLeft: (noteId: string, cancel: () => void) => void;
}

const NoteList: FC<IProps> = ({
  onScroll,
  contentInsetTop,
  onItemPress,
  onItemSwipeLeft,
}) => {
  const renderItem = useCallback(
    ({item}) => {
      return (
        <NoteListItem
          {...item}
          onPress={onItemPress}
          onSwipeLeft={onItemSwipeLeft}
        />
      );
    },
    [onItemPress, onItemSwipeLeft],
  );

  return (
    <StyledFlatList
      contentInsetAdjustmentBehavior="automatic"
      data={NOTES}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      width="100%"
      onScroll={onScroll}
      scrollEventThrottle={16}
      ListHeaderComponent={<Box width="100%" height={contentInsetTop} />}
    />
  );
};

export default memo(NoteList);
