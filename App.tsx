/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  Alert,
  SafeAreaView,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import OtpScreen from './screens/OtpScreen';
import SignUpScreen from './screens/SignUpScreen';
import DrawerOverlay from './components/DrawerOverlay';
import Notification from './components/userProfileMenu/Notification';
import ActivityLogs from './components/userProfileMenu/ActivityLogs';
import Subscriptions from './components/userProfileMenu/Subscriptions';
import UserProfile from './components/userProfileMenu/UserProfile';
import { getAddress } from './utils/getAddress';
import Bot from './components/menu/Bot';
import BotSummary from './components/menu/BotSummary';
import BotBuyName from './components/menu/BotBuyName';
import BotPerformance from './components/menu/BotPerformance';
import LiveOrderBook from './components/menu/LiveOrderBook';



const App: React.FC = () => {
  const Stack = createStackNavigator();

  //getAddress();
  return (
    <SafeAreaView style={{ flex: 1 }} >
    <NavigationContainer>
     <Stack.Navigator initialRouteName="landing" >
     <Stack.Screen name="landing" component={LandingScreen} options={{ headerShown: false }} />
     <Stack.Screen name="login" component={LoginScreen}  options={{ headerShown: false }}/>
     <Stack.Screen name="otp" component={OtpScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="signup" component={SignUpScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="dashboard" component={DrawerOverlay}  options={{ headerShown: false }}/>
        <Stack.Screen name="notification" component={Notification}  options={{ headerShown: false }}/>
        <Stack.Screen name="activitylog" component={ActivityLogs}  options={{ headerShown: false }}/>
        <Stack.Screen name="subscription" component={Subscriptions}  options={{ headerShown: false }}/>
        <Stack.Screen name="userprofile" component={UserProfile}  options={{ headerShown: false }}/>
        <Stack.Screen name="bot" component={Bot}  options={{ headerShown: false }}/>
        <Stack.Screen name="botsummary" component={BotSummary}  options={{ headerShown: false }}/>
        <Stack.Screen name="botbuyname" component={BotBuyName}  options={{ headerShown: false }}/>
        <Stack.Screen name="botperformance" component={BotPerformance}  options={{ headerShown: false }}/>
        <Stack.Screen name="liveorderbook" component={LiveOrderBook}  options={{ headerShown: false }}/>
        
      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};



export default App;
