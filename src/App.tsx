import React, { FC, memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from './navs';

const App: FC = () => {
  return (
    <NavigationContainer>
      <Navigations />
    </NavigationContainer>
  );
};

export default memo(App);
