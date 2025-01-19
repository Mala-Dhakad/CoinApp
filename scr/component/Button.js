import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

function Button({ title, onPress, backgroundColor, fontSize, fontWeight, secondText, textImage, titleone, imageSource }) {


  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity activeOpacity={0.6}
        style={styles.mainConternar}
        onPress={onPress}>
        <View style={styles.flex}>
          <Image source={imageSource} style={styles.image} />
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
export default Button
const styles = StyleSheet.create({
  mainConternar: {
    height: 55,
    width:314,
    borderRadius: 14,
    borderColor: "rgba(0, 0, 0, 0.25)",
    borderWidth: 1,
    paddingRight: 20,
    textAlign: 'center',
    backgroundColor:'white',
    justifyContent:'center',


  },
  viewStyle: {
   marginTop:30,
   paddingHorizontal:30,
  },
  text: {
    color: 'black',
    fontSize:16,
    fontWeight:'800'
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  image: {
    width: 25,
    height: 25,
    marginHorizontal: 15,
  },
})

