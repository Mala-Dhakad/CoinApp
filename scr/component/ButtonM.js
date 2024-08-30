import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native'
import React from 'react'

function ButtonM({ title, onPress }) {


  return (
    <TouchableOpacity activeOpacity={0.6}
      style={styles.mainConternar}
      onPress={onPress}>
        <View style={styles.content}>
      <Text style={styles.text}>{title}</Text>
      <Image source={require('../assets/For.png')}
          style={styles.image}
          />
      </View>
    </TouchableOpacity>

  )
}
export default ButtonM
const styles = StyleSheet.create({
  mainConternar: {
    height: 53,
    width: "100%",
    borderRadius: 6,
    // backgroundColor:'rgba(184, 182, 182, 0.2)',
    borderColor: "rgba(0, 0, 0, 0.25)",
    borderWidth: 1,
   
    justifyContent:'center',
    paddingHorizontal: 10,
    marginTop: 24,
  },
  content:{
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 18,
    height: 18,
  
  },
  text: {
    // fontWeight: '600',
    color: 'black',
    fontSize: 14,

  },
})
