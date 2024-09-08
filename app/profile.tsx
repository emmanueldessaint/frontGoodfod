import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Profile() {

    const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userName}>Happy Mile</Text>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.profileImage}
        />
      </View>

      <TouchableOpacity style={styles.customizeButton}>
        <Text style={styles.customizeButtonText}>Customize profile </Text>
      </TouchableOpacity>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionBox}>
          <Text style={styles.optionText}>Favoris</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionBox}>
          <Text style={styles.optionText}>Portefeuille</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionBox}>
          <Text style={styles.optionText}>Commandes</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.premiumButton}>
  <Text style={styles.premiumButtonText}>
    🍔 GoodFood Premium{"\n"}<Text style={styles.tryText}>Try free for 1 month</Text>
  </Text>
</TouchableOpacity>

<View style={styles.section}>
  <Text style={styles.sectionTitle}>Promotions</Text>
  <Text style={styles.sectionText}>Discover best discounts in your favorite restaurants</Text>
</View>

<View style={styles.section}>
  <Text style={styles.sectionTitle}>Invite friends</Text>
  <Text style={styles.sectionText}>Invite friends to benefit 5€ on your next order</Text>
</View>

<View style={styles.section}>
  <Text style={styles.sectionTitle}>Confidentiality</Text>
  <Text style={styles.sectionText}>Learn how we keep your information safe and private.</Text>
</View>

<View style={styles.section}>
  <Text style={styles.sectionTitle}>About</Text>
  <Text style={styles.sectionText}>Discover more about GoodFood and our mission to serve you better.</Text>
</View>

    <TouchableOpacity style={styles.logoutButton} onPress={() => router.push('/Signup')}>
        <Text style={styles.logoutButtonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 40
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  customizeButton: {
    backgroundColor: '#e59502',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    marginBottom: 20,
  },
  customizeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionBox: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  premiumButton: {
    backgroundColor: '#e59502',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  
  premiumButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  
  tryText: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  
  section: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  
  sectionText: {
    fontSize: 14,
    color: '#555',
  },
  logoutButton: {
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007BFF',
  },
});