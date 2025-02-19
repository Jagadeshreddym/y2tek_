// screens/DetailsScreen.tsx

import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import MenuScreen from '../MenuScreen';

const Menu = ({navigation}) => {
  
return (
  <SafeAreaView style={{ flex: 1 }}>
      <MenuScreen/>
  </SafeAreaView>
  );
};

export default Menu;
