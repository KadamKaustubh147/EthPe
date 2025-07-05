import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import { useRouter, Link } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { register } from '../../lib/api';
import logo from '../assets/logo.png'

const SignUpScreen: React.FC = () => {
  const router = useRouter();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      Alert.alert('All fields are required');
      return;
    }

    try {
      const res = await register(email, password, name);

      if (res.token) {
        await AsyncStorage.setItem('token', res.token);
        await AsyncStorage.setItem('email', email);
        Alert.alert('Registered & Logged in!');
        router.replace('/'); // ✅ Go to app home
      } else {
        Alert.alert('Error', 'Could not register.');
      }
    } catch (error: any) {
      console.error(error);
      Alert.alert(
        'Error',
        error?.response?.data?.message || 'Something went wrong'
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo}/>
      </View>

      <Text style={styles.title}>EthPe</Text>

      <Text style={styles.welcomeText}>
        Welcome to EthPe
      </Text>

      <Text style={styles.signInText}>Sign up</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Email address"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
        <Text style={styles.loginButtonText}>Submit</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.divider} />
      </View>

      <Text style={styles.createAccountText}>
        If you have account then ,{' '}
        <Link href="/(auth)/sign-in" style={styles.createAccountLink}>
          Sign in
        </Link>
      </Text>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  logo:{
    width:200,
    height:200
  },
  container: {
    flex: 1,
    backgroundColor: '#0c0000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    // backgroundColor: '#ccc',
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
