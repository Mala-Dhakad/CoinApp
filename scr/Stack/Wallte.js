import { View, Text, Alert, Image, ImageBackground, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import ButtonOne from '../component/ButtonOne'


const Wallte = ({ navigation }) => {
  
  return (
   
    <View style={{ flex: 1 }}>
      <ScrollView>
      <ImageBackground source={require("../assets/image.png")} style={styles.backimage} />
      <View style={styles.direction}>
        <Image source={require("../assets/back.png")} />
        <Text style={{
          color: 'white',
          fontSize: 20,
        }}>Wallet</Text>
        <Image source={require("../assets/info.png")} />
      </View>
      <View style={styles.whitecolor}>



        <Text style={styles.reward}>Transfer rewards via</Text>
        <ButtonOne
        onPress={()=> navigation.navigate("PaytmOne")}
          imageSource={require("../assets/icons.png")}
          titleone={"Paytm"}
          textImage={require("../assets/circle.png")}
          secondText={"Redeem Paytm using coins"} style={[styles.bottum]}
        />


        <ButtonOne
          onPress={()=> navigation.navigate("PaytmOne")}
          imageSource={require("../assets/iconone.png")}
          titleone={"UPI"}
          textImage={require("../assets/circle.png")}
          secondText={"Redeem Paytm using coins"} style={[styles.bottum]}
        />

        <ButtonOne
          onPress={()=> navigation.navigate("PaytmOne")}
          imageSource={require("../assets/icon.png")}
          titleone={"Google Play Card"}
          textImage={require("../assets/circle.png")}
          secondText={"Redeem Paytm using coins"} style={[styles.bottum]}
        />
      </View>

      </ScrollView>
    </View>

  )
}

export default Wallte;
const styles = StyleSheet.create({
  backimage: {
    flex: 1,
    height: '100%',
    width: '100%',
    position: "absolute"
  },
  direction: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    gap: 60,
  },
  whitecolor: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 70,
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
  },
  bottum: {
    color: 'black',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10,
  },
  reward: {
    fontSize: 18,
    fontWeight: "800",
  color:'black',
    margin: 10,
  }
})