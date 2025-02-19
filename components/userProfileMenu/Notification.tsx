// screens/Notification.tsx

import React, { useState } from 'react';
import {  View, Text, Image, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import OptionsList from '../../utils/OptionsList';
import { useNavigation } from '@react-navigation/native';

  
const Notification = () => {
  const navigation = useNavigation();
  
  const handleGoBack = () => {
    navigation.goBack();  // This goes back to the previous screen in the stack
  };
  
return (
  <View style={{ height: "100%", flexDirection: 'column' }}>
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleGoBack}>
        <Image source={require('../../assets/images/back.png')}  />
      </TouchableOpacity>
      <Text style={styles.text}>Notification</Text>
    </View>
    <ScrollView style={{marginTop:10}}>
      <View style={{marginLeft:20, marginRight:20}}>
        {/* Table Header */}
        <OptionsList content={['Create', 'Schedule', 'Status', 'Delete']} title="Bot" notificationType="Bot Notification" image1={require('../../assets/images/robo_bolt.png')} backgroundColor="white" />

        <OptionsList title="Paper Trade" notificationType="Paper Trade Notification" image1={require('../../assets/images/paper_trade.png')} backgroundColor="white" content={['Create', 'Schedule', 'Status', 'Delete']}/>

        <OptionsList title="Backtest" notificationType="Backtext Notification" image1={require('../../assets/images/paper_trade.png')} backgroundColor="white" content={['Backtext Notification']}/>

        <OptionsList title="Account" notificationType="Account Notification" image1={require('../../assets/images/robo_bolt.png')} backgroundColor="white" content={['New device login', 'Password change', 'Mobile number change', 'Email change']}/>

        <OptionsList title="Walet" notificationType="Wallet Notification" image1={require('../../assets/images/wallet_focus.png')} backgroundColor="white" content={['Reacharge','Withdrawal', 'Deposite', 'Trade']}/>

      </View>
    </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:50,
    backgroundColor: 'white',
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    borderRadius: 5,
    flexDirection: 'row', // Aligns image and text horizontally
    alignItems: 'center', // Center aligns both image and text vertically
  },
  button: {
    flexDirection: 'row', // Aligns image and text horizontally
    alignItems: 'center', // Center aligns both image and text vertically
    backgroundColor: 'white', // Button background color
    height:50,
    marginLeft:10,
  },
  text: {
    color: 'black', // Text color
    fontSize: 16,   // Text font size
    marginLeft : 10 ,
  },
});

export default Notification;
