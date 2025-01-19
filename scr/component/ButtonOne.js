import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

function ButtonOne({ title, onPress, secondText, textImage, titleone, imageSource }) {


  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity activeOpacity={0.6}
        style={styles.mainConternar}
        onPress={onPress}>
        <View style={styles.flex}>
          <Image source={imageSource} style={styles.image} />
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.textone}>{titleone}</Text>
            <Text style={styles.secondtextstyle}>{secondText} </Text>
          </View>
          <Image source={textImage} style={styles.imageone} />
        </View>
      </TouchableOpacity>
    </View>
  )
}
export default ButtonOne
const styles = StyleSheet.create({
  mainConternar: {
    height: 90,
    width: "100%",
    borderRadius: 14,
    borderColor: "gray",
    // borderWidth: 1,
   backgroundColor: "rgba(113, 26, 221, 0.05)",
  },
  viewStyle: {
    margin: 10,
  },

  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 40,
    height: 40,
    margin: 10,
  },
  textone: {
    marginTop: 15,
    color: 'black',
    fontWeight: '800',
  },
  imageone: {
    margin: 15,
    marginTop:25,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    color: "black",
    margin: 10,
  },

  secondtextstyle: {
    fontSize: 15,
    fontWeight: '800',
    justifyContent: 'center',
    alignSelf: 'center',

  },
})
