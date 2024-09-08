import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SignIn() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.push('/welcome')}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Sign In</Text>
        </View>

        <Text style={styles.instructionText}>
          Enter your phone number or Email address for sign in. Enjoy your food :)
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />

        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton} activeOpacity={0.7}>
          <FontAwesome name="facebook" size={24} color="#fff" style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Connect with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#4285F4' }]} activeOpacity={0.7}>
          <AntDesign name="google" size={24} color="#fff" style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Connect with Google</Text>
        </TouchableOpacity>

        <View style={styles.signUpLinkContainer}>
          <Text style={styles.signUpText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/createAccount')}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
    
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  instructionText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  signInButton: {
    backgroundColor: '#e59502',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  signInButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#007BFF',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4267B2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  socialButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  signUpLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    fontSize: 14,
  },
  signUpLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});