import React from 'react';
import { Stack } from 'expo-router';
import BottomNav from './BottomNav';
import { View, StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome" />
      </Stack>
      <BottomNav /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});