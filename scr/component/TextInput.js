import { View, Text, StyleSheet ,TextInput} from 'react-native'
import React from 'react'
import {  } from 'react-native-gesture-handler'

function TextInputOne({ title, onPress }) {


  return (
    <TextInput 
      style={styles.mainConternar}
      placeholder=''>
      <Text style={styles.text}>{title}</Text>
    </TextInput>

  )
}
export default TextInputOne
const styles = StyleSheet.create({
  mainConternar: {
    height: 28,
    width:162 ,
    backgroundColor:"rgba(130, 80, 255, 0.1)50% ",
    borderRadius: 6,
    borderColor: "rgba(0, 0, 0, 0.25)",
    borderWidth: 1,
    justifyContent:'center',
    marginTop: 10,
  },
  text: {
    fontWeight: '600',
    color: 'black',
    fontSize: 14,

  },
})
