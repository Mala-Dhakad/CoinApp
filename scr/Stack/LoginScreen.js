import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Button from '../component/Button'

const { width, height } = Dimensions.get('window');
console.log({height,width});

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
   <ImageBackground source={require("../assets/background.png")}
   style={styles.background}/>
   {/* { width: width * 0.9, height: height * 0.9 } */}
    <Image source={require('../assets/Applogo.png')}
    style={styles.image}/>
  
    <Text style={styles.sign}>Sign up for mCoins</Text>
    <Text style={{color:"black",}}>Start earning mony today</Text>
   
    <View style={{marginTop:"50%",}}>
   
    <Button onPress={()=>navigation.navigate("BottomScreen")}
    imageSource={require("../assets/google.png")}
    title={"Continue with google"}/>

    <Button
    imageSource={require("../assets/facebook.png")}
     title={"Continue with facebook"}/>
    </View>
    <Text style={styles.Privacy}>Privacy Policy</Text>
    </View>
  )
}

export default LoginScreen
const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
       
      },
    background: {
        flex: 1,
        height: "100%",
        width: "100%",
        position: "absolute",
        resizeMode:'cover'
      },
      image: {
        width: 144,
        height: 144,
        justifyContent: 'center',
        alignItems: 'center',
     
      },
      button: {
        height: 48,
        width: 140,
        marginTop: "20%",
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
      sign:{
        color:"black",
        fontSize:18,
        fontWeight:"800"
      },
      Privacy:{
        color:'white',
        marginTop:30,
      },
})