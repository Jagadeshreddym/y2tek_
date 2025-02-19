import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CardWithText from '../../utils/CardWithText';
import PieChart from 'react-native-pie-chart';
import Svg, {  Text as SvgText } from 'react-native-svg';


const Portfolio = () => {
  const [series, setSeries] = useState([
    { value: 12, color: '#fbd203' },
    { value: 28, color: '#ffb300' },
    { value: 32, color: '#ff9100' },
    { value: 28, color: '#ff6c00' },
    
  ]);
  const [content, setContent] = useState('$125.00 25%');
  const tabs = ['1D', '2D', '3D', '4D', '5D'];
  const detailsTab = ['Balance', 'Profit', 'Investments'];

  const widthAndHeight = 250;


  const [selectedTab, setSelectedTab] = useState(0); // Initially, the first tab is selected
  const [selectedTabDetails, setSelectedTabDetails] = useState(0); // Initially, the first tab is selected

  const navigateMenu = () => {
    Alert.alert('Hello from Parent!', 'This alert was triggered by the parent component.');
  };
  const handleTabPress = (index: React.SetStateAction<number>) => {
    setSelectedTab(index); // Update the selected tab index
  };

   // Calculate the total value of the series
   const totalValue = series.reduce((acc, cur) => acc + cur.value, 0);

   // Function to calculate the angle for each slice and position the label
   const calculateSliceAngles = () => {
     let startAngle = 0;
     return series.map((slice) => {
       const angle = (slice.value / totalValue) * 360;
       const middleAngle = startAngle + angle / 2;
       startAngle += angle;
       return {
         ...slice,
         angle,
         middleAngle, // For label placement
       };
     });
   };
 
   const slicesWithAngles = calculateSliceAngles();

  // Calculate the starting angle for each slice and the label positions
  let startAngle = 0;

  // Step 3: Handle tab selection
  const handleTabPressDetails = (index: React.SetStateAction<number>) => {
    console.log("Selected Index on second tab", index)
    setSelectedTabDetails(index); // Update the selected tab index
    if (index === 0) {
      setSeries([
        { value: 12, color: '#fbd203' },
        { value: 28, color: '#ffb300' },
        { value: 32, color: '#ff9100' },
        { value: 28, color: '#ff6c00' },
        
      ]);
      setContent('$125.00 25%');
    } else if (index === 1) {
      setSeries([
        { value: 38, color: '#fbd203' },
        { value: 15, color: '#ffb300' },
        { value: 25, color: '#ff9100' },
        { value: 22, color: '#ff6c00' },
        
      ]);
      setContent('$64.00 35%');
    }
    else {
      setSeries([
        { value: 10, color: '#fbd203' },
        { value: 40, color: '#ffb300' },
        { value: 20, color: '#ff9100' },
        { value: 30, color: '#ff6c00' },
        
      ]);
      setContent('$200.00 12%');
    }

  };

  return (
    <View style={{ height: "100%", flexDirection: 'column'  }}>
      <View style={{ height: 300, alignItems: 'center', marginTop: 40,}}>
      
      <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          cover={{ radius: 0.6, color: '#fff' }}
          padAngle={0.01}
        />
         {/* Labels */}
         {slicesWithAngles.map((slice, index) => {
          const angle = slice.middleAngle;
          const labelX = 200 + 100 * Math.cos((angle - 90) * (Math.PI / 180));
          const labelY = 130 + 100 * Math.sin((angle - 90) * (Math.PI / 180));

          return (
            <View
              key={index}
              style={[
                styles.label,
                {
                  left: labelX - 20,
                  top: labelY - 10,
                },
              ]}
            >
              <Text style={styles.labelText}>{slice.value}</Text>
            </View>
          );
        })}
  
      </View>

      <View style={styles.tabBar}>
        {tabs.map((tab, index) => (

          <TouchableOpacity
            key={index}
            style={[
              styles.tab1,
              selectedTab === index && styles.selectedTab1, // Highlight selected tab
            ]}
            onPress={() => handleTabPress(index)} // Change selected tab
          >
            <Text style={{ color: 'black' }}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.tabBar}>
        {detailsTab.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tab,
              selectedTabDetails === index && styles.selectedTab, // Highlight selected tab
            ]}
            onPress={() => handleTabPressDetails(index)} // Change selected tab
          >
            <Text
              style={[
                styles.tabText,
                selectedTabDetails === index && styles.selectedTabText, // Change text color of selected tab
              ]}
            >{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={{ marginTop: 30 }}>
        <View style={{ marginLeft: 20, marginRight: 20 }}>
          {/* Table Header */}
          <CardWithText title="BTCUSDT" image1={require('../../assets/images/robo_bolt.png')} image2={require('../../assets/images/navigation_arrow.png')} backgroundColor="#f5dfc9" content={content} navigate={navigateMenu} />


          <CardWithText title="BTCUSDT" image1={require('../../assets/images/robo_bolt.png')} image2={require('../../assets/images/navigation_arrow.png')} backgroundColor="#d8ebc5" content={content} navigate={navigateMenu} />


          <CardWithText title="BTCUSDT" image1={require('../../assets/images/robo_bolt.png')} image2={require('../../assets/images/navigation_arrow.png')} backgroundColor="#c6d6f5" content={content} navigate={navigateMenu} />


          <CardWithText title="BTCUSDT" image1={require('../../assets/images/robo_bolt.png')} image2={require('../../assets/images/navigation_arrow.png')} backgroundColor="#dcdaf5" content={content} navigate={navigateMenu} />

        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({

  shadowBox: {
    width: '100%',
    height: 473,
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
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
  selectedTab: {
    backgroundColor: '#6d5dd4', // Background for selected tab
  },
  selectedTab1: {
    backgroundColor: '#d8d5f0', // Background for selected tab
  },
  tabText: {
    fontSize: 16,
    color: '#333', // Default text color for unselected tab
  }, tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    //height: 60,
  },
  tabBar: {
    flexDirection: 'row',
    height: 30,
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
    backgroundColor: '#d7d3f0',

  },
  tab1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'f0f0f5',

  },
  selectedTabText: {
    color: '#333', // Text color for selected tab (white)
    backgroundColor: '#6C5DD3'
  },
  tableHeader: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    //height: 50,
  },
  label: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Portfolio;
