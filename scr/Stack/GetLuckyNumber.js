
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import Convert from '../component/Convert'

const GetLuckyNumber = () => {
  return (
    <View style={{flex:1}}>
      <ImageBackground source={require("../assets/image.png")} style={styles.backimage}>
      <View style={styles.headerContainer}>
        <Image source={require("../assets/back.png")} style={styles.back}/>
        <Text style={styles.get}>Get Lucky Number</Text>
      </View>
      <Image source={require("../assets/background.png")} style={styles.second}/>
      <Image source={require("../assets/board.png")} style={styles.board}/>
      <Text style={styles.textBelowBoard}>Rotate a Wheel to Select a{"\n"} number</Text>
      <Convert title={"Done"} style={styles.convertButton}/>
      </ImageBackground>

    </View>
  )
}

export default GetLuckyNumber
const styles = StyleSheet.create({
  backimage:{
    flex:1,
    height:'100%',
    width:'100%'
  },
  row:{
    flexDirection:'row',
    margin:10,
  },
  get:{
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 10,
  },
  back:{
    width: 30, 
    height: 30, 
    position: 'absolute', 
    left: 10,

  },
  second:{
    height:"100%",
    width:'100%',
    borderTopRightRadius:15,
    borderTopLeftRadius:15,
    marginTop:90,
    position:'absolute',
  },
  board:{
    position: 'absolute',      
    top: '25%',
    justifyContent:'center', 
    alignSelf:'center',                             
  },
  textBelowBoard: {
    position: 'absolute',  
    top: '50%',           
    width: '100%',
    textAlign: 'center',   
    fontSize: 15,   
    color: 'black',      
    fontWeight: '400',     
  },
  convertButton: {
    position: 'absolute',
    top: '65%',  
    width: '100%',
    alignSelf: 'center', 
    marginTop: 20, 
  },
  headerContainer: {
    position: 'absolute',
    top: 20,
    width: '100%',
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
  },


}) 