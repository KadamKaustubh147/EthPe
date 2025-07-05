import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const Profile = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('email');
      await AsyncStorage.removeItem('walletAddress');

      Alert.alert('Logged out', 'You have been logged out.');
      router.replace('/(auth)/sign-in');
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Failed to logout');
    }
  };

  const handleConnectMetaMask = () => {
    // Does nothing for now
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Profile Screen</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Connect with MetaMask" onPress={handleConnectMetaMask} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',       // horizontal center
    justifyContent: 'center',   // vertical center for buttons
    padding: 20,
  },
  header: {
    position: 'absolute',
    top: 80,                    // adjust as needed
    width: '100%',
    alignItems: 'start',
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
  buttonContainer: {
    width: '70%',
    marginVertical: 10,
  },
});
