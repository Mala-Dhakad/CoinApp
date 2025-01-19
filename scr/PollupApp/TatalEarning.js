import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Tatal from '../PollupAppCom/Tatal'
import Reward from '../PollupAppCom/Reward'
import ButtonGoogle from '../PollupAppCom/ButtonGoogle'
import RewardOne from '../PollupAppCom/RewardOne'
import MethodButton from '../PollupAppCom/MethodButton'

const TatalEarning = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.center}>
        <Text style={styles.text}>Tatal Earning</Text>
        <RewardOne imageSource={require("../assets/Star.png")} 
        title={"Coins"}
        titleone={"200"}/>
      </View>
      <Text style={styles.payout}>Pay-Out</Text>

      <View style={{ flexDirection: 'row' }}>
        <Tatal imageSource={require("../assets/Groupone.png")} />
        <Tatal imageSource={require("../assets/Grouptwo.png")} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Tatal imageSource={require("../assets/Grouptwo.png")} />
        <Tatal imageSource={require("../assets/Groupthree.png")} />
      </View>
<MethodButton title={"link New Method"}/>
    </View>
  )
}

export default TatalEarning;
const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
    marginTop:20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    height:200,
    width:'100%',
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
  },
  payout:{
    margin:20,
    color:'black',
    fontSize:17,
    fontWeight:'700',
  },

})