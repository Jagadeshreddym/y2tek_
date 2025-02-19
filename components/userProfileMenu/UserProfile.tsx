// screens/DetailsScreen.tsx

import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ScrollView, TextInput } from 'react-native';

const UserProfile = ({}) => {
 const navigation = useNavigation();
 const handleGoBack = () => {
  navigation.goBack();  // This goes back to the previous screen in the stack
};
const [phoneNumber, setPhoneNumber] = useState('');
const [address, setAddress] = useState('');
  
return (
  <View style={{ height: "100%", flexDirection: 'column' }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/images/back.png')}/>
        </TouchableOpacity>
        <Text style={styles.navigationTitle}>Profile</Text>
      </View>  
      <ScrollView style={{marginTop:10}}>
      <View style={styles.profile}>
        <Image source={require('../../assets/images/user_profile_menu.png')} style={styles.image} />
        <Text style={styles.title}>user@emailid.com</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            maxLength={15}
            onChangeText={setPhoneNumber} // Updates the text state as the user types
            placeholder="Enter Phone Number"
          />
          <TouchableOpacity onPress={handleGoBack}>
            <Text style={styles.updateButtonText}>UPDATE</Text>
          </TouchableOpacity> 
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={address}
            maxLength={30}
            onChangeText={setAddress} // Updates the text state as the user types
            placeholder="Enter Address"
          />
          <TouchableOpacity onPress={() => alert('Button pressed!')}>
            <Text style={styles.updateButtonText}>UPDATE</Text>
          </TouchableOpacity> 
        </View>
      </View>

      
      <View style={styles.documentsDetails}>
        <View style={styles.documents}>
          <Image source={require('../../assets/images/document_.png')}/>
          <Text style={styles.documentsText}>Documents</Text>
        </View>

        <View style={styles.docInputContainer}>
          <View style={styles.subContainer}>
            <Image source={require('../../assets/images/contact.png')} />
            <Text style={styles.titleDocuments}>ID Proof</Text>
            <View style={styles.infoDocumentsView}>
              <Image source={require('../../assets/images/cross_t.png')}  style={styles.statusIcon} />
              <Text style={styles.infoDocumentsStatus}>Rejected</Text>
            </View>
          </View>

          <View style={styles.infoDocumentsViewProof}>
            <TouchableOpacity onPress={() => alert('Button pressed!')}>
              <View style={styles.infoDocumentsViewButtonResend}>
                <Text style={styles.viewText}>View</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Button pressed!')}>
              <View style={styles.infoDocumentsViewButtonResend}>
                <Text style={styles.viewText}>Resend</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.guideLines}>
              <Text style={styles.guideLinesText}>Admin as requested to resend this document as it does not meet our guidelines. Read Guidelines</Text>
          </View>


        </View>

        <View style={styles.addressProofContainer}>
          <View style={styles.subContainer}>
            <Image source={require('../../assets/images/contact.png')} style={styles.icon} />
            <Text style={styles.titleDocuments}>Address Proof</Text>
            <View style={styles.infoDocumentsViewApproved}>
              <Image source={require('../../assets/images/cross_t.png')} style={styles.statusIcon} />
              <Text style={styles.infoDocumentsStatus}>Approved</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => alert('Button pressed!')}>
            <View style={styles.infoDocumentsViewButton}>
              <Text style={styles.viewText}>View</Text>
            </View>
            </TouchableOpacity> 
        </View>

        <View style={styles.addressProofContainer}>
          <View style={styles.subContainer}>
            <Image source={require('../../assets/images/contact.png')} style={styles.icon} />
            <Text style={styles.titleDocuments}>Passport</Text>
            <View style={styles.infoDocumentsViewPending}>
              <Image source={require('../../assets/images/info_t.png')} style={styles.statusIcon} />
              <Text style={styles.infoDocumentsStatus}>Pending</Text>
            </View>
            <Image source={require('../../assets/images/info.png')} style={styles.infoIcon} />
          </View>
          <TouchableOpacity onPress={() => alert('Button pressed!')}>
            <View style={styles.infoDocumentsViewButton}>
              <Text style={styles.viewText}>View</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>

        <View style={styles.bottomView}>
             <Text style={styles.deactivateAcctext}>Deactivate Account</Text>
        </View>
    </ScrollView> 
    </View>
  );
};

