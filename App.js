import React from 'react';

import { Login } from './src/screens/login';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/screens/home';
import { Collections } from './src/screens/collections';

import { DoCollection } from './src/screens/docollection';

import CustomDrawer from './src/components/CustomDrawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}

function NavStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Root"
        component={NavDrawer}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="Fazer Coleta"
        component={DoCollection}
      />
    </Stack.Navigator>
  );
}

function NavDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerLabelStyle: {
          color: '#265C7E',
          fontSize: 16,
          lineHeight: 22,
          marginLeft: 20,
        },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Coletas" component={Collections} />
    </Drawer.Navigator>
  );
}

export default App;
