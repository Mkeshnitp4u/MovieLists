// In App.js in a new project

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screen/container/login/Login';
import Signup from '../Screen/container/register/SignUp';
import OTPScreen from '../Screen/container/otp/OTPScreen';
import Dashboard from '../Screen/container/tabs/Dashboard';
import DetailScreen from "../Screen/container/cardDetail/Detail"

import SplashScreen from '../../Splash'

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
        initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen
          name="Tabs"
          component={Dashboard}
          options={{
            headerTitle: "Movie List",
            headerLeft: () => { }
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
