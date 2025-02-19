import React, { useState } from 'react';
import { View,  Text, StyleSheet,TouchableOpacity,Image,ScrollView} from 'react-native';
import { getData } from '../api/AuthService';

const LandingScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
 // Function to load data from API
 const loadData = async () => {
  setLoading(true);
  setError('');
  try {
    const response = await getData('Jagadeshrm/userNameExists');  // Get posts from API
    console.log(response);
    


    navigation.navigate('login')
    setData(response);
  } catch (err) {
    setError('Failed to fetch data');
  } finally {
    setLoading(false);
  }
};


  return (
    <View style={{flexDirection:'column',flex:1}} >
    <Image source={require('../assets/images/frame.png')} style={{height:'25%', width:'100%'}}/>
     <ScrollView style={styles.box}>
     <View style={styles.container}>
     
     <Image source={require('../assets/images/landing_screen.png')} style={{ width:'100%'}}/>
    <Text style={{fontSize: 20, marginTop:10, marginBottom:10, textAlign:'center'}}>Transforming Transactions, Empowering Portfolios</Text>
    <Text style={{fontSize: 16, marginBottom:10,textAlign:'center', fontFamily: 'League Spartan', color:'#6C5DD3' }}>Experience Crypto Excellence with Our App.</Text>
        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signupButton} onPress={loadData}>
            <Text style={styles.buttonTextSignUP}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signinButton} onPress={()=>  navigation.navigate('signup')}>
            <Text style={styles.buttonTextSignIn}>Sign Up</Text>
        </TouchableOpacity>

        </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderTopStartRadius: 10,
    borderTopEndRadius:10,
    marginTop:10,
  },
  
  signupButton:{
    backgroundColor: '#6C5DD3',  // Background color of the button
    paddingVertical: 12,         // Vertical padding for the button
    paddingHorizontal: 20,       // Horizontal padding for the button
    borderRadius: 8,             // Rounded corners
    alignItems: 'center',        // Centers the text horizontally
    justifyContent: 'center',    // Centers the text vertically
    height: 50,
    width:'100%'
  },
  signinButton:{
    backgroundColor: '#fffff',  // Background color of the button
    paddingVertical: 12,         // Vertical padding for the button
    paddingHorizontal: 20,       // Horizontal padding for the button
    borderRadius: 8,  
    marginTop:10,           // Rounded corners
    alignItems: 'center',        // Centers the text horizontally
    justifyContent: 'center',    // Centers the text vertically
    height: 50,
    width:'100%',
    borderWidth: 1,         // Border thickness
    borderColor: 'black'
  },
  buttonTextSignUP: {
    color: '#fff',               // Text color (white)
    fontSize: 16,                // Font size
    fontWeight: 'bold', 
  },
  buttonTextSignIn: {
    color: '#000000',               // Text color (white)
    fontSize: 16,                // Font size
    fontWeight: 'bold', 
  },
  box: {
    width: '100%',
    height: '50%',
    backgroundColor: '#9787f4',
    borderRadius: 10,
    marginTop:-20,
    // iOS shadow properties
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Offset of the shadow
    shadowOpacity: 0.3, // Transparency of the shadow
    shadowRadius: 6, // Blur radius of the shadow
    // Android elevation property
    elevation: 5,
  },
});

export default LandingScreen;
