import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Home() {

    const router = useRouter();

    const restaurantImage1 = require('../assets/images/imgRest1.jpg');
    const restaurantImage2 = require('../assets/images/imgREst.jpg');
    const restaurantImage3 = require('../assets/images/imgRest3.jpg');
    const featuredRestaurantImage1 = require('../assets/images/imgRepas1.jpg');
    const featuredRestaurantImage2 = require('../assets/images/imgRepas2.png');

    const navigateToRestaurant = () => {
        router.push('/Restaurant');
      };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.userName}>Happy Mile</Text>
          <Image
            source={{ uri: 'https://via.placeholder.com/60' }}
            style={styles.profileImage}
          />
        </View>

        <Text style={styles.subtitle}>Les mieux notés près de chez vous</Text>

        <View style={styles.restaurantsContainer}>
            <TouchableOpacity onPress={navigateToRestaurant}>
                <Image
                source={restaurantImage1}
                style={styles.restaurantImage}
                />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={navigateToRestaurant}>
                <Image
                source={restaurantImage2}
                style={styles.restaurantImage}
                />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={navigateToRestaurant}>
                <Image
                source={restaurantImage3}
                style={styles.restaurantImage}
                />
            </TouchableOpacity>
        </View>

        <View style={styles.restaurantWithText}>
          <Image
            source={featuredRestaurantImage1}
            style={styles.fullWidthImage}
          />
          <Text style={styles.restaurantText}>La brasserie enchantée - 123 rue imaginaire</Text>
        </View>

        <View style={styles.restaurantWithTextLast}>
          <Image
            source={featuredRestaurantImage2}
            style={styles.fullWidthImage}
          />
          <Text style={styles.restaurantText}>Le café du coin - 456 avenue fictive</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40

  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
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
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 20,
  },
  restaurantsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  restaurantImage: {
    width: width / 3 - 20, // Largeur pour que les images s'adaptent à la largeur de l'écran
    height: 200,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  restaurantWithText: {
    marginBottom: 20,
    padding: 10,
    marginTop: 50
  },
  fullWidthImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  restaurantText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
  restaurantWithTextLast: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 100
  },
});