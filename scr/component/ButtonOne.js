import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

function ButtonOne({ title,onPress }) {


  return (
    <TouchableOpacity activeOpacity={0.6}
      style={styles.mainConternar}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>

  )
}
export default ButtonOne
const styles = StyleSheet.create({
  mainConternar: {
    height: 50,
    width: "100%",
    borderRadius: 14,
    borderColor: "rgba(0, 0, 0, 0.25)",
    borderWidth: 1,
    justifyContent: 'center',
    alignItems:'center',
    paddingHorizontal: 10,
   top:40,
    backgroundColor:'rgba(130, 80, 255, 1)'
  },
  text: {
    fontWeight: '600',
    color: 'white',
    fontSize: 18,

  },
})
