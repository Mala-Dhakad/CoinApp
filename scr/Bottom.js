import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
 import Button from './component/Button'
import ImageOne from './component/ImageOne'
import Linear from './component/Linear'

const Bottom = () => {
  return (
    <ScrollView>
    <View style={{ flex: 1 }}>
   
   
      <Linear />
      <Text style={{
        fontWeight: 600,
        marginTop: 20,
        color: 'white',
        padding: 10,
      }}>JIVDANI HOSPITAL</Text>
      <View style={{ paddingHorizontal: 30, }}>
        <View style={{ flexDirection: 'row' }}>

          <TouchableOpacity style={styles.ButtonOne}>
            <Text style={{ color: 'white' }}>create Visit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ButtonTwo}>
            <Text style={{ fontWeight: 600, color: 'black', }}>View History</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          flexDirection: 'row',
          gap: 30,
          marginTop: 20 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 600,
            color: 'rgba(0, 0, 0, 0.85)',
          }}>Suraaj Singh (31 Y, Male)</Text>
          <Text style={{color:"black"}}>375   9852385294</Text>
        </View>
        
<Text style={{color:'black',
  marginTop:30,
}}>Choose</Text>
<View style={{flexDirection:'row',}}>
        <Button title={"Vitals Options"}
       
        />
         <ImageOne source={require('./assets/For.png')}
         style={{ width: 18, height: 18 }} />
        </View>  
        <Button title={"Complaints"} />
        <Button title={"History"} />
        <Button title={"General Examinations"} />
        <Button title={"System Examinations"} />
        <Button title={"Diagnosis"} />
        <Button title={"Mensuration info"} />
        <Button title={"Obstetric History"} />
        <Button title={"Lab Tests and Imaging"} />
        <Button title={"Physical Examination"} />
      </View>
     
    </View>
    </ScrollView>
  )
}

export default Bottom
const styles = StyleSheet.create({
  ButtonOne: {
    backgroundColor: 'white',
    height: 38,
    marginTop: 20,
    borderRadius: 6,
    width: "50%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(130, 80, 255, 1)',
  },
  ButtonTwo: {
    backgroundColor: 'white',
    height: 38,
    borderRadius: 6,
    marginTop: 20,
    width: "50%",
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  }
})