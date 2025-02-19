import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {  View, StyleSheet, Text, Image, ScrollView,TouchableOpacity } from 'react-native';


const LiveOrderBook = () => {
    const navigation = useNavigation();
    const plans = ['1','2','3','4','5'];
    const handleGoBack = () => {
        console.log("Selected Index navigate back")
        navigation.goBack();  // This goes back to the previous screen in the stack
    };

    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: "white",
                flexDirection: "row",
                padding: 10,
                borderBottomEndRadius: 10,
                borderBottomLeftRadius: 10,
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
            }}
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity style={styles.button} onPress={handleGoBack}>
                        <Image source={require('../../assets/images/back.png')} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Live Order Book</Text>
                </View>

                <Image
                    source={require("../../assets/images/bell_.png")}
                    style={{ marginEnd: 10, justifyContent: "flex-end" }}
                />
            </View>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.subView}>
                    <Text style={styles.text_1}>Live order book depth with own orders</Text>
                </View>

                {plans.map((tab, index) => (
                    <View style={styles.subView_1}>
                        <View style={styles.subContainer}>
                            <Image source={require('../../assets/images/info.png')} />
                            <Text style={styles.titleDocuments}>Bot Summary</Text>
                            <Text style={styles.titleDocuments}>SELL</Text>
                        </View>
                        <View style={styles.priceViewContainer}>
                            <View style={styles.priceView}>
                                <Text style={styles.titleText_1}>Symbol</Text>
                                <Text style={styles.priceText_1}>BTCUSDT</Text>
                            </View>
                            <View style={styles.priceView}>
                                <Text style={styles.titleText_1}>Timeframe</Text>
                                <Text style={styles.priceText_1}>5m</Text>
                            </View>
                        </View>
                        <View style={styles.subContainer_1}>
                            <Image source={require('../../assets/images/info.png')} />
                            <Text style={styles.titleDocuments}>04:55 PM</Text>
                            <Text style={styles.titleDocuments}>12-01-2024</Text>
                            <Text style={styles.titleDocuments}>Percentage</Text>
                            <Text style={styles.titleDocuments}>0%</Text>
                            <Image source={require('../../assets/images/navigate.png')} />
                        </View>
                    </View>
                ))}
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },

    button: {
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
        backgroundColor: 'white', // Button background color
        marginLeft: 5,
    },

    scrollContainer: {
        flex: 1,
        width: '100%',  
    },
    text: {
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
        backgroundColor: 'white', // Button background color
        marginLeft: 8,
    },

    subView: {
        flexDirection: 'row', // Aligns image and text horizontally
        height: 40,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        borderRadius: 8,
    },

    subView_1: {
        // flexDirection: 'row', // Aligns image and text horizontally
        height: 120,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        borderRadius: 8,
    },

    text_1: {
        flex: 1,
        color: '#7367CF',
        fontSize: 13,
        marginLeft: 10,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center', // Center aligns both image and text vertically
    },

    subContainer: {
        flexDirection: 'row', // Aligns image and text horizontally
        marginTop: 10,
        marginLeft: 5,
        marginBottom: 5,
        marginRight: 5,
        width: '100%',
        height: 30,
        justifyContent: 'space-between',
    },


    subContainer_1: {
        flexDirection: 'row', // Aligns image and text horizontally
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        width: '100%',
        height: 30,
    },

    titleDocuments: {
        flex: 1, // Take up remaining space between the images
        fontSize: 15,
        alignItems: 'center',
        marginLeft: 5,
    },

    priceViewContainer: {
        width: '100%',
        flexDirection: 'row', // Aligns image and text horizontally
        marginLeft:5,
        // marginTop: 5,
        marginRight:10,
        height: 40,
        backgroundColor : 'white',
        borderRadius: 8,
        alignItems : 'center'
    },

    priceView: {
        flexDirection: 'row', // Aligns image and text horizontally
        flex: 1,               // Equal width for each button
        backgroundColor: '#F2F2F7',
        height:35,
        marginLeft: 5,
        borderRadius: 10,
        justifyContent: 'space-between',
    },

    titleText_1: {
        color: 'black',
        fontSize: 10,
        paddingTop: 10,
        paddingLeft: 10,
    },

    priceText_1: {
        color: 'black',
        fontSize: 15,
        paddingTop: 5,
        paddingLeft: 10,
    },
});

export default LiveOrderBook;