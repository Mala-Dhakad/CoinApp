import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import ReferCom from '../PollupAppCom/ReferCom'

const Refer = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Text>Refer</Text> */}
      <View style={styles.row}>
        <View style={styles.maincontainer}>
        <Image source={require("../assets/group.png")} />
        <Text style={styles.refer}>Refer</Text>
        </View>
      </View>
      <ReferCom imageSource={require("../assets/Frame.png")}
        title={"Mala Dhakad"}
        titleone={"Facebook"}
        titletwo={"@haysas"} />
    </View>
  )
}

export default Refer;
const styles = StyleSheet.create({
  row: {
    height: 130,
    width: '100%',
    borderWidth: 1,
    
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  maincontainer:{
marginTop:20,
flexDirection:'row',
  },
  refer:{
    width:'100%',
    textAlign:'center',
    marginTop:10,
    color:'black',
    fontSize:18,
    justifyContent:'center',
    fontWeight:'700'
  }
})