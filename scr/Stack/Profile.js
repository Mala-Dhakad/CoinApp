import { View, Text, ImageBackground, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import Profilecom from '../component/Profilecom'

const Profile = () => {
  return (
    <View style={{ flex: 1, }}>
      <ScrollView>
        <ImageBackground source={require("../assets/image.png")} style={styles.backimage} />
        <View style={styles.header}>
          <Image source={require("../assets/back.png")} />
          <Text style={styles.text}>Profile</Text>
          <Image source={require("../assets/edit.png")} style={styles.circle} />
        </View>
        <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
          <Image source={require("../assets/user.png")} style={styles.user} />
          <Text style={styles.rahul}>Rahul Siddharth</Text>
          <Text style={styles.rahulone}>rahulsiddharth@gmail.com</Text>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require("../assets/birthday.png")} style={styles.birth} />
            <Text style={styles.feb}>17 feb 1992</Text>
          </View>
        </View>
        <View style={styles.white}>
          <Profilecom imageSource={require("../assets/account.png")}
            title={"Account History"} />
              <Profilecom imageSource={require("../assets/reward.png")}
            title={"Reward History"} />
              <Profilecom imageSource={require("../assets/send.png")}
            title={"Refer and Earn"} />
              <Profilecom imageSource={require("../assets/help.png")}
            title={"Help & FAQ"} />
              <Profilecom imageSource={require("../assets/privacy.png")}
            title={"Privacy Policy"} />
              <Profilecom imageSource={require("../assets/terms.png")}
            title={"Terms & Conditions"} />
              <Profilecom imageSource={require("../assets/logout.png")}
            title={"Logout"} />
              <Profilecom imageSource={require("../assets/delet.png")}
            title={"Delete Account"} />
        </View>



      </ScrollView>
    </View>
  )
}

export default Profile
const styles = StyleSheet.create({
  backimage: {
    flex: 1,
    height: '100%',
    width: '100%',
    position: 'absolute'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    padding: 15,
  },
  text: {
    fontSize: 19,
    fontWeight: "600",
    color: "white",
  },
  circle: {
    height: 20,
    width: 20,
  },
  user: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    height: 96,
    width: 96,
  },
  rahul: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
    marginHorizontal: 20,
  },
  rahulone: {
    color: 'white',
    marginTop: 10,
    marginHorizontal: 5,
  },
  feb: {
    color: 'white',
    marginTop: 10,

  },
  birth: {
    height: 15,
    width: 16,
    marginTop: 10,
    marginHorizontal: 30,
  },
  white: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  }
})