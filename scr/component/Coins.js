import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Coins = ({ imageSource, title, onPress, titileone }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.contenar}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.textstyle}>{title}</Text>


        <LinearGradient
          colors={["#711ADD", "#8F33CF", "#A342C5", "#DA6FAB"]}
          style={{
            alignItems: 'center',
            top: 0,
            borderRadius: 18,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 10,
            height: 40,
            width: 80,

          }}>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{titileone}</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  contenar: {
    backgroundColor: "rgba(113, 26, 221, 0.05)",
    height: 152,
    width: 152,
  },
  image: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textstyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'black',
  },
  text: {
    color: 'white'
  },
})
export default Coins




