import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useRouter, Link } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../../lib/api';
import logo from '../assets/logo.png'

const SignInScreen: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await login(email, password);

      // Save token and email
      await AsyncStorage.setItem('token', res.token);
      await AsyncStorage.setItem('email', res.email);

      // Navigate to protected tabs
      router.replace('/(tabs)/home');
    } catch (err: any) {
      console.error(err);
      Alert.alert('Login failed', err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      <Text style={styles.text}>Welcome to EthPe, please login to continue</Text>
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ccc"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.createAccountText}>
        No account?{' '}
        <Link href="/(auth)/sign-up" style={styles.createAccountLink}>
          Register
        </Link>
      </Text>
    </View>
  );
};



const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200
  },
  logoContainer: {
    // backgroundColor: 'red',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#0c0000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoText: {
    fontSize: 18,
    color: '#000',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  welcomeText: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
  },
  signInText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    color: '#fff',
    marginBottom: 5,
    marginLeft: 10,
  },
  input: {
    width: '100%',
    backgroundColor: '#333',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    color: '#fff',
  },
  forgotText: {
    alignSelf: 'flex-end',
    color: 'blue',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#0000ff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#fff',
  },
  orText: {
    color: '#fff',
    marginHorizontal: 10,
  },
  createAccountText: {
    color: '#fff',
    textAlign: 'center',
  },
  createAccountLink: {
    color: 'blue',
  },
  text: {
    color: 'white',
    fontSize: 18,
  }
});

export default SignInScreen;