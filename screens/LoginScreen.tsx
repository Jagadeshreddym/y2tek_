import React, { useEffect,useState } from 'react';
import GetLocation from 'react-native-get-location'
import { View, Button, Text, StyleSheet, TextInput, Alert ,TouchableOpacity,Image,ScrollView, ActivityIndicator} from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { useNavigation } from '@react-navigation/native';
import { getData, getDataAfterLogInValidated, postData } from '../api/AuthService';
import DeviceInfo from 'react-native-device-info';
import * as RNLocalize from 'react-native-localize';
import Geolocation from 'react-native-geolocation-service';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { getAddress } from '../utils/getAddress';
import AsyncStorage from '@react-native-async-storage/async-storage';  // Correct import


const LoginScreen = ({navigation}) => {
    // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');




  const gatherDeviceInfo = async () => {
    try {
      setLoading(true);
      setError('');
      //getAddress();
      // Get Public IP address (using ipify API)
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipResponse.json();
      const ipAddress = ipData.ip;
      
      // Get Timezone
      const timeZone = RNLocalize.getTimeZone();

      // Get OS and OS Version
      const os = DeviceInfo.getSystemName();  // e.g., "Android" or "iOS"
      // Get Country Code
      const countryCode = RNLocalize.getCountry();

      try {

        const loginData = {
          "email":email,
          "password":password,
          "browser":"Safari 17.5",
          "os":os,
          "deviceType":"mobile",
          "ipAddress":ipAddress,
          "timeZone":timeZone,
          "location":"2nd Cross Road, Bengaluru Urban, Gandhipura -",
          "countryCode":countryCode
        };
        console.log('loginData', loginData);
        const response = await postData('login', loginData);  // Get posts from API
        console.log(response);
        getOTP();
        setData(response);
      } catch (err) {
        setError('Failed to fetch data');
        //navigation.navigate('otp');
      } finally {
        setLoading(false);
      }

      // Get Location (latitude and longitude)
    
    } catch (error) {
      console.error('Error gathering device info:', error);
     
    }
  };

  const getOTP = async () => {
    try {
      setLoading(true);
      setError('');
      const userName =  (await AsyncStorage.getItem('userName'));

      try {
        const response = await getDataAfterLogInValidated('user/'+userName + '/generateOtp?onEmail=true');  // Get posts from API
        console.log(response);
        navigation.navigate('otp');
        setData(response);
      } catch (err) {
        setError('Failed to fetch data');
        //navigation.navigate('otp');
      } finally {
        setLoading(false);
      }

      // Get Location (latitude and longitude)
    
    } catch (error) {
      console.error('Error gathering device info:', error);
     
    }
  };


  // Sign-up function (For now, just shows an alert with the form values)
  const handleSignIn = () => {
    if (email && password) {
      // You can replace this with your sign-up logic
      gatherDeviceInfo();
    } else {
      Alert.alert('Error', 'Please fill out all fields.');
    }
  };

  // Regex for email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateEmail = (email) => {
    if (emailRegex.test(email)) {
      setError(''); // Clear error if valid
      return true;
    } else {
      setError('Please enter a valid email address.');
      return false;
    }
  };

  const validatePassword = (password) => {
    // Regex explanation:
    // (?=.*[A-Z]) - At least one uppercase letter.
    // (?=.*[!@#$%^&*]) - At least one special character.
    // .{8,} - Minimum length of 8 characters.
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };
  

  const handleSubmit = () => {
    if (validateEmail(email) ) {
      if(validatePassword(password))
      {
        handleSignIn();
      }else{
        Alert.alert('Please enter a valid Password.');
      }
    } else {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
      })
        .then(location => {
          Alert.alert('Fetching location');
          console.log(location);
        })
        .catch(error => {
          const { code, message } = error;
          console.warn(code, message);
        })
     // Alert.alert('Please enter a valid email address.');
    }
  };

  

  return (
    <View style={{flexDirection:'column',flex:1}}>
    <Image source={require('../assets/images/frame.png')} style={{height:'30%', width:'100%'}}/>
     <ScrollView style={styles.box}>
     <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <Text style={{fontSize: 32, marginTop:10, marginBottom:10, justifyContent:'flex-start'}}>Welcome Back</Text>
      <Text style={{fontSize: 20, marginBottom:10,textAlign:'left'}}>Please login below</Text>
      
      
      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email ID/Phone Number"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signupButton} onPress={handleSubmit}>
            <Text style={styles.buttonTextSignUP}>Sign In</Text>
        </TouchableOpacity>

        <Text style={{fontSize: 15, marginBottom:10,textAlign:'left', marginTop:10}}>Forgot your password?</Text>
      

        <View style={{flexDirection:'row',marginTop:10}}>
          <View style={styles.divider}></View>
          <Text style={{fontSize: 20, marginLeft:10,marginRight:10,textAlign:'left', color:'#A4A9AB'}}>Or sign in with</Text>
          <View style={styles.divider}></View>
        </View>
    
        <View style= {{flexDirection : "row", marginTop:10}}>
                {/* Google Sign-In Button */}
                <TouchableOpacity style={styles.button}>
                    <Image
                    source={require('../assets/images/google.png')}
                    style={styles.buttonImage}
                    />
                    <Text style={styles.buttonText}>Google</Text>
                </TouchableOpacity>
                {/* Facebook Sign-In Button */}
                <TouchableOpacity style={styles.button} >
                    <Image
                    source={require('../assets/images/facebook.png')}
                    style={styles.buttonImage}
                    />
                    <Text style={styles.buttonText}>Facebook</Text>
                </TouchableOpacity>
    
        </View>

        <View style= {{flexDirection : "row", marginTop:10}}>
                {/* Google Sign-In Button */}
                <Text style={{marginTop:23}}>Don't have an account ?</Text>
                {/* Facebook Sign-In Button */}
                <TouchableOpacity style={styles.signinButton} >
                    <Text style={styles.buttonTextWithoutImage}>Get started</Text>
                </TouchableOpacity>
    
        </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
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
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fffff',
    padding: 10,
    margin: 10,
    width:'40%',
    borderRadius: 5,
    borderWidth: 1,         // Border thickness
    borderColor: 'black',
    textAlign:'center'
  },
  buttonImage: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    color: '#333333',
    fontSize: 16,
  },
  buttonTextWithoutImage: {
    color: '#333333',
    fontSize: 16,
    textAlign:'center'
  },
  buttonTextSignUP: {
    color: '#fff',               // Text color (white)
    fontSize: 16,                // Font size
    fontWeight: 'bold', 
  },
  divider: {
    width: '25%',         // Full width of the container
    height: 1,             // Height of the line
    backgroundColor: '#A4A9AB', // Color of the divider (black)
    marginVertical: 10, 
    marginTop:12,   // Space around the divider
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
  signinButton:{
    backgroundColor: '#fffff',  // Background color of the button
    borderRadius: 8,  
    marginTop:10,           // Rounded corners
    alignItems: 'center',        // Centers the text horizontally
    justifyContent: 'center',    // Centers the text vertically
    height: 40,
    width:'30%',
    marginLeft:15,
    borderWidth: 1,         // Border thickness
    borderColor: 'black'
  },
});

export default LoginScreen;
