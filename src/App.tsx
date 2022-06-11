import React, { FC, memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import Navigations from '@/Navs';
import light from '@/themes/light';

const App: FC = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <Navigations />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default memo(App);
