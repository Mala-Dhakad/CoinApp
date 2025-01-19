import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

const Oneimage = () => {
  return (
    <View style={{flex:1}}>
   <ImageBackground source={require("../assets/image.png")} style={styles.imageback}/>
    </View>
  )
}

export default Oneimage
const styles=StyleSheet.create({
  imageback:
  { flex:1,
    height:'100%',
    width:'100%',
    position:'absolute',
  }

})