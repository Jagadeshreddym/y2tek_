import { View, Text, TouchableOpacity, Animated, Switch, StyleSheet } from 'react-native';
import React, { useState } from 'react';


const CustomSwitch = ({ isOn, onToggle }) => {
  const [toggleValue] = useState(new Animated.Value(isOn ? 1 : 0)); // Use 0 or 1 to control the switch state

  const toggleSwitch = () => {
    Animated.timing(toggleValue, {
      toValue: isOn ? 0 : 1, // Toggle the value between 0 and 1
      duration: 300,
      useNativeDriver: false, // Set to false for handling styles directly (e.g., left position)
    }).start();
    onToggle(); // Call the onToggle function passed as a prop
  };

  const switchPosition = toggleValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 30], // Translate the switch knob from 0 to 30
  });

  const backgroundColor = toggleValue.interpolate({
    inputRange: [0, 0],
    outputRange: ['#D21F3C', '#4cd137'], // Light gray (off) and green (on)
  });

  return (
    <TouchableOpacity style={styles.switchContainer} onPress={toggleSwitch}>
      <Animated.View style={[styles.switchBackground, { backgroundColor }]}>
        <Animated.View style={[styles.switchKnob, { transform: [{ translateX: switchPosition }] }]} />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 20,
  },
  switchContainer: {
    width: 60,
    height: 30,
    borderRadius: 50,
    paddingBottom:5,
  },
  switchBackground: {
    flex: 1,
    borderRadius: 50,
    justifyContent: 'center',
  },
  switchKnob: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: 'white',
    position: 'absolute',
    top: 2,
    left: 5,
  },
});
export default CustomSwitch;