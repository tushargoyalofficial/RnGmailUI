import React, { FC, memo, useCallback } from 'react';
import { FlatList, FlatListProps } from 'react-native';
import { Book } from '@/models';
import { Theme } from '@/themes';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { ColorProps, createBox } from '@shopify/restyle';
import BookListItem from './BookListItem';
import BOOKS from '@/fixtures/books';

const StyledFlatList = createBox<Theme, FlatListProps<Book>>(FlatList);
const StyledBottomSheetFlatList = createBox<Theme, FlatListProps<Book>>(
  BottomSheetFlatList,
);

type IProps = {
  inBottomSheet?: boolean;
  onPressItem: (bookId: string) => void;
  headerComponent?: FC<any>;
} & ColorProps<Theme>;

const BookList: FC<IProps> = ({
  onPressItem,
  headerComponent,
  color,
  inBottomSheet,
}) => {
  const renderItem = useCallback(
    ({ item }) => {
      return <BookListItem {...item} onPress={onPressItem} color={color} />;
    },
    [onPressItem],
  );

  const ListComponent = inBottomSheet
    ? StyledBottomSheetFlatList
    : StyledFlatList;

  return (
    <ListComponent
      contentInsetAdjustmentBehavior="automatic"
      scrollEventThrottle={16}
      data={BOOKS}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      width="100%"
      pt="sm"
      ListHeaderComponent={headerComponent}
    />
  );
};

export default memo(BookList);
