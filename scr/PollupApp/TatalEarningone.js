import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ReferCom from '../PollupAppCom/ReferCom'
import RewardOne from '../PollupAppCom/RewardOne'
import Tatal from '../PollupAppCom/Tatal'

const TatalEarningone = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.maincontenair}>
        <Text style={styles.total}>Tatal earning</Text>
        <View style={{ flexDirection: 'row' }}>
          <RewardOne imageSource={require("../assets/pollupcoin.png")}
            title={"Coins"}
            titleone={"200"} />
          <RewardOne imageSource={require("../assets/Star.png")}
            title={"Coins"}
            titleone={"0"} />
        </View>
      </View>
      <Text style={styles.text}>pay-out</Text>
      <View style={{ flexDirection: 'row' }}>
        <Tatal title={"200 Coins"}
          titleone={"₹ 10"}
          titletwo={"Withdraw"} />
        <Tatal title={"200 Coins"}
          titleone={"₹ 10"}
          titletwo={"Withdraw"} />
      </View>


      <View style={{ flexDirection: 'row' }}>
        <Tatal title={"200 Coins"}
          titleone={"₹ 10"}
          titletwo={"Withdraw"} />
        <Tatal title={"200 Coins"}
          titleone={"₹ 10"}
          titletwo={"Withdraw"} />
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Tatal title={"200 Coins"}
          titleone={"₹ 10"}
          titletwo={"Withdraw"} />
        <Tatal title={"200 Coins"}
          titleone={"₹ 10"}
          titletwo={"Withdraw"} />
      </View>

      
    </View>

  )
}

export default TatalEarningone;
const styles = StyleSheet.create({
  maincontenair: {
    height: 268,
    width: '100',
    padding: 10,
    borderWidth: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  total: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    marginTop: 50,
  },
  text: {
    fontSize: 18,
    fontWeight: "800",
    color: 'black',
    margin: 15,
  }
})