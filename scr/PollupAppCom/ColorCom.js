import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const ColorCom = ({ title, imageSource }) => {
  return (
    <View style={{ paddingHorizontal: 10, }}>
      <View style={styles.container}>
        <View style={styles.back}>
          <Image source={imageSource} style={styles.imagestyle} />
        </View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  )
}

export default ColorCom
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    backgroundColor: "#A853CD",
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  imagestyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  back: {
    backgroundColor: '#A853CD',
    height: 55,
    width: 55,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
})