import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView, TextInput, FlatList, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { getBotData } from '../../api/AuthService';
import { SvgUri } from 'react-native-svg';


const Bot = () => {
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

    const handleGoBack = () => {
        console.log("Selected Index navigate back")
        navigation.goBack();  // This goes back to the previous screen in the stack
    };

    const [searchQuery, setSearchQuery] = useState('');

    const navigateToBuyBot = (index: React.SetStateAction<number>) => {
        if (data) {
            navigation.navigate('botbuyname', { item: data.userBotListResponse[index] });
            console.log("Selected Index", index);
        } else {
            Alert.alert('Please enter some data');
        }
    };

    const navigateToPL = () => {
        //Alert.alert('Hello from Parent!', 'This alert was triggered by the parent component................');
    };

    const navigateToTradeBook = () => {
        //Alert.alert('Hello from Parent!', 'This alert was triggered by the parent component................');
    };

    const callAPIOnLoad = () => {
        getBot();
        //    getBotAmount();
        //    getManualTrade();
    };

    // const plans = ['1', '2', '3'];
    const [selectedTab, setSelectedTab] = useState(0); // Initially, the first tab is selected

    // const handleTabPress = (index: React.SetStateAction<number>) => {
    //     navigation.navigate('botbuyname');
    //     // console.log("Selected Index", index)
    //     // setSelectedTab(index); // Update the selected tab index
    // };
    // useEffect(() => {
    const getBot = async () => {
        try {
            setLoading(true);
            setError('');
            const pageNumber = 0;//(await AsyncStorage.getItem('pageNumber'));
            const pageSize = 5;//(await AsyncStorage.getItem('pageNumber'));
            // ?pageNumber=0&pageSize=5&sortBy=auditInfo.createdDate
            try {
                const response = await getBotData('bot?pageNumber=' + pageNumber + '&pageSize=' + pageSize + '&sortBy=auditInfo.createdDate');  // Get posts from API
                console.log("response of bot", response);
                setData(response);
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }

            // Get Location (latitude and longitude)

        } catch (error) {
            console.error('Error gathering device info:', error);

        }
    };
    //}, []);
    // Make the API call when the component mounts
    useEffect(() => {
        getBot();
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
                    <Text style={styles.text}>Bot</Text>
                </View>

                <Image
                    source={require("../../assets/images/bell_.png")}
                    style={{ marginEnd: 10, justifyContent: "flex-end" }}
                />
            </View>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.tapContainer}>
                    <View style={styles.shadowBox} >
                        <LinearGradient
                            colors={['#2AACF5', '#9100EB']}
                            style={styles.linearGradient}
                        >
                            <View style={styles.viewContainer}>
                                <View style={styles.view}>
                                    <Text style={styles.titleText}>REALIZED P&L</Text>
                                    <Text style={styles.priceText}>$140</Text>
                                </View>
                                <View style={styles.view}>
                                    <Text style={styles.titleText}>UNREALIZED P&L</Text>
                                    <Text style={styles.priceText}>$120</Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </View>
                    {/* // eslint-disable-next-line react-native/no-inline-styles */}
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: 8, }}>
                            <TouchableOpacity style={styles.button} onPress={navigateToPL}>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                <SvgUri style={{ marginLeft:10,marginRight: 10 }} width="25" height="25" uri='https://bot.y2tek.io/62003140aca15e9c32e6.svg' />
                                <Text style={styles.text_1}>P&L</Text>
                                </View>

                                <Image source={require("../../assets/images/navigate.png")}
                                    style={{ marginEnd: 2, marginTop: 8, justifyContent: "flex-end" }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button} onPress={navigateToTradeBook}>
                                <View style ={{flexDirection:'row', alignItems:'center'}}>

                                <Image
                                    source={require("../../assets/images/trade.png")} style={styles.timeIcon}
                                />
                                <Text style={styles.text_1}>Trade book</Text>
                                </View>
                               

                                <Image
                                    source={require("../../assets/images/navigate.png")}
                                    style={{ marginEnd: 2, marginTop: 8, justifyContent: "flex-end" }}
                                />
                            </TouchableOpacity>
                    </View>


                    <View style={styles.buyBotContainer_1}>
                        <Image
                            source={require("../../assets/images/search.png")} style={styles.timeIcon}
                        />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search..."
                            value={searchQuery}
                            onChangeText={setSearchQuery} // Update the search query as the user types
                        />
                    </View>

                    <View style={styles.buyBotContainer_1}>
                        <Image
                            source={require("../../assets/images/bot_menu.png")} style={styles.timeIcon}
                        />
                        <Text style={styles.text_Bot}>{data?.userBotListResponse === undefined ? '' : data?.userBotListResponse?.length + ' Bots'}</Text>
                        {/* {data.userBotListResponse.length} */}
                        {/* <Text style={styles.text_Bot}>10 Bots</Text> */}
                    </View>

                    {data.userBotListResponse && data.userBotListResponse.length > 0 ? (
                        data.userBotListResponse.map((item, index) => (

                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.tab,
                                    selectedTab === index && styles.tab, // Highlight selected tab
                                ]}
                                onPress={() => navigateToBuyBot(index)} // Change selected tab
                            >
                                <View style={styles.buyBotContainer}>
                                    <View style={styles.subContainer}>
                                        <SvgUri width="18" height="20" uri='https://bot.y2tek.io/769d6399f94a3fed8af2.svg' />
                                        <Text style={styles.titleDocuments}>{item.botName}</Text>
                                        <SvgUri style={{ marginRight: 10 }} width="15" height="15" uri='https://bot.y2tek.io/cd266e23446b78a8e4d5.svg' />
                                    </View>

                                    {item.futurePrice !== null ? (
                                        <View style={styles.priceViewContainer}>
                                            <View style={styles.priceView}>
                                                <Text style={styles.titleText_1}>Flat Price</Text>
                                                <Text style={styles.priceText_1}>${item.futurePrice}</Text>
                                            </View>
                                        </View>
                                    ) : (
                                        <></>
                                    )}

                                    <View style={styles.priceViewContainer}>
                                        <View style={styles.priceView}>
                                            <Text style={styles.titleText_1}>Realized</Text>
                                            <Text style={styles.priceText_1}>${item.netRealisedPL}</Text>
                                        </View>
                                        <View style={styles.priceView}>
                                            <Text style={styles.titleText_1}>Unrealized</Text>
                                            <Text style={styles.priceText_1}>${item.netUnRealisedPL}</Text>
                                        </View>
                                        <View style={styles.priceView}>
                                            <Text style={styles.titleText_1}>Capital</Text>
                                            <Text style={styles.priceText_1}>${item.initialCapital}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        {item.futurePrice !== null ? (
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text
                                                    style=
                                                    {{
                                                        width: 80, backgroundColor: 'green',
                                                        color: 'white', textAlign: 'center', borderRadius: 5, fontSize: 11, height: 25, lineHeight: 25,
                                                    }}>
                                                    ACTIVE
                                                </Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 65 }}>
                                                    <SvgUri width="15" height="15" uri='https://bot.y2tek.io/4eaa85c23ff8d9b9debe.svg' />
                                                    <Text style={{ marginLeft: 5 }}>{formatDate(item.createdDate)}</Text>
                                                    <Text > to </Text>
                                                    <Text >{formatDate(item.inactiveTime)}</Text>
                                                </View>
                                            </View>
                                        ) : (
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text
                                                    style=
                                                    {{
                                                        width: 100, backgroundColor: 'orange',
                                                        color: 'white', textAlign: 'center', borderRadius: 5, fontSize: 11, height: 25, lineHeight: 25,
                                                    }}>
                                                    SCHEDULED
                                                </Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 45 }}>
                                                    <SvgUri width="15" height="15" uri='https://bot.y2tek.io/4eaa85c23ff8d9b9debe.svg' />
                                                    <Text style={{ marginLeft: 5 }}>{formatDate(item.createdDate)}</Text>
                                                    <Text > to </Text>
                                                    <Text >{formatDate(item.inactiveTime)}</Text>
                                                </View>
                                            </View>
                                        )}

                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))
                    ) : (
                        <></>
                    )}



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
        backgroundColor: '#F1F1F6',
    },


    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between', // Ensures buttons are spaced evenly
    },

    button: {
        flexDirection: 'row', // Aligns image and text horizontally
        backgroundColor: 'white', // Button background color
        marginLeft: 5,
        width:'48%',
        borderRadius:8,
        justifyContent:'space-between',
        alignItems:'center',
        padding:5
    },

    text: {
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
        backgroundColor: 'white', // Button background color
        marginLeft: 8,
    },
    linearGradient: {
        height: 110,
        width: '100%',
        marginTop: -10,
        borderRadius: 10,  // Rounded corners
    },
    shadowBox: {
        width: '100%',
        height: 113,
        backgroundColor: '#b5cbf6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,  // Rounded corners
        // iOS Shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, // Horizontal & vertical offset
        shadowOpacity: 0.8,   // Shadow opacity (0 to 1)
        shadowRadius: 6,      // How much to blur the shadow
        // Android Shadow (Elevation)
        elevation: 8,  // Increase to make the shadow more prominent
    },
    defaultContainer: {
        height: 65,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
    },

    viewContainer: {
        flex: 1,
        flexDirection: 'row',  // Arrange buttons horizontally
        width: '100%',         // Ensure the container takes full width
        marginTop: 10,
    },

    view: {
        flex: 1,               // Equal width for each button
        backgroundColor: 'white',
        padding: 10,
        margin: 12,
        height: 70,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, // Horizontal & vertical offset
        shadowOpacity: 0.5,   // Shadow opacity (0 to 1)
        shadowRadius: 6,      // How much to blur the shadow
        // Android Shadow (Elevation)
        elevation: 8,  // Increase to make the shadow more prominent
    },

    priceView: {
        flex: 1,               // Equal width for each button
        backgroundColor: '#F2F2F7',
        height: 55,
        marginRight: 5,
        // paddingLeft:5,
        // margin: 5,
        borderRadius: 10,
    },

    titleText: {
        color: 'black',
        fontSize: 11,
        marginTop: 10,
    },

    titleText_1: {
        color: '#6A5ECC',
        fontSize: 10,
        paddingTop: 10,
        paddingLeft: 10,
    },

    titleText_2: {
        color: '#6A5ECC',
        fontSize: 10,
        paddingLeft: 10,
    },

    titleText_3: {
        color: '#6A5ECC',
        fontSize: 14,
        paddingTop: 10,
    },

    priceText: {
        color: 'black',
        fontSize: 16,
    },

    priceText_1: {
        color: 'black',
        fontSize: 15,
        paddingTop: 5,
        paddingLeft: 10,
    },

    priceText_2: {
        color: 'black',
        fontSize: 15,
        paddingLeft: 10,
    },

    tapContainer: {
        flex: 1,
        flexDirection: 'column',  // Arrange buttons horizontally
        width: '100%',         // Ensure the container takes full width
        // height: 70,
    },

    subView: {
        height: 40,        // Equal width for each button
        backgroundColor: 'white',
        padding: 10,
        margin: 12,
        borderRadius: 8,
        borderColor: '#C8CED1',
        borderWidth: 1,
        flex: 1,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between"
    },

    subView_1: {
        flexDirection: 'row', // Aligns image and text horizontally
        // height: 40,
        // marginLeft: 10,
        // marginRight: 10,
        // marginTop: 15,
        borderRadius: 8,
    },

    subView_2: {
        flexDirection: 'row', // Aligns image and text horizontally
        height: 40,
        // marginLeft: 10,
        // marginRight: 15,
        marginTop: 15,
        borderRadius: 8,

    },

    subView_3: {
        flexDirection: 'row', // Aligns image and text horizontally
        height: 40,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 15,
        marginTop: 15,
        borderRadius: 8,
    },

    subView_4: {
        flexDirection: 'row', // Aligns image and text horizontally
        height: 150,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 15,
        marginTop: 15,
        borderRadius: 8,
    },

    timeIcon: {
        width: 20,  // Set the width of the image
        height: 20, // Set the height of the image
        lineHeight: 25,
        marginLeft:10
    },

    text_1: {
        color: 'black',
        fontSize: 16,
        marginLeft: 5,
        lineHeight: 40,
    },

    text_Bot: {
        color: '#6A5ECC',
        fontSize: 15,
        marginLeft: 10,
        lineHeight: 40,
    },

    searchContainer: {
        flex: 1,
        flexDirection: 'row',  // Arrange buttons horizontally
        height: 40,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 8,
        borderColor: '#C8CED1',
        borderWidth: 1,
    },

    priceContainer: {
        justifyContent: 'space-evenly',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 8,
        height: 55,
        backgroundColor: '#F2F2F7',
        borderRadius: 8,
    },

    priceViewContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row', // Aligns image and text horizontally
        marginBottom: 5,
        paddingRight: 5,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 8,
        alignItems: 'center',
    },

    sortContainer: {
        flex: 1,
        flexDirection: 'row',  // Arrange buttons horizontally
        height: 40,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        borderRadius: 8,
    },

    buyBotContainer: {
        flex: 1,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 8,
    },

    buyBotContainer_1: {
        flex: 1,
        flexDirection: 'row',  // Arrange buttons horizontally
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        height: 40,
        borderRadius: 8,
        borderColor: '#ccc',
        borderWidth: 1,
        alignItems:'center'
    },

    BotListContainer: {
        height: 85,
        backgroundColor: 'white',
        borderRadius: 8,
        borderColor: '#C8CED1',
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 15,
        flexDirection: 'row',  // Arrange buttons horizontally
        width: '100%',         // Ensure the container takes full width
    },

    scrollContainer: {
        flex: 1,
        width: '100%',
    },

    subContainer: {
        flexDirection: 'row', // Aligns image and text horizontally
        // marginTop: 10,
        // marginLeft: 5,
        // marginRight: 5,
        // marginBottom: 10,
        width: '100%',
        height: 30,
    },

    titleDocuments: {
        flex: 1, // Take up remaining space between the images
        fontSize: 15,
        alignItems: 'center',
        marginLeft: 5,
        lineHeight: 15,
    },

    infoDocumentsView: {
        flexDirection: 'row', // Aligns image and text horizontally
        backgroundColor: '#BE3340',
        marginRight: 5,
        alignItems: 'center',
        borderRadius: 5,
        height: 30,
        width: 100,
    },

    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchInput: {
        height: 40,
        marginLeft:10
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },

    text_2: {
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
    },

    text_3: {
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
        marginLeft: 5,
        marginRight: 5,
        fontSize: 12,
    },

    subView_PL: {
        flexDirection: 'row', // Aligns image and text horizontally
        height: 40,
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'center',
        // marginLeft: 10,
        // marginRight: 10,
        // marginTop: 15,
        borderRadius: 8,
    },
});

export default Bot;