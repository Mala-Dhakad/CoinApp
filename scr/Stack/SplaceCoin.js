import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';

const SplaceCoin = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/background.png")} style={styles.background} />
      <Image source={require('../assets/Applogo.png')} style={styles.image} />
      <Text style={styles.coins}>mCoins</Text>
      <Text style={{ color: 'black' }}>Games & Earn Money</Text>
      
      <View style={styles.button}>
        <TouchableOpacity style={{ flexDirection: 'row', gap: 10 }} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.play}>play Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  image: {
    width: 144,
    height: 144,
  },
  button: {
    height: 48,
    width: 140,
    marginTop: "60%",
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  play: {
    color: "black",
  },
  coins: {
    fontWeight: "800",
    fontSize: 20,
    color: "black",
  },
});

export default SplaceCoin;
