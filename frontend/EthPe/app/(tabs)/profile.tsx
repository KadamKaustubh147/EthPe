import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const ProfileScreen: React.FC = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('email');
    router.replace('/(auth)/sign-in');
  };

    return ( <Button title="Logout" onPress={handleLogout} /> );
}
 
export default ProfileScreen;