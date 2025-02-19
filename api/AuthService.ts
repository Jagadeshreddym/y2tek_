import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';  // Correct import

// ApiService.js
const API_URL = 'https://user.y2tek.io/';  // Example API URL
const BOT_API_URL = 'https://userbot.y2tek.io/';  // Example API URL

// Function to fetch data from API
export const getData = async (endpoint: any) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`,{
      method:'GET',
      headers:{
        'Accept': 'application/json',
         'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-IN,en-GB;q=0.9,en;q=0.8',
          'Content-Type': 'application/json ; text/html; charset=UTF-8',
          'Host': 'user.y2tek.io',
          'Origin': 'https://bot.y2tek.io',
          'Referer': 'https://bot.y2tek.io/'
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const saveHeaders = async ( result: any) => {

    // Store the token or any data (for example, using AsyncStorage)
    const accessToken = result.accessToken;
    const idToken = result.idToken;
    const refreshToken = result.refreshToken;
    const userName = result.userName;
    const tokenType = result.tokenType;
    const email = result.email;
    await AsyncStorage.setItem('accessToken', accessToken);
    await AsyncStorage.setItem('idToken', idToken);
    await AsyncStorage.setItem('refreshToken', refreshToken);
    await AsyncStorage.setItem('userName', userName);
    await AsyncStorage.setItem('tokenType', tokenType);
    await AsyncStorage.setItem('email', email);

}



// Function to post data to API (if needed)
export const postData = async (endpoint: any, data: any) => {

  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
         'Accept': 'application/json',
         'Accept-Encoding': 'gzip, deflate, br',
         'Accept-Language': 'en-IN,en-GB;q=0.9,en;q=0.8',
         'Content-Type': 'application/json ; text/html; charset=UTF-8',
         'Host': 'user.y2tek.io',
         'Origin': 'https://bot.y2tek.io',
         'Referer': 'https://bot.y2tek.io/',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to post data');
    }

    const result = await response.json();
    if(endpoint === 'login')
    {
      saveHeaders(result);
    }
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Function to post data to API (if needed)
export const getDataAfterLogInValidated = async (endpoint: any) => {

  const accessToken =  (await AsyncStorage.getItem('accessToken'));
  const idToken =  (await AsyncStorage.getItem('idToken'));
  const refreshToken =  (await AsyncStorage.getItem('refreshToken'));
  const tokenType =  (await AsyncStorage.getItem('tokenType'));
  const email =  (await AsyncStorage.getItem('email'));


  const rawHeaders = {
    'Accept': 'application/json',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-US,en;q=0.9',
    'Content-Type': 'application/json',
    'Host': 'example.com',
    'Origin': 'https://bot.y2tek.io',
    'Referer': 'https://bot.y2tek.io/',
    'Authorization': accessToken ? `Bearer ${accessToken}` : undefined,
    'x-api-key': '12345GATGAT34562CDRSCEEG3T',
    'x-id-token': idToken,
    'X-REFRESH-TOKEN': refreshToken,
  };
  
 // Clean up the headers to ensure no null or undefined values
const cleanedHeaders = Object.fromEntries(
  Object.entries(rawHeaders)
    .filter(([_, value]) => value != null)  // Remove null or undefined values
    .map(([key, value]) => [key, value as string]) // Ensure all values are strings
)

const url = `${API_URL}${endpoint}`;
console.log(url);
console.log(cleanedHeaders);
try {
  const response = await fetch(url,{
    method: 'GET',
    headers: cleanedHeaders,
    });
if (!response.ok) { 
  throw new Error('Failed to fetch data');
}
const data = await response.json();
return data;
} catch (error) {
console.error(error);
throw error;
}
};


// Function to post data to API (if needed)
export const getBotData = async (endpoint: any) => {

  const accessToken =  (await AsyncStorage.getItem('accessToken'));
  const idToken =  (await AsyncStorage.getItem('idToken'));
  const refreshToken =  (await AsyncStorage.getItem('refreshToken'));
  const tokenType =  (await AsyncStorage.getItem('tokenType'));
  const email =  (await AsyncStorage.getItem('email'));


  const rawHeaders = {
    'Accept': 'application/json',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-US,en;q=0.9',
    'Content-Type': 'application/json',
    'Host': 'example.com',
    'Origin': 'https://bot.y2tek.io',
    'Referer': 'https://bot.y2tek.io/',
    'Authorization': accessToken ? `Bearer ${accessToken}` : undefined,
    'x-api-key': '12345GATGAT34562CDRSCEEG3T',
    'x-id-token': idToken,
    'X-REFRESH-TOKEN': refreshToken,
  };
  
 // Clean up the headers to ensure no null or undefined values
const cleanedHeaders = Object.fromEntries(
  Object.entries(rawHeaders)
    .filter(([_, value]) => value != null)  // Remove null or undefined values
    .map(([key, value]) => [key, value as string]) // Ensure all values are strings
)

const url = `${BOT_API_URL}${endpoint}`;
console.log(url);
console.log(cleanedHeaders);
try {
  const response = await fetch(url,{
    method: 'GET',
    headers: cleanedHeaders,
    });
if (!response.ok) { 
  throw new Error('Failed to fetch data');
}
const data = await response.json();
return data;
} catch (error) {
console.error(error);
throw error;
}
};

 
