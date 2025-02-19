import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {  View, StyleSheet, Text, Image, ScrollView,TouchableOpacity } from 'react-native';


const BotPerformance = ({ route }) => {
    const { item } = route.params;
    const navigation = useNavigation();
    const basicMatrics = {
        'Total Trades': item.dashboardData.totalTrades,//'0',
        'Avarage profit Per Trade': item.dashboardData.averageProfitPerTrade,//'0',
        'Percentage Time In Trade': item.dashboardData.percentageTimeInTrades,//'0.295',
        'Win Rate': item.dashboardData.winRate,//'0',
      };

    const advanceMatrics = {
        'Sharpe': '0',
        'Cagr': '0',
        'Portfolio Alpha': '0.295',
        'Sortino': '12.587',
        'Maximun Drawdown Percentage': '0',
        'R Squared': '0.442',
    };
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
                    <Text style={styles.text}>Bot_Performance</Text>
                </View>

                <Image
                    source={require("../../assets/images/bell_.png")}
                    style={{ marginEnd: 10, justifyContent: "flex-end" }}
                />
            </View>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.priceViewContainer_111}>
                    <Text style={styles.text_4}>Basic Performance Matrics</Text>
                    {Object.entries(basicMatrics).map(([key, value], index) => (
                        <View key={index} style={styles.subViewWithBorder}>
                            <Text style={styles.text_3}>{key}</Text>
                            <Text style={styles.text_2}>{value}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.priceViewContainer_111}>
                <Text style={styles.text_4}>Advance Performance Matrics</Text>
                {Object.entries(advanceMatrics).map(([key, value], index) => (
                    <View key={index} style={styles.subViewWithBorder}>
                        <Text style={styles.text_3}>{key}</Text>
                        <Text style={styles.text_2}>{value}</Text>
                    </View>
                ))}
                </View>
                
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

    text_2: {
        color: 'black',
        fontSize: 15,
        paddingTop: 10,
        marginEnd: 10,
        justifyContent: "flex-end" ,
    },

    text_3: {
        color: 'gray',
        fontSize: 15,
        paddingTop: 10,
        paddingLeft: 10,
        marginEnd: 10,
    },

    text_4: {
        color: 'black',
        fontSize: 14,
        paddingTop: 10,
        paddingLeft: 5,
        marginEnd: 10,
        justifyContent: "flex-end" ,
    },

    subViewWithBorder: {
        flexDirection: 'row', // Aligns image and text horizontally
        height: 40,
        backgroundColor: 'white',
        marginLeft: 5,
        marginRight: 15,
        marginTop: 15,
        borderRadius: 8,
        borderWidth:1,
        borderColor: '#E9E7F7',
        justifyContent: 'space-between',
    },

    priceViewContainer_111: {
        width: '100%',
        height: 280,
        marginLeft:5,
        marginRight:10,
        paddingTop:10,
        borderRadius: 8,
    },
});

export default BotPerformance;