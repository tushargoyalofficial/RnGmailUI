import React, { FC, memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

const Sidebar: FC<DrawerContentComponentProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Sidebar tsx file!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(Sidebar);
