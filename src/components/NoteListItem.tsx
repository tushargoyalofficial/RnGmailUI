import React, { FC, memo } from 'react';
import { Box, Text } from '@/atoms';
import { Note } from '@/models';

export interface IListItemProps extends Note { }

const NoteListItem: FC<IListItemProps> = props => {
  return (
    <Box bg="$background">
      <Box bg="$background" px="lg" py="sm">
        <Text ellipsizeMode="tail" numberOfLines={1} fontWeight="bold" mb="xs">
          {props.title}
        </Text>
        <Text
          ellipsizeMode="tail"
          numberOfLines={2}
          fontSize={14}
          opacity={0.7}>
          {props.body}
        </Text>
      </Box>
    </Box>
  );
};

export default memo(NoteListItem);