const styles = StyleSheet.create({

  navigationTitle: {
    color: 'black', // Text color
    fontSize: 14,   // Text font size
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    marginBottom:10,
    marginLeft: 10,
  },
    infoDocumentsViewButton:{
    backgroundColor: '#695DCA',
    marginRight: 5,
    marginLeft: 5,
    alignItems:'center',
    borderRadius: 5,
    height: 33,
  },

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
    backgroundColor: 'clear', // Button background color
    height:45,
    marginLeft: 10,
  },
  icon: {
    width: 18,  // Set the width of the image
    height: 20, // Set the height of the image
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5, // Make the images circular
    justifyContent:'center',
    alignItems:'center',
    marginTop: 15,
    marginBottom: 5,
  },
  
  text: {
    color: 'black', // Text color
    fontSize: 14,   // Text font size
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    marginBottom:10,
    marginLeft: 10,
  },

  title: {
    flex: 1, // Take up remaining space between the images
    fontSize: 16,
    alignItems:'center',
    marginTop:4,
    color: "#5F696F",
  },
  profile: {
    flex: 1, // Take up remaining space between the images
    alignItems:'center',
    backgroundColor: 'white',
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    borderRadius: 5,
  },

  bottomView: {
    flex: 1, // Take up remaining space between the images
    alignItems:'center',
    backgroundColor: '#C8CED1',
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    borderRadius: 5,
    height : 40,
  },

  inputContainer: {
    height: 45,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row', // Aligns image and text horizontally
    width: '93%',
    borderColor: '#C8CED1',
    borderWidth: 1,
    fontSize: 16,
    justifyContent:'space-between',
    alignItems:'center'
  },

  input: {
    height: 45,
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    
  },

  updateButtonText: {
    color: '#695DCA', // Text color
    fontSize: 12,   // Text font size
    alignItems:'center',
    marginRight:10
  },

  deactivateAcctext: {
    color: '#333333', // Text color
    fontSize: 15,   // Text font size
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    marginBottom:10,
  },

  documents: {
    flexDirection: 'row', // Aligns image and text horizontally
    alignItems:'center',
    height:50,
    backgroundColor: 'white',
    borderRadius: 5,
    marginLeft: 10,
  },

  documentsDetails: {
    flex: 1, // Take up remaining space between the images
    backgroundColor: 'white',
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    borderRadius: 5,
  },

  documentsIcon: {
    width: 30,  // Set the width of the image
    height: 20, // Set the height of the image
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
  },

  documentsText: {
    color: '#695DCA', // Text color
    fontSize: 15,   // Text font size
    marginTop:10,
    marginBottom:10,
    marginLeft:10,
  },

  docInputContainer: {
    height: 135,
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    borderColor: '#695DCA',
    borderWidth: 1,
    fontSize: 16,
    marginTop:5,
    marginBottom:5,
    marginLeft:5,
  },

  subContainer: {
    flexDirection: 'row', // Aligns image and text horizontally
    marginTop:10,
    marginBottom:5,
    marginLeft:5,
  },

  titleDocuments: {
    flex: 1, // Take up remaining space between the images
    fontSize: 15,
    alignItems:'center',
    marginLeft: 5,
  },

  infoDocumentsStatus: {
    fontSize: 13,
    color: 'white', // Text color
    marginLeft: 5,
  },

  infoDocumentsView:{
    flexDirection: 'row', // Aligns image and text horizontally
    backgroundColor: '#BE3340',
    marginRight: 5,
    alignItems:'center',
    borderRadius: 5,
    height: 30,
    width: 100,
  },

  addressProofContainer: {
    height: 85,
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    borderColor: '#695DCA',
    borderWidth: 1,
    fontSize: 16,
    marginTop:5,
    marginBottom:5,
    marginLeft:5,
  },

  infoDocumentsViewApproved:{
    flexDirection: 'row', // Aligns image and text horizontally
    backgroundColor: '#89BC42',
    marginRight: 5,
    alignItems:'center',
    borderRadius: 5,
    height: 30,
    width: 110,
  },

  infoDocumentsViewButton:{
    backgroundColor: '#695DCA',
    marginRight: 5,
    marginLeft: 5,
    alignItems:'center',
    borderRadius: 5,
    height: 33,
  },

  viewText: {
    fontSize: 15,
    color: 'white', // Text color
    marginTop: 5,
    marginBottom: 5,
    alignItems:'center',
  },

  infoDocumentsViewPending:{
    flexDirection: 'row', // Aligns image and text horizontally
    backgroundColor: '#E8A14B',
    marginRight: 5,
    alignItems:'center',
    borderRadius: 5,
    height: 30,
    width: 100,
  },

  infoDocumentsViewProof:{
    flex: 1, // Take up remaining space between the images
    flexDirection: 'row', // Aligns image and text horizontally
    marginTop:5,
    marginBottom:5,
    marginLeft:5,
    alignItems:'center',
    justifyContent: 'space-between'
  },

  infoDocumentsViewButtonResend:{
    backgroundColor: '#695DCA',
    borderRadius: 5,
    height: 33,
    width:150,
    margin:10,
    alignItems:'center'
  },

  guideLines:{
    backgroundColor: '#DFBEC7',
    marginRight: 5,
    marginLeft:5,
    alignItems:'center',
    borderRadius: 5,
    height: 40,
  },

  guideLinesText: {
    fontSize: 10,
    color: 'red', // Text color
    marginRight: 5,
    marginLeft:5,
    marginTop: 5,
    marginBottom:5,
  },

  statusIcon: {
    marginLeft: 10,
  },

  infoIcon: {
    marginRight: 10,
  },

});

export default UserProfile;
