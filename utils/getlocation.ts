import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const GetLocation = () => {
  const [error, setError] = useState('');

  const requestLocationPermission = async () => {
    const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    if (result === RESULTS.GRANTED) {
      console.log('Location permission granted');
      getCurrentLocation();
    } else {
      console.log('Location permission denied');
      setError('Location permission denied');
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        console.log(position.coords);
      },
      (error) => {
        setError(error.message);
        console.warn(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      }
    );
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Button title="Get Location" onPress={getCurrentLocation} />
      {location ? (
        <Text>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <Text>Loading location...</Text>
      )}
    </View>
  );
};

export default GetLocation;
