import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


const Tatal = ({title, titleone, titletwo }) => {
  return (
    <View style={{ flex: 1, }}>
      <View style={styles.maincontenar}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.center}>
          <Text style={styles.ten}>{titleone}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.window}>{titletwo}</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default Tatal;
const styles = StyleSheet.create({
  maincontenar: {
    height: 150,
    width: 182,
    borderRadius: 19,
    backgroundColor: 'white',
    borderWidth: 1,
    margin: 10,
  },
  text: {
    margin: 10,
    color:'#EFA630',
    },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    gap: 10,
  },
  ten: {
    color: '#EFA630',
    fontSize: 18,
    fontWeight: '800',

  },
  button: {
    height: 44,
    width: 152,
    backgroundColor: 'rgb(137,135,147)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  window: {
    color: 'white',
  }
})