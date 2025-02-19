import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Line } from 'react-native-svg';

export default function Home() {
  return (
    <View>
      <View style={styles.shadowBox} >

        <LinearGradient
          colors={['#2AACF5', '#9100EB']}
          style={styles.linearGradient}
        />
      </View>
      <View>
        <ScrollView style={{ marginTop: -450 }}>
          <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/images/dashboard.png')} style={{ marginLeft: 10 }} />
              <Text style={{ marginStart: 10, color: 'white' }}>DASHBOARD</Text>

            </View>

            <View style={{ flexDirection: 'row', height: 30, backgroundColor: 'white', borderRadius: 5, marginRight: 10, alignItems: 'center' }}>
              <Image source={require('../../assets/images/calender.png')} style={{ marginLeft: 10 }} />
              <Text style={{ marginStart: 3, marginRight: 3, color: 'black' }}>December</Text>

            </View>
          </View>
          <View style={{ marginTop: 10, backgroundColor: 'white', borderRadius: 5, padding: 5, margin: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../../assets/images/hand.png')} style={{ marginLeft: 5 }} />
              <View>
                <Text style={{ marginStart: 3, marginRight: 3, color: 'black' }}>Capital Investment</Text>
                <Text style={{ marginStart: 3, marginRight: 3, color: 'black' }}>+$100(0.2%)</Text>
              </View>
            </View>
            <View style={{ margin: 10, width: '80%' }}>
              <Svg height="10" width="450">
                <Line
                  x1="0"
                  y1="0"
                  x2="80%"
                  y2="0"
                  stroke="black"
                  strokeWidth="2"
                  strokeDasharray="5, 5"  // Create dotted effect
                />
              </Svg>
            </View>

            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>

              <View>
                <Text style={{ marginStart: 3, marginRight: 3, color: 'black' }}>Profit</Text>
                <Text style={{ marginStart: 3, marginRight: 3, color: 'green' }}>+$100(0.2%)</Text>

              </View>

              <View>
                <Text style={{ marginStart: 3, marginRight: 3, color: 'black' }}>Manual Profit</Text>
                <Text style={{ marginStart: 3, marginRight: 3, color: 'green' }}>+$1(0.2%)</Text>

              </View>

              <View>
                <Text style={{ marginStart: 3, marginRight: 3, color: 'black' }}>Total Capital</Text>
                <Text style={{ marginStart: 3, marginRight: 3, color: 'green' }}>+$16,100(0.2%)</Text>
              </View>
            </View>
          </View>

          <View style={{ backgroundColor: 'white', borderRadius: 10, margin: 10 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../../assets/images/calender.png')} style={{ marginLeft: 10, }} />
                <Text style={{ marginStart: 3, marginRight: 3, color: 'black' }}>LTC</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'green', borderRadius: 5, padding: 4 }}>
                  <Image source={require('../../assets/images/tickmark.png')} style={{ marginLeft: 10, }} />
                  <Text style={{ marginStart: 3, marginRight: 3, color: 'black' }}>Active</Text>
                </View>
              </View>



              <View style={{ marginRight: 10 }}>
                <TouchableOpacity style={{ backgroundColor: '#D21F3C', padding: 5, borderRadius: 5, width: 70, justifyContent: 'center', alignItems: 'center', height: 30 }} >
                  <Text style={styles.buttonText}>Sell</Text>
                </TouchableOpacity>
              </View>

            </View>

            <View style={{ justifyContent: 'space-between', backgroundColor: '#F2F2F7', borderRadius: 10, height: 40, margin: 10, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ marginStart: 3, marginRight: 3, color: 'blue', padding: 10 }}>Profit</Text>
              <Text style={{ marginStart: 3, marginRight: 3, color: 'green', padding: 10 }}>+$16,100(0.2%)</Text>
            </View>


            <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: 10 }}>

              <View >
                <Text style={{ marginStart: 3, marginRight: 3, color: 'blue' }}>Profit</Text>
                <Text style={{ marginStart: 3, marginRight: 3, color: 'black' }}>+$16,100(0.2%)</Text>
              </View>

              <View >
                <Text style={{ marginStart: 3, marginRight: 3, color: 'blue' }}>Profit</Text>
                <Text style={{ marginStart: 3, marginRight: 3, color: 'black' }}>+$16,100(0.2%)</Text>
              </View>
            </View>

            <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: 10 }}>

              <View >
                <Text style={{ marginStart: 3, marginRight: 3, color: 'blue' }}>Profit</Text>
                <Text style={{ marginStart: 3, marginRight: 3, color: 'black' }}>+$16,100(0.2%)</Text>
              </View>

              <View >
                <Text style={{ marginStart: 3, marginRight: 3, color: 'blue' }}>Profit</Text>
                <Text style={{ marginStart: 3, marginRight: 3, color: 'black' }}>+$16,100(0.2%)</Text>
              </View>
            </View>



          </View>




          <View style={{ backgroundColor: 'white', borderRadius: 10, marginTop: 10, flexDirection: 'row', padding: 10, margin: 10 }}>
            <Image source={require('../../assets/images/recharge.png')} style={{ margin: 10 }} />
            <View>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '85%', height: 30, alignItems: 'center' }}>
                <Text style={{ marginStart: 3, marginRight: 3, color: 'black' }}>15 of 15 Backtest used </Text>
                <Image source={require('../../assets/images/navigation_arrow.png')} style={{ marginRight: 10, }} />
              </View>
              <View style={{ height: 1, backgroundColor: '#C7CED1', width: '75%', marginLeft: 10, marginTop: 10 }} />
              <Text style={{ marginStart: 3, marginRight: 3, marginTop: '10', color: 'black' }}>Renews on 05 Feb 2024</Text>
              <View style={{ marginRight: 10 }}>
                <TouchableOpacity style={{ backgroundColor: '#6C5DD3', padding: 5, borderRadius: 5, width: '75%', justifyContent: 'center', alignItems: 'center', height: 30, flexDirection: 'row', marginTop: 10 }} >
                  <Image source={require('../../assets/images/refresh.png')} style={{ marginLeft: 10, }} />
                  <Text style={styles.buttonText}>RECHARGE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{ backgroundColor: 'white', borderRadius: 10, marginTop: 10, flexDirection: 'row', padding: 10, margin: 10 }}>
            <Image source={require('../../assets/images/recharge.png')} style={{ margin: 10 }} />
            <View>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '85%', height: 30, alignItems: 'center' }}>
                <Text style={{ marginStart: 3, marginRight: 3, color: 'black' }}>15 of 15 Backtest used </Text>
                <Image source={require('../../assets/images/navigation_arrow.png')} style={{ marginRight: 10, }} />
              </View>
              <View style={{ height: 1, backgroundColor: '#C7CED1', width: '75%', marginLeft: 10, marginTop: 10 }} />
              <Text style={{ marginStart: 3, marginRight: 3, marginTop: '10', color: 'black' }}>Renews on 05 Feb 2024</Text>
              <View style={{ marginRight: 10 }}>
                <TouchableOpacity style={{ backgroundColor: '#6C5DD3', padding: 5, borderRadius: 5, width: '75%', justifyContent: 'center', alignItems: 'center', height: 30, flexDirection: 'row', marginTop: 10 }} >
                  <Image source={require('../../assets/images/refresh.png')} style={{ marginLeft: 10, }} />
                  <Text style={styles.buttonText}>RECHARGE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{ backgroundColor: 'white', borderRadius: 10, marginTop: 10, marginBottom: 50, flexDirection: 'row', padding: 10, margin: 10 }}>
            <Image source={require('../../assets/images/recharge.png')} style={{ margin: 10 }} />
            <View>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '85%', height: 30, alignItems: 'center' }}>
                <Text style={{ marginStart: 3, marginRight: 3, color: 'black' }}>15 of 15 Backtest used </Text>
                <Image source={require('../../assets/images/navigation_arrow.png')} style={{ marginRight: 10, }} />
              </View>
              <View style={{ height: 1, backgroundColor: '#C7CED1', width: '75%', marginLeft: 10, marginTop: 10 }} />
              <Text style={{ marginStart: 3, marginRight: 3, marginTop: '10', color: 'black' }}>Renews on 05 Feb 2024</Text>
              <View style={{ marginRight: 10 }}>
                <TouchableOpacity style={{ backgroundColor: '#6C5DD3', padding: 5, borderRadius: 5, width: '75%', justifyContent: 'center', alignItems: 'center', height: 30, flexDirection: 'row', marginTop: 10 }} >
                  <Image source={require('../../assets/images/refresh.png')} style={{ marginLeft: 10, }} />
                  <Text style={styles.buttonText}>RECHARGE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ height: 80, }}></View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    margin: 5,
    height: 40,
    width: 50,
  },
  linearGradient: {
    height: 470,
    width: '100%',
    marginTop: -10,
    borderRadius: 10,  // Rounded corners

  },
  button: {
    backgroundColor: '#D21F3C',
    padding: 5,
    borderRadius: 5,
    width: 50,
    alignItems: 'center'
  }, buttonText: {
    color: '#fff',
    fontSize: 12,
  },
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
  dottedLine: {
    borderBottomWidth: 1,
    borderColor: 'black',
    borderStyle: 'dotted',
    width: '80%', // Adjust to the desired width
    marginBottom: 10,
    height: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});
