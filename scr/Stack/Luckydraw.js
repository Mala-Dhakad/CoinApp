import { View, Text, ScrollView, Image, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import Lucky from '../component/Lucky'
import LinearOne from '../component/LinearOne'
import LinearTwo from '../component/LinearTwo'

const Luckydraw = () => {
  return (
    <View style={{ flex: 1, }}>
      <ScrollView>
        <ImageBackground source={require("../assets/image.png")} style={styles.back} />

        <View style={styles.header}>
          <Image source={require("../assets/back.png")} />
          <Text style={styles.text}>Lucky Draw</Text>
          <Image source={require("../assets/info.png")} style={styles.circle} />
        </View>

        <View style={styles.whitecolor}>
          <Lucky imagesource={require("../assets/lucky.png")}
            title={"Win 100 Coins"}
            titleone={"#111222"}
            titletwo={"66/132"}
            titlethree={"50%"}
            win={"Winners"}
            LinearTwo={<LinearTwo title={"Free Entry"}/>}
          />

          <Lucky imagesource={require("../assets/lucky.png")}
            title={"Win 500 Coins"}
            titleone={"#111022"}
            titletwo={"07/100"}
            titlethree={"7%"}
            win={"Winners"}
            LinearTwo={<LinearTwo title={"Free Entry"}/>}
          />

          <Lucky imagesource={require("../assets/lucky.png")}
            title={"Win 1000 Coins"}
            titleone={"#111092"}
            titletwo={"56/112"}
            titlethree={"50%"}
            win={"Winners"}
            LinearTwo={<LinearTwo title={"Free Entry"}/>}
          />

          <Lucky imagesource={require("../assets/lucky.png")}
            title={"Win 2500 Coins"}
            titleone={"#086055"}
            titletwo={"92/100"}
            titlethree={"50%"}
            win={"Winners"}
            LinearTwo={<LinearTwo title={"Free Entry"}/>}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default Luckydraw;
const styles = StyleSheet.create({
  whitecolor: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 30,
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
  },
  back: {
    flex: 1,
    height: '100%',
    width: '100%',
    position: 'absolute'
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
    fontWeight: "800",
    color: "white",
  },
})