import { View, Text } from 'react-native'
import React from 'react'
import Linear from './component/Linear'
import Button from './component/Button'
import BigButton from './component/BigBUtton'
import ButtonM from './component/ButtonM'

const History = () => {
  return (
    <View>
      <Linear />
      <View style={{ paddingHorizontal: 23, }}>

        <View style={{ flexDirection: 'row', gap: 55, }}>
          <Text style={{
            color: 'black',
            fontWeight: 600,
            fontSize: 15,
            marginTop: 15,
          }}>Suraaj Singh (31 Y, Male)
          </Text>
          <Text style={{
            color: 'black',
            fontWeight: 600,
            fontSize: 15,
            marginTop: 15,
          }}>375  9852385294</Text>
        </View>
        <BigButton title={"History"} />
        <Text style={{
          color: 'black',
          fontWeight: 600,
          fontSize: 15,
          marginTop: 20,
        }}>5th Visit</Text>
        <View style={{
          flexDirection: 'row',
          gap: 40,
          marginTop: 5,
          marginHorizontal: 20,
        }}>
          <Text>Load Template</Text>
          <Text>Save as Template</Text>
          <Text>Clear all</Text>
        </View>
      
        <ButtonM title={"Allergies"} />
        <ButtonM title={"Personal History"} />
        <ButtonM title={"Past Medical History"} />
        <ButtonM title={"Family History"} />
      </View>
    </View>
  )
}

export default History