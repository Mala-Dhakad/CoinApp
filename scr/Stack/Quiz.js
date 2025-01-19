import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import Convert from '../component/Convert'
import Choose from '../component/Choose'

const Quiz = () => {
  return (
    <View style={{ flex: 1, }}>
      <ImageBackground source={require("../assets/image.png")} style={styles.backimage} />

      <View style={styles.direction}>
        <Image source={require("../assets/back.png")}  />
        <Text style={styles.Tickets}>Quiz</Text>
      </View>
      <View style={styles.whitecolor}>
        <Image source={require("../assets/quiz.png")} style={styles.quizimage} />
        <View style={{ marginTop: 40, }}>
          <Choose title={"Choose Category"}
            imageSoure={require('../assets/backbutton.png')} />
          <Choose title={"Choose Category"}
            imageSoure={require('../assets/backbutton.png')} />
          <Choose title={"Choose Category"}
            imageSoure={require('../assets/backbutton.png')} />
          <Convert title={"Continue"} />
        </View>
      </View>
    </View>
  )
}

export default Quiz
const styles = StyleSheet.create({
  backimage: {
    flex: 1,
    height: '100%',
    width: "100%",
    position: 'absolute',
  },
  whitecolor: {
    flex: 1,
    marginTop: 70,
    backgroundColor: 'white',
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
  },
  quizimage: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  direction: {
    flexDirection: 'row',
    marginTop: 50,

  },

  Tickets:{
    color: 'white',
    fontSize: 20,
    width:'100%',
    textAlign:'center'
    
},

})