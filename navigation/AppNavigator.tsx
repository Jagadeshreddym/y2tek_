// AppNavigator.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../components/Home';
import DetailsScreen from '../components/menu/Menu';

// Define the type for the Stack Navigator
type RootStackParamList = {
  Home: undefined; // 'Home' screen takes no params
  Details: { itemId: number }; // 'Details' screen takes an itemId as a parameter
};

// Create a stack navigator
const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
