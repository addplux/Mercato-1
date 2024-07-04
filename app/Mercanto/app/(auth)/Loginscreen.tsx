import { router } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function LoginScreen({ }) {
  return (
    <ImageBackground 
      source={{ uri: 'https://thumbs.dreamstime.com/z/row-colorful-holographic-displays-glass-countertop-electronics-store-holographic-product-display-electronics-321730083.jpg?ct=jpeg' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Mercanto</Text>
        <Text style={styles.subtitle}>
          Shop smarter, live better with Mercanto.
        </Text>
        <TextInput 
          placeholder="Email" 
          placeholderTextColor="#aaa" 
          style={styles.input} 
        />
        <TextInput 
          placeholder="Password" 
          placeholderTextColor="#aaa" 
          secureTextEntry 
          style={styles.input} 
        />
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.replace('Home')}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.buttonOutline]} 
          onPress={() => {}}
        >
          <Text style={[styles.buttonText, styles.buttonOutlineText]}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#333',
    borderRadius: 25,
    paddingLeft: 20,
    marginBottom: 20,
    color: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#5aaf54',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#5aaf54',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonOutlineText: {
    color: '#5aaf54',
  },
});
