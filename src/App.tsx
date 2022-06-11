import React, { FC, memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from '@/Navs';

const App: FC = () => {
  return (
    <NavigationContainer>
      <Navigations />
    </NavigationContainer>
  );
};

export default memo(App);
