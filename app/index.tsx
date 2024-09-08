import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import { useRouter } from 'expo-router';  // Utilisez useRouter pour la navigation avec expo-router


export default function Index() {

  const [step, setStep] = useState(0);
  const router = useRouter();  // Initialisez useRouter pour naviguer

  const handleClickNext = () => {
    if (step === 3) {
      router.push('/sign-in'); 
    } else {
      setStep(prevStep => (prevStep + 1) % 4);
    }
  }

  const getImageSource = (step) => {
    switch (step) {
      case 0:
        return require('../assets/images/Illustration.png');
      case 1:
        return require('../assets/images/Illustration2.png');
      case 2:
        return require('../assets/images/Illustration3.png');
      case 3:
        return require('../assets/images/Illustration4.png');
      default:
        return require('../assets/images/Illustration.png'); // Image par défaut au cas où
    }
  };

  const getTextSource = (step) => {
    switch (step) {
      case 0:
        return "It's à pleasure to meet you. We are excited that you're here so let's get started !";
      case 1:
        return "Order form the best local restaurants with easy, on-demand delivery.";
      case 2:
        return "Free delivery for new customers via Apple Pay and others payment methods.";
      case 3:
        return "Easily find your type of food craving and you'll get delivery in wide range.";
      default:
        return "It's à pleasure to meet you. We are excited that you're here so let's get started !"; // Texte par défaut au cas où
    }
  };
  
  const getTitleSource = (step) => {
    switch (step) {
      case 0:
        return "Welcome";
      case 1:
        return "All your favorites";
      case 2:
        return "Free delivery offers";
      case 3:
        return "Choose your food";
      default:
        return "Welcome"; // Titre par défaut au cas où
    }
  };

  const imageSource = getImageSource(step);
  const TextSource = getTextSource(step);
  const TitleSource = getTitleSource(step);

  return (
    <View
      style={{
        flex: 1,
        // marginTop: 80,
        alignItems: "center",
      }}
    >
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Image
          source={require('../assets/images/g12.png')}
        />
        <Text style={{fontSize: 36, marginLeft: 30, fontWeight: 700, marginTop: 5}}>GoodFood</Text>
      </View>
      <Image
          style={{marginTop: 40, marginBottom: 30}}
          source={imageSource}
        />
      <View style={{display: 'flex', justifyContent: "center"}}>
        <Text style={{fontSize: 24, fontWeight: 700, marginTop: 5}}>{TitleSource}</Text>
      </View>
      <View style={{display: 'flex', justifyContent: "center", marginLeft: 40, marginRight: 40, marginTop: 20}}>
        <Text style={{fontSize: 20}}>{TextSource}</Text>
      </View>
      <TouchableOpacity onPress={handleClickNext} style={{backgroundColor: 'rgb(229 149 2)', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, width: '90%', marginTop: 50, borderRadius: 6}}>
        <Text style={{textAlign: 'center', color: 'white', fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: 'uppercase'}}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
}
