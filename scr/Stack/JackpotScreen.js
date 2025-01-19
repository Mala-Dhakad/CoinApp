import { View, Text, ScrollView,Image, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import Lucky from '../component/Lucky'
import LinearOne from '../component/LinearOne'
import LuckyScreen from '../component/LuckyScreen'

const JackpotScreen = () => {
  return (
    <View style={{flex:1,}}>
      <ScrollView>
        <ImageBackground source={require("../assets/image.png")} style={styles.back}/>

<View style={styles.header}>
                <Image source={require("../assets/back.png")} />
                <Text style={styles.text}>Jackpot Rounds</Text>
                <Image source={require("../assets/info.png")} style={styles.circle} />
            </View>


        <View style={styles.whitecolor}>
  <LuckyScreen imagesource={require("../assets/jackpot.png")}
  title={"Win 100 Coins"}
  titleone={"#111222"}
  titletwo={"17/04"}
  titlethree={"14%"}
  win={"Winners"}
  LinearOne={<LinearOne title={"Free Entry"}
  imageSource={require("../assets/coin.png")}/>}
  />

<LuckyScreen imagesource={require("../assets/jackpot.png")}
  title={"Win 500 Coins"}
  titleone={"#111227"}
  titletwo={"65/130"}
  titlethree={"50%"}
  win={"Winners"}
  LinearOne={<LinearOne title={"Free Entry"}
  imageSource={require("../assets/coin.png")}/>}
  />

<LuckyScreen imagesource={require("../assets/jackpot.png")}
  title={"Win 1000 Coins"}
  titleone={"#541227"}
  titletwo={"272/272"}
  titlethree={"100%"}
  win={"Winners"}
  LinearOne={<LinearOne title={"Free Entry"}
  imageSource={require("../assets/coin.png")}
  />}
  />

<LuckyScreen imagesource={require("../assets/jackpot.png")}
  title={"Win 2500 Coins"}
  titleone={"#971227"}
  titletwo={"24/200"}
  titlethree={"12%"}
  win={"Winners"}
  LinearOne={<LinearOne title={"Free Entry"}
  imageSource={require("../assets/coin.png")}
  />}
  />
  </View>
  </ScrollView>
    </View>
  )
}

export default JackpotScreen;
const styles=StyleSheet.create({
  whitecolor: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 10,
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
},
back:{
  flex:1,
  height:'100%',
  width:'100%',
  position:'absolute'
},
header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  textAlign: 'center',
  marginTop: 30,
  padding: 15,
},
text: {
  fontSize: 19,
  // fontWeight: "800",
  color: "white",
},
})