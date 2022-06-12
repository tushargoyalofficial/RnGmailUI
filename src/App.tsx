import React, { FC, memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import light from '@/themes/light';
import Navigations from '@/Navs';
import StatusBar from '@/components/StatusBar';

const App: FC = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <StatusBar />
        <Navigations />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default memo(App);
