import { View, Text, ScrollView, Image, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import LinearOne from '../component/LinearOne'
import DrawWinnerCom from '../component/DrawWinnerCom'
import DrawWinnerLinear from '../component/DarwWinnerLinear'


const LuckyDrawWinner = () => {
  return (
    <View style={{ flex: 1, }}>
      <ScrollView>
        <ImageBackground source={require("../assets/image.png")} style={styles.back} />
        <View style={styles.header}>
          <Image source={require("../assets/back.png")} />
          <Text style={styles.text}>Lucky Draw Winner</Text>
          <Image source={require("../assets/info.png")} style={styles.circle} />
        </View>
        <View style={styles.whitecolor}>

          <DrawWinnerCom imagesource={require("../assets/userone.png")}
            title={"Krishnan"}
            titleone={"#111222"}
            titletwo={"12 Feb,2021"}
            DrawWinnerLinear={<DrawWinnerLinear title={"lD:XBc012"} />}
          />
          <DrawWinnerCom imagesource={require("../assets/userthree.png")}
            title={"Rahul"}
            titleone={"#111222"}
            titletwo={"09 Feb,2021"}
            DrawWinnerLinear={<DrawWinnerLinear title={"lD:XBc012"} />}
          />
          <DrawWinnerCom imagesource={require("../assets/usertwo.png")}
            title={"Niharika"}
            titleone={"#111222"}
            titletwo={"01 Feb,2021"}
            DrawWinnerLinear={<DrawWinnerLinear title={"lD:XBc012"} />}
          />


          <DrawWinnerCom imagesource={require("../assets/img.png")}
            title={"Meera"}
            titleone={"#111222"}
            titletwo={"12 Jan,2021"}
            DrawWinnerLinear={<DrawWinnerLinear title={"lD:XBc012"} />}
          />


          <DrawWinnerCom imagesource={require("../assets/imgone.png")}
            title={"Ranveer"}
            titleone={"#111222"}
            titletwo={"08 Jan,2021"}
            DrawWinnerLinear={<DrawWinnerLinear title={"lD:XBc012"} />}
          />

        </View>
      </ScrollView>
    </View>
  )
}

export default LuckyDrawWinner;
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
    color: "white",
  },


})