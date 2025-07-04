import React, { useEffect, useState } from 'react';
import { Redirect } from 'expo-router';
// import AsyncStorage from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

const IndexScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      setIsLoggedIn(!!token);
      setIsLoading(false);
    };

    checkToken();
  }, []);

  if (isLoading) return null; // Or splash screen

  if (isLoggedIn) {
    return <Redirect href="/(tabs)/home" />;
  } else {
    return <Redirect href="/(auth)/sign-in" />;
  }
};

export default IndexScreen;
