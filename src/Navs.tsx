import React from 'react';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Sidebar from '@/components/Sidebar';
import MainScreen from '@/screens/Main';
import DetailsScreen from '@/screens/Details';

export type HomeDrawerParamList = {
  Main: {};
};

export type RootStackParamsList = {
  Home: NavigatorScreenParams<HomeDrawerParamList>;
  Detail: {
    noteId: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamsList>();
const Drawer = createDrawerNavigator<HomeDrawerParamList>();

const Home = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{
        drawerType: 'back',
        swipeEdgeWidth: 200,
      }}
      drawerContent={props => <Sidebar {...props} />}>
      <Drawer.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

const Navigations = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigations;
