import React, { FC, memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.body1}>Main screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body1: {
    color: 'black',
    textAlign: 'center',
  },
});

export default memo(MainScreen);
