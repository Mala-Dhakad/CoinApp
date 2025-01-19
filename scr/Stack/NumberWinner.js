import { View, Text, ScrollView,Image, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import Lucky from '../component/Lucky'
import LinearOne from '../component/LinearOne'

const NumberWinner = () => {
  return (
    <View style={{flex:1,}}>
      <ScrollView>
        <ImageBackground source={require("../assets/image.png")} style={styles.back}/>
        <View style={styles.whitecolor}>
 
<Lucky 
  title={"Round#16352"}
  titletwo={"12 Feb,2021"}
  win={"Winners 107"}
  LinearOne={<LinearOne title={"Lucky No:06"}/>}
  />


<Lucky 
  title={"Round#21352"}
  titletwo={"09 Feb,2021"}
  win={"Winners 107"}
  LinearOne={<LinearOne title={"Lucky No:10"}/>}
  />


<Lucky 
  title={"Round#13152"}
  titletwo={"07 Feb,2021"}
  win={"Winners 107"}
  LinearOne={<LinearOne title={"Lucky No:04"}/>}
  />


<Lucky 
  title={"Round#16412"}
  titletwo={"01 Feb,2021"}
  win={"Winners 107"}
  LinearOne={<LinearOne title={"Lucky No:01"}/>}
  />
  <Lucky 
  title={"Round#16351"}
  titletwo={"27 Jan,2021"}
  win={"Winners 107"}
  LinearOne={<LinearOne title={"Lucky No:09"}/>}
  />
  </View>
  </ScrollView>
    </View>
  )
}

export default NumberWinner;
const styles=StyleSheet.create({
  whitecolor: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 70,
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
},
back:{
  flex:1,
  height:'100%',
  width:'100%',
  position:'absolute'
},
})