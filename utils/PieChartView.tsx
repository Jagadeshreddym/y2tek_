import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Pie from 'react-native-pie-chart';

const PieChartView = () => {
  const [series, setSeries] = useState([
    { value: 12, color: '#fbd203' },
    { value: 28, color: '#ffb300' },
    { value: 32, color: '#ff9100' },
    { value: 28, color: '#ff6c00' },
  ]);

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

  return (
    <View style={styles.container}>
      <View style={styles.pieChartContainer}>
        {/* Pie chart */}
        <Pie
          radius={100}
          series={series.map(item => item.value)}
          colors={series.map(item => item.color)}
        />

        {/* Labels */}
        {slicesWithAngles.map((slice, index) => {
          const angle = slice.middleAngle;
          const labelX = 100 + 60 * Math.cos((angle - 90) * (Math.PI / 180));
          const labelY = 100 + 60 * Math.sin((angle - 90) * (Math.PI / 180));

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
  pieChartContainer: {
    position: 'relative',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default PieChartView;
