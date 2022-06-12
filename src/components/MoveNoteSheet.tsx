import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import RNBottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { Box, Text } from '@/atoms';
import BottomSheet from './BottomSheet';

interface IProps {
  onClose?: () => void;
}

interface IMoveNoteSheetHandle {
  show: () => void;
}

const MoveNoteSheet = forwardRef<IMoveNoteSheetHandle, IProps>(
  ({ onClose }, ref) => {
    const refBottomSheet = useRef<RNBottomSheet>(null);
    const snapPoints = useMemo(() => ['60%', '90%'], []);

    useImperativeHandle(ref, () => ({
      show: () => {
        const { current: bottomSheet } = refBottomSheet;
        if (bottomSheet) {
          bottomSheet.snapToIndex(0);
        }
      },
    }));

    return (
      <BottomSheet
        ref={refBottomSheet}
        index={-1}
        snapPoints={snapPoints}
        backdropComponent={props => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
          />
        )}
        detached
        bottomInset={46}
        enablePanDownToClose
        onClose={onClose}>
        <Box justifyContent="center" alignItems="center">
          <Text fontWeight="bold">Move Note Sheet Component</Text>
        </Box>
      </BottomSheet>
    );
  },
);

type MoveNoteSheet = IMoveNoteSheetHandle;
export default MoveNoteSheet;
