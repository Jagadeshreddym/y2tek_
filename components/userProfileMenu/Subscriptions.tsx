import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {  View, TouchableOpacity, Image, Text, StyleSheet, Alert, ScrollView} from 'react-native';

const Subscriptions = () => {
    const subscriptions = ['Active Subscriptions', 'Available Subscriptions',];
    const [selectedTab, setSelectedTab] = useState(0); // Initially, the first tab is selected
 const navigation = useNavigation();
    const plans = ['Papertrade', 'Bots'];
    const image_path = ['../../assets/images/tick_wrong.png', '../../assets/images/tick_right.png'];

    const handleTabPress = (index: React.SetStateAction<number>) => {
        console.log("Selected Index", index)
        setSelectedTab(index); // Update the selected tab index
    };  
    const handleGoBack = () => {
        navigation.goBack();  // This goes back to the previous screen in the stack
      };

    return (
        <View style={{ height: "100%", flexDirection: 'column' }}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button} onPress={handleGoBack}>
                        <Image source={require('../../assets/images/back.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.text}>Subscriptions</Text>
                </View>


            <View style={styles.tabBar}>
                {subscriptions.map((tab, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.tab,
                            selectedTab === index && styles.selectedTab, // Highlight selected tab
                        ]}
                        onPress={() => handleTabPress(index)} // Change selected tab
                    >
                        <Text style={{ color: selectedTab === index ? 'white' : '#695DCA' }}>{tab}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <ScrollView style={{ marginTop: 10 }}>
                <View style={styles.row}>
                    {plans.map((tab, index) => (
                        <View style={styles.listContainer}>
                            <View style={styles.rowContainer}>
                                <View style={{flexDirection:'row', alignItems:'center'}}>   
                                {index == 0 && <Image source={require('../../assets/images/tick_wrong.png')} />}
                                {index == 1 && <Image source={require('../../assets/images/tick_right.png')} />}
                                <Text style={styles.subText}>{tab}</Text>
                                </View>
                                <Image source={require('../../assets/images/navigate.png')} />
                            </View>
                            <View style={styles.availableContainer}>
                                <Text style={styles.text}>Available</Text>
                                <Text style={styles.text}>0 of 15</Text>
                            </View>

                            <View style={styles.defaultContainer}>
                                <Text style={styles.text}>$49/month</Text>
                                <Text style={styles.text_c}>Next Billing: 05 Feb 2024</Text>
                            </View>

                            <View style={styles.separatorLine}></View>

                            <View style={styles.defaultContainer}>
                                <TouchableOpacity onPress={() => alert('Button pressed!')}>
                                    <View style={styles.infoDocumentsViewButton}>
                                    <Text style={styles.text_}>Recharge</Text>
                                    </View>
                                    
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => alert('Button pressed!')}>
                                    <View style={styles.buttonborder}>
                                    <Text style={styles.text_b}>Add More</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                    ))}
                </View>
                <View style={styles.bottomView}>
                    <Text style={styles.switchPlanText}>Siwtch to combined plan</Text>
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
        height: 50,
        marginLeft: 10,
    },
    infoDocumentsViewButton:{
        borderRadius: 5,
        backgroundColor: '#695DCA',
        height: 30,
        marginLeft: 20,
        marginRight: 20,
        width:150,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonborder:{
        borderRadius: 5,
        backgroundColor: 'white',
        height: 30,
        width:150,
        borderColor:'#695DCA',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
      },
    icon: {
        width: 30,  // Set the width of the image
        height: 20, // Set the height of the image
    },
    text: {
        color: 'black', // Text color
        fontSize: 14,   // Text font size
        marginLeft : 10 ,
    },
    text_: {
        color: 'white', // Text color
        fontSize: 14,   // Text font size
        marginLeft: 10,
        marginRight:10,
    },
    text_c: {
        color: 'black', // Text color
        fontSize: 14,   // Text font size
        marginLeft: 10,
        marginRight:10,
    },
    text_b: {
        color: '#695DCA', // Text color
        fontSize: 14,   // Text font size
        marginLeft: 10,
        marginRight:10,
    },
    tabBar: {
        flexDirection: 'row',
        height: 45,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden',
        width: '95%',
        marginTop: 20,
        marginLeft: '2.5%'
    },

    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D8D5EE',
    },

    selectedTab: {
        backgroundColor: '#695DCA', // Background for selected tab
    },

    bottomView: {
        borderRadius: 5,
        backgroundColor: '#5281EA',
        height: 45,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
    },

    switchPlanText: {
        color: 'white', // Text color
        fontSize: 15,   // Text font size
    },

    row: {
        color: 'black', // Text color
        fontSize: 14,   // Text font size
    },

    rowContainer: {
        height: 40,
        flex: 1,
        // backgroundColor: 'green',
        marginLeft: 10,
        marginRight: 10,
        justifyContent:'space-between',
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
    },

    listContainer: {
        height: 180,
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: 'white'
        // flexDirection: 'row', // Aligns image and text horizontally
        // alignItems: 'center', // Center aligns both image and text vertically
    },

    separatorLine: {
        height: 1,
        backgroundColor: '#D6DADC',
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
    },

    subContainer: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },

    availableContainer:{
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        backgroundColor: '#F2F2F7',
        justifyContent:'space-between',
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
        borderColor: '#D7D4EE',
        borderWidth: 1,
    },

    defaultContainer:{
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        justifyContent:'space-between',
        backgroundColor: 'white',
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
    },

    subText: {
        color: 'black', // Text color
        fontSize: 15,   // Text font size
        marginLeft: 5,
    },
});

export default Subscriptions;