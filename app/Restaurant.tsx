import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Restaurant() {
  const [isDelivery, setIsDelivery] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState('breakfast');

  const restaurantImage1 = require('../assets/images/imgRest1.jpg');
  const dishImage = require('../assets/images/imgRest3.jpg');

  const screenWidth = Dimensions.get('window').width;
  const menuWidth = screenWidth / 3;
  const underlineLeft = selectedMenu === 'breakfast' ? 0
    : selectedMenu === 'menu' ? menuWidth
    : 2 * menuWidth;

  return (
    <View style={styles.container}>
      <Image source={restaurantImage1} style={styles.coverImage} />

      <Text style={styles.restaurantName}>La brasserie enchantée - 123 rue imaginaire</Text>

      <View style={styles.ratingContainer}>
        <FontAwesome name="star" size={20} color="#FFD700" />
        <Text style={styles.ratingText}>4.4 (200+ avis) - Italien</Text>
      </View>

      <View style={styles.switchContainer}>
        <TouchableOpacity
          style={[styles.switchButton, isDelivery ? styles.switchButtonSelected : null]}
          onPress={() => setIsDelivery(true)}
        >
          <Text style={styles.switchText}>Livraison</Text>
          <Text style={styles.switchSubText}>25-40mn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.switchButton, !isDelivery ? styles.switchButtonSelected : null]}
          onPress={() => setIsDelivery(false)}
        >
          <Text style={styles.switchText}>À emporter</Text>
          <Text style={styles.switchSubText}>25-30mn</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Veg</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Gluten free</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Lactose free</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuFilterContainer}>
        <TouchableOpacity
          style={[styles.menuButton, selectedMenu === 'breakfast' && styles.menuButtonSelected]}
          onPress={() => setSelectedMenu('breakfast')}
        >
          <Text style={styles.menuText}>Breakfast{'\n'}2h-6h</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, selectedMenu === 'menu' && styles.menuButtonSelected]}
          onPress={() => setSelectedMenu('menu')}
        >
          <Text style={styles.menuText}>Menu{'\n'}11-15h</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, selectedMenu === 'dinner' && styles.menuButtonSelected]}
          onPress={() => setSelectedMenu('dinner')}
        >
          <Text style={styles.menuText}>Dinner Menu{'\n'}18-22h</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.underlineContainer}>
        <View style={[styles.underline, { width: menuWidth, left: underlineLeft }]} />
      </View>

      <View style={styles.dishContainer}>
        <View style={styles.dishTextContainer}>
          <Text style={styles.dishName}>Power greens and grains Salad (Veg)</Text>
          <Text style={styles.dishIngredients}>Salad with grains and power greens, aragula and spinach, chicken</Text>
        </View>
        <Image source={dishImage} style={styles.dishImage} />
      </View>
      <View style={styles.dishContainer}>
        <View style={styles.dishTextContainer}>
          <Text style={styles.dishName}>Power greens and grains Salad (Veg)</Text>
          <Text style={styles.dishIngredients}>Salad with grains and power greens, aragula and spinach, chicken</Text>
        </View>
        <Image source={dishImage} style={styles.dishImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  coverImage: {
    width: '100%',
    height: '20%',
    marginBottom: 20,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#333',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderRadius: 40,
    backgroundColor: '#e0e0e0',
    padding: 4,
    marginHorizontal: 20,
  },
  switchButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 40,
    alignItems: 'center',
    marginHorizontal: 2,
    backgroundColor: '#e0e0e0',
  },
  switchButtonSelected: {
    backgroundColor: '#fff',
  },
  switchText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchSubText: {
    fontSize: 14,
    color: '#555',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  filterButton: {
    flex: 1,
    padding: 10,
    backgroundColor: '#e59502',
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  filterText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  menuFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  menuButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
  },
  menuButtonSelected: {
    fontWeight: 'bold',
  },
  underlineContainer: {
    position: 'relative',
    height: 2,
    backgroundColor: '#000',
    marginHorizontal: 20,
  },
  underline: {
    position: 'absolute',
    bottom: 0,
    height: 2,
    backgroundColor: '#000',
  },
  dishContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 20
  },
  dishTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dishIngredients: {
    fontSize: 14,
    color: '#555',
  },
  dishImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});