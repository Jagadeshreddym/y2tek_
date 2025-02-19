import React, { useEffect,useState } from 'react';
import { View, Button, Text, StyleSheet, TextInput, Alert ,TouchableOpacity,Image,ScrollView} from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

const SignUpScreen = ({navigation}) => {

    // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Sign-up function (For now, just shows an alert with the form values)
  const handleSignUp = () => {
    if (name && email && password) {
      // You can replace this with your sign-up logic
      Alert.alert('Sign Up', `Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
    } else {
      Alert.alert('Error', 'Please fill out all fields.');
    }
  };


//   useEffect(() => {
//     // Configure Google Sign-In
//     GoogleSignin.configure({
//       webClientId: 'YOUR_GOOGLE_WEB_CLIENT_ID', // From Google Console
//     });
//   }, []);

  // Google Sign-In function
//   const signInWithGoogle = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       console.log('Google user info:', userInfo);
//       // Handle user login here
//     } catch (error: any) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         console.log('Google Sign-In was cancelled');
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         console.log('Google Sign-In in progress');
//       } else {
//         console.log('Google Sign-In error:', error);
//       }
//     }
//   };

  // Facebook Sign-In function
//   const signInWithFacebook = async () => {
//     try {
//       const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
//       if (result.isCancelled) {
//         console.log('Facebook login was cancelled');
//       } else {
//         const data = await AccessToken.getCurrentAccessToken();
//         console.log('Facebook Access Token:', data?.accessToken);
//         // Handle user login here
//       }
//     } catch (error) {
//       console.log('Facebook login error:', error);
//     }
//   };

  return (
    <View style={{flexDirection:'column',flex:1}}>
    <Image source={require('../assets/images/frame.png')} style={{height:'30%', width:'100%'}}/>
     <ScrollView style={styles.box}>
     <View style={styles.container}>
      <Text style={{fontSize: 32, marginTop:10, marginBottom:10, justifyContent:'flex-start'}}>Get Started</Text>
      <Text style={{fontSize: 20, marginBottom:10,textAlign:'left'}}>Please enter your details</Text>
      
      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
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
        <TouchableOpacity style={styles.signupButton} onPress={()=>  navigation.navigate('login')}>
            <Text style={styles.buttonTextSignUP}>Sign Up</Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row',marginTop:10}}>
          <View style={styles.divider}></View>
          <Text style={{fontSize: 20, marginLeft:10,marginRight:10,textAlign:'left'}}>Or sign up with</Text>
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
                <Text style={{marginTop:23}}>Already have an account ?</Text>
                {/* Facebook Sign-In Button */}
                <TouchableOpacity style={styles.button} onPress={()=>  navigation.navigate('login')}>
                    <Text style={styles.buttonTextWithoutImage}>Sign In</Text>
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
    borderColor: 'black'
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
    backgroundColor: '#000', // Color of the divider (black)
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
});

export default SignUpScreen;
