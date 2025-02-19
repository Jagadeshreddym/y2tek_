// screens/DetailsScreen.tsx

import React from 'react';
import { View, Text, Image , ScrollView, Alert} from 'react-native';
import Card from '../utils/Card';
import { useNavigation } from '@react-navigation/native';

const MenuScreen: React.FC = ()  => {    
 const navigation = useNavigation();
 // Define the function in the parent
 const navigateMenu = () => {
  navigation.navigate('bot');
  //Alert.alert('Hello from Parent!', 'This alert was triggered by the parent component................');
};
  
return (
    <View>
        <View style = {{width:'100%', height: 100, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
        <Image source={require('../assets/images/menu_banner.png')} />
        </View>
        <ScrollView>
        <View style = {{padding:10}}>
        <Text>Services</Text>
        <View style={{padding:10}}>
          <Card title="Bot" image1={require('../assets/images/robo_bolt.png')} image2={require('../assets/images/navigation_arrow.png')} backgroundColor="white" isHeader={false} navigate={navigateMenu} />
          <Card title="Paper Trade" image1={require('../assets/images/paper_trade.png')} image2={require('../assets/images/navigation_arrow.png')}backgroundColor="white" isHeader={false} navigate={navigateMenu}/>
          <Card title="Backtest" image1={require('../assets/images/back_test.png')} image2={require('../assets/images/navigation_arrow.png')}backgroundColor="white" isHeader={false} navigate={navigateMenu}/>
          <Card title="Transactions" image1={require('../assets/images/transactions.png')} image2={require('../assets/images/navigation_arrow.png')}backgroundColor="white" isHeader={false} navigate={navigateMenu}/>
          </View>
          <Text >Help</Text>
          <View style={{padding:10}}>
          <Card title="Help Videos" image1={require('../assets/images/help_videos.png')} image2={require('../assets/images/navigation_arrow.png')}backgroundColor="white" isHeader={false} navigate={navigateMenu}/>
          <Card title="Support" image1={require('../assets/images/support.png')} image2={require('../assets/images/navigation_arrow.png')}backgroundColor="white" isHeader={false} navigate={navigateMenu}/>
          <Card title="Live Chat" image1={require('../assets/images/live_chat.png')} image2={require('../assets/images/navigation_arrow.png')}backgroundColor="white" isHeader={false} navigate={navigateMenu} />
        </View>
        </View>
        </ScrollView>
    </View>
  );
};

export default MenuScreen;