import axios from "axios";
import { useState } from "react";
import Geolocation from 'react-native-geolocation-service';

const apiKey = 'AIzaSyDRRtJxvr9Vf25MFPjYCNXuwsi9-qAUglQ';

async function fetchAddress(latitude: number, longitude: number)
{
    console.log('https://maps.googleapis.com/maps/api/geocode/json?latlng=$'+{latitude}+',$'+{longitude}+'&key=$'+{apiKey});
    try {
    const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
      );
      console.log(response.data);
      if (response.data.status === 'OK') {
        const formattedAddress = response.data.results[0].formatted_address;
        console.log(formattedAddress);
      } else {
        console.log('No address found');
      }
    } catch (error) {
        console.error('Error fetching address:', error);
       console.log('Error fetching address');
      }
}
export const getAddress = async () => {

  try {
    console.log('get address');
    Geolocation.getCurrentPosition(
        position => {
          console.log('lat and log',position.coords.latitude + ' '+ position.coords.longitude);
          fetchAddress(position.coords.latitude ,position.coords.longitude);
        },
        error => {
          console.error(error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
  } catch (error) {
    console.error('Error fetching address:', error);
   console.log('Error fetching address');
  }
};