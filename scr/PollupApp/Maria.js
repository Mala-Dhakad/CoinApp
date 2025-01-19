import { View, Text } from 'react-native'
import React from 'react'
import MariaCom from '../PollupAppCom/MariaCom'

const Maria = () => {
  return (
    <View style={{flex:1}}>
     
    <MariaCom imageSource={require("../assets/Rectangle.png")}
    titleone={"Yuno Survey"}
    title={"Comeplete a survey only New  Users"}
    imageSourceone={require("../assets/forward.png")}/>
    </View>
  )
}

export default Maria