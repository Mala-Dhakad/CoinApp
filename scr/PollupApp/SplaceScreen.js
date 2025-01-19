import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import LoginScreenPollUp from './LoginScreenPollUp';
import { useNavigation } from '@react-navigation/native';


const SplaceScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000); 

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/splaceimage.png")} style={styles.splace}/>
      <Image source={require("../assets/PollupLogo.png")} style={styles.imagestyle} />
    </View>
  )
}

export default SplaceScreen
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  imagestyle: {
    width: 203,
    height: 78,

  },
  splace:{
    flex:1,
    height:'100%',
    width:"100%",
    position:'absolute',
  },
})