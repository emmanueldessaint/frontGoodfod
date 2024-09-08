import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function CreateAccount() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Create Account</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
        />
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
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
        />

        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By signing up you agree to our{' '}
          <Text style={styles.linkText}>Terms conditions</Text> &{' '}
          <Text style={styles.linkText}>Privacy policy</Text>
        </Text>

        <TouchableOpacity style={styles.socialButton} activeOpacity={0.7}>
          <FontAwesome name="facebook" size={24} color="#fff" style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Connect with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#4285F4' }]} activeOpacity={0.7}>
          <AntDesign name="google" size={24} color="#fff" style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Connect with Google</Text>
        </TouchableOpacity>

        <View style={styles.signInLinkContainer}>
          <Text style={styles.signInText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/Signin')}>
            <Text style={styles.signInLink}>Sign In</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
  signUpButton: {
    backgroundColor: '#e59502',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  signUpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  termsText: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
  },
  linkText: {
    color: '#007BFF',
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
  signInLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signInText: {
    fontSize: 14,
  },
  signInLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});