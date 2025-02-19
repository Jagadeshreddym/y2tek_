import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {  View, StyleSheet, Text, Image, ScrollView ,TouchableOpacity} from 'react-native';
import { getBotData } from '../../api/AuthService';
import AsyncStorage from '@react-native-async-storage/async-storage';  // Correct import
import { SvgUri } from 'react-native-svg';

const BotSummary = ({ route }) => {
    const { item } = route.params;
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const formatDate = (date) => {
        const d = new Date(date);
        const day = d.getDate().toString().padStart(2, '0');
        const month = (d.getMonth() + 1).toString().padStart(2, '0');
        const year = d.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const getTime = (date) => {
        const dte = new Date(date);
        // Get hours, minutes, and AM/PM
        let hours = dte.getHours();
        const minutes = dte.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        // Convert to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // Hour '0' should be '12'

        // Add leading zero for minutes if necessary
        const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;

        // Format the date and time
        const formattedDate = `${hours}:${minutesFormatted} ${ampm}`;
        return formattedDate;
    //     return `${day}-${month}-${year}`;
    };

    const dataKey = {
        'Symbol': data.symbol,//'Bitcoin (BTCUSDT)',
        'Initial Capital USD': data.initialCapital,//'$50',
        'Margin': data.margin + '%',
        'Target Profit/Goal': data.targetProfitGoal + '%',//'5% / 6%',
        'Stoploss/Goal': data.stoplossGoal + '%',//'5% / 6%',
        'Max Drawdown Limit': '$' + data.maxDrawdownLimit,//'$10',
        'Position Open Order Type': data.positionOpenOrderType,//'Market',
        'Target Hit Order Type': data.targetHitOrderType,//'Market',
        'Position Close Order Type': data.positionCloseOrderType,//'Market',
        'Unfilled Order Behavior': data.unfilledOrderBehaviour,//'Replace',
        'Order Qulaity Type': data.orderQuantityType,//'Percentage',
        'Limit Order Price Reference Level': data.limitOrderPriceReferenceLevel,//'1',
        'Unfilled Order Timeout': data.unfilledOrderTimeout,//'30',
        'Order Quality Value': data.orderQuantityValue,//'100',
        'Transaction Cost in Basis Points': data.transactionCostInBasisPoints//'5',
      };

    const handleGoBack = () => {
        console.log("Selected Index navigate back")
        navigation.goBack();  // This goes back to the previous screen in the stack
    };

    const callAPIOnLoad = () => {
        getBotSummary();
    };

    const getBotSummary = async () => {
        try {
            setLoading(true);
            setError('');
            const userName =  (await AsyncStorage.getItem('userName'));
            try {
               // https://userbot.y2tek.io/bot/Solana_Buy_5m_1_1_2025_01_20_12_53_09?userName=khanAli
                const response = await getBotData('bot/' + item.botName + '?userName=' + userName);  // Get posts from API
                console.log("response of bot", response);
                setData(response);
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        } catch (error) {
            console.error('Error gathering device info:', error);
        }
    };

    useEffect(() => {
        getBotSummary();
    }, []);

    return (
        <View style={styles.container} onLayout={callAPIOnLoad} >
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
                    <Text style={styles.text}>Bot Summary</Text>
                </View>

                <Image
                    source={require("../../assets/images/bell_.png")}
                    style={{ marginEnd: 10, justifyContent: "flex-end" }}
                />
            </View>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.subView_1}>
                    <View style={styles.subView}>
                         <SvgUri width="18" height="20" uri='https://bot.y2tek.io/4cfad0a1de15734b2577.svg' style={{ flexDirection: 'row', alignItems: 'center', margin: 8}}/>
                        <Text style={styles.text_1}>{item.botName}</Text>
                    </View>

                    <View style={styles.subView}>
                        <SvgUri width="15" height="15" uri='https://bot.y2tek.io/4eaa85c23ff8d9b9debe.svg' style={{ flexDirection: 'row', alignItems: 'center', margin: 8}} />
                        <Text style={styles.text_1}>{formatDate(data.createdDate)}</Text>
                        <Text style={styles.text_11}> {getTime(data.createdDate)}</Text>
                    </View>

                    {Object.entries(dataKey).map(([key, value], index) => (
                        <View key={index} style={styles.subViewWithBorder}>
                            <Text style={styles.text_3}>{key}</Text>
                            <Text style={styles.text_2}>{value}</Text>
                        </View>
                    ))}

                    <View style={styles.priceViewContainer_111}>
                        <View style={styles.subViewWithBorder}>
                            <Text style={styles.text_3}>ML Bot</Text>
                            <Text style={styles.text_2}>Buy</Text>
                        </View>
                        <View style={styles.subViewWithBorder}>
                            <Text style={styles.text_3}>Timeframe</Text>
                            <Text style={styles.text_2}>5M</Text>
                        </View>
                    </View>

                    <View style={styles.priceViewContainer_111}>
                        <View style={styles.subViewWithBorder}>
                            <Text style={styles.text_3}>Trailing Target</Text>
                            <Image
                            source={require("../../assets/images/home_tab.png")} style={styles.timeIcon}
                        />
                        </View>
                        <View style={styles.subViewWithBorder}>
                            <Text style={styles.text_3}>Reinvest Profit</Text>
                            <Image
                            source={require("../../assets/images/home_tab.png")} style={styles.timeIcon}
                        />
                        </View>
                    </View>

                    <View style={styles.priceViewContainer_111}>
                        <View style={styles.subViewWithBorder}>
                            <Text style={styles.text_3}>Trailing Stoploss</Text>
                            <Image
                            source={require("../../assets/images/home_tab.png")} style={styles.timeIcon}
                        />
                        </View>
                        <View style={styles.subViewWithBorder}>
                            <Text style={styles.text_3}>Allow Shorting</Text>
                            <Image
                            source={require("../../assets/images/home_tab.png")} style={styles.timeIcon}
                        />
                        </View>
                    </View>


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

    text: {
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
        backgroundColor: 'white', // Button background color
        marginLeft: 8,
    },

    scrollContainer: {
        flex: 1,
        width: '100%',  
    },

    subView: {
        flexDirection: 'row', // Aligns image and text horizontally
        height: 35,
        backgroundColor: 'white',
        lineHeight:35,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        borderRadius: 8,
    },

    subView_1: {
        flex:1,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        paddingBottom:10,
        borderRadius: 8,
    },

    text_1: {
        color: 'black',
        fontSize: 15,
        height:35,
        lineHeight:35,
    },

    text_11: {
        color: 'gray',
        fontSize: 15,
        height:35,
        lineHeight:35,
    },

    timeIcon: {
        width: 23,  // Set the width of the image
        height: 23, // Set the height of the image
        marginTop:8,
        marginLeft:5,
    },

    subViewWithBorder: {
        flexDirection: 'row', // Aligns image and text horizontally
        height: 40,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        borderRadius: 8,
        borderWidth:1,
        borderColor: '#E9E7F7',
        justifyContent: 'space-between',
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

    priceViewContainer_111: {
        width: '100%',
        flexDirection: 'row', // Aligns image and text horizontally
        height: 40,
        marginLeft:5,
        marginRight:10,
        paddingTop:15,
        backgroundColor : 'white',
        borderRadius: 8,
        justifyContent: 'space-evenly',  // Equal spacing between buttons
        alignItems: 'center', 
    },
});

export default BotSummary;
