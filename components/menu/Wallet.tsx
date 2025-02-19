import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Wallet() {
  return (
    <View>
      <View style={styles.shadowBox} >
        <LinearGradient
          colors={['#2AACF5', '#9100EB']}
          style={styles.linearGradient}
        >
          <Text style={{ marginTop: '10%', marginStart: 10, color: 'white' }}>CURRENT BALANCE</Text>
          <Text style={{ marginTop: 10, marginStart: 10, color: 'white' }}>$234.09</Text>

          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <View style={{ borderRadius: 10, height: 70, backgroundColor: 'white', width: '47%', marginLeft: '2%', marginRight: '2%' }}>
              <Text style={{ marginTop: '10%', marginStart: 10 }}>SPOT BALANCE</Text>
              <Text style={{ marginTop: 10, marginStart: 10 }}>$234.09</Text>
            </View>
            <View style={{ borderRadius: 10, height: 70, backgroundColor: 'white', width: '47%', marginRight: '5%' }}>
              <Text style={{ marginTop: '10%', marginStart: 10, }}>MARGIN BALANCE</Text>
              <Text style={{ marginTop: 10, marginStart: 10, }}>$234.09</Text>
            </View>
          </View>

        </LinearGradient>
      </View>

      <View style={{ marginTop: 40, flexDirection: 'row', borderRadius: 10, width: '95%', height: 50, backgroundColor: 'white', alignItems: 'center', marginLeft: 10, marginEnd: 10, justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../../assets/images/deposit.png')} style={{ marginLeft: 10 }} />
          <Text style={{ marginTop: 5, marginStart: 10 }}>Total Deposit</Text>
        </View>
        <Text style={{ marginTop: 5, marginEnd: 20 }}>$234.09</Text>
      </View>

      <View style={{ marginTop: 10, flexDirection: 'row', borderRadius: 10, width: '95%', height: 50, backgroundColor: 'white', alignItems: 'center', marginLeft: 10, marginEnd: 10, justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../../assets/images/withdraw.png')} style={{ marginLeft: 10 }} />
          <Text style={{ marginTop: 5, marginStart: 10 }}>Total Withdrawn</Text>
        </View>

        <Text style={{ marginTop: 5, marginEnd: 20, justifyContent: 'flex-end' }}>$234.09</Text>
      </View>

      <View style={{ marginTop: 10, flexDirection: 'row', borderRadius: 10, width: '95%', height: 50, backgroundColor: 'white', alignItems: 'center', marginLeft: 10, marginEnd: 10, justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../../assets/images/blocked.png')} style={{ marginLeft: 10 }} />
          <Text style={{ marginTop: 5, marginStart: 10 }}>Blocked Amount</Text>
        </View>
        <View style={{ flexDirection: 'row', marginRight: 10 }}>
          <Text style={{ marginTop: 5, marginStart: 10 }}>$234.09</Text>
          <Image source={require('../../assets/images/navigation_arrow.png')} />
        </View >

      </View>

      <View style={{ marginTop: 10, flexDirection: 'row', borderRadius: 10, width: '95%', height: 50, backgroundColor: 'white', alignItems: 'center', marginLeft: 10, marginEnd: 10, justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../../assets/images/history.png')} style={{ marginLeft: 10 }} />
          <Text style={{ marginTop: 5, marginStart: 10 }}>Transaction History</Text>
        </View>
        <View style={{ flexDirection: 'row', marginRight: 10 }}>
          <Image source={require('../../assets/images/navigation_arrow.png')} style={{ marginLeft: 10 }} />
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 80 }}>
        <View style={styles.withDrawShadowBox}>
          <LinearGradient
            colors={['#FF5A5A', '#7E1BBC']}
            style={styles.withdrawLinearGradient}
          >
            <Image source={require('../../assets/images/deposit_white.png')} />
            <Text style={{ marginTop: 5, color: 'white' }}>Withdrawn</Text>
          </LinearGradient>
        </View>

        <View style={styles.depositShadowBox}>
          <LinearGradient
            colors={['#2AACF5', '#9100EB']}
            style={styles.depositLinearGradient}
          >
            <Image source={require('../../assets/images/withdraw_white.png')} />
            <Text style={{ marginTop: 5, color: 'white' }}>Deposit</Text>
          </LinearGradient>
        </View>
      </View>

    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  linearGradient: {
    height: 190,
    width: '100%',
    marginTop: -10,
    borderRadius: 10,  // Rounded corners

  },
  withdrawLinearGradient: {
    height: 80,
    width: '100%',
    marginTop: -8,
    borderRadius: 10,  // Rounded corners
    justifyContent: 'center',
    alignItems: 'center'
  },
  depositLinearGradient: {
    height: 80,
    width: '100%',
    marginTop: -8,
    borderRadius: 10,  // Rounded corners
    justifyContent: 'center',
    alignItems: 'center'

  },
  shadowBox: {
    width: '100%',
    height: 193,
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
  withDrawShadowBox: {
    width: '40%',
    height: 83,
    backgroundColor: '#FF5A5A',
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
  depositShadowBox: {
    width: '40%',
    height: 83,
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
});
