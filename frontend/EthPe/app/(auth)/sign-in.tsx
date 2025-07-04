import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { login } from '../../lib/api'; // adjust path

const SignInScreen: React.FC = () => {
  const router = useRouter();
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await login(email, password);
      console.log(res);

      // Store auth token here (e.g., AsyncStorage)
      // Then navigate:
      router.replace('/(tabs)/home');
    } catch (err: any) {
      Alert.alert('Login failed', err.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      {/* <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Logo</Text>
      </View> */}

      {/* Title */}
      <Text style={styles.title}>EthPe</Text>

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>
        Welcome to EthPe
      </Text>

      {/* Sign In */}
      <Text style={styles.signInText}>Sign in</Text>

      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setUsername}
        placeholderTextColor="#ccc"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#ccc"
        secureTextEntry
      />

      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>


      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.divider} />
      </View>

      {/* Create Account */}
      <Text style={styles.createAccountText}>
        If you don't have account then,
        <Text style={styles.createAccountLink}> Create account</Text>
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    backgroundColor: '#ccc',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
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
});

export default SignInScreen;