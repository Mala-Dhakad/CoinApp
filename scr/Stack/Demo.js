import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import Button from '../component/Button'
import Linear from '../component/Linear'
import ButtonOne from '../component/ButtonOne'
import BigButton from '../component/BigBUtton'
import TextInputOne from '../component/TextInput'

const Demo = () => {
  const [isClicked, setClicked] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <View>
      <ScrollView>

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
            marginTop: 20
          }}>
            <Text style={{
              fontSize: 16,
              fontWeight: 600,
              color: 'rgba(0, 0, 0, 0.85)',
            }}>Suraaj Singh (31 Y, Male)</Text>
            <Text style={{ color: "black" }}>375   9852385294</Text>
          </View>


          <View style={{}}>
            <TouchableOpacity style={styles.dropdownSelector}
              onPress={() => {
                setClicked(!isClicked);
              }}>
              <Text style={{ color: 'black', fontWeight: '600', }}>Vitals Options</Text>
              {isClicked ? (
                <Image source={require('../assets/Forw.png')}
                  style={styles.image}
                />
              ) :
                (
                  <Image source={require('../assets/For.png')}
                    style={styles.image}
                  />
                )
              }

            </TouchableOpacity>

            {isClicked ?
              <View style={styles.dropArea}>
                <View style={{ paddingHorizontal: 10, }}>
                  <View style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    gap: 180,
                    marginHorizontal: 5
                  }}>
                    <Text>BP</Text>
                    <Text>Pulse</Text>
                  </View>
                  <View style={{
                    flexDirection: 'row',
                    gap: 35,
                  }}>
                    <TextInputOne />
                    <TextInputOne />
                  </View>
                </View>

                <View style={{ paddingHorizontal: 10, }}>
                  <View style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    gap: 180,
                    marginHorizontal: 5
                  }}>
                    <Text>Height</Text>
                    <Text>Weight</Text>
                  </View>
                  <View style={{
                    flexDirection: 'row',
                    gap: 35,
                  }}>
                    <TextInputOne />
                    <TextInputOne />
                  </View>
                </View>

                <View style={{ paddingHorizontal: 10, }}>
                  <View style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    gap: 180,
                    marginHorizontal: 5
                  }}>
                    <Text>Temperature</Text>
                    <Text>BMI</Text>
                  </View>
                  <View style={{
                    flexDirection: 'row',
                    gap: 35,
                  }}>
                    <TextInputOne />
                    <TextInputOne />
                  </View>
                </View>

                <View style={{ paddingHorizontal: 10, }}>
                  <View style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    gap: 180,
                    marginHorizontal: 5
                  }}>
                    <Text>Waist/Hip</Text>
                    <Text>SPO2</Text>
                  </View>
                  <View style={{
                    flexDirection: 'row',
                    gap: 35,
                  }}>
                    <TextInputOne />
                    <TextInputOne />
                  </View>
                </View>

                <View style={{ paddingHorizontal: 10, }}>
                  <View style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    gap: 180,
                    marginHorizontal: 5
                  }}>
                    <Text>FHS</Text>
                    <Text>FM</Text>
                  </View>
                  <View style={{
                    flexDirection: 'row',
                    gap: 35,
                  }}>
                    <TextInputOne />
                    <TextInputOne />
                  </View>
                </View>

                <View style={{ paddingHorizontal: 10, }}>
                  <View style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    gap: 180,
                    marginHorizontal: 5
                  }}>
                    <Text>HGT</Text>
                    <Text>LMP</Text>
                  </View>
                  <View style={{
                    flexDirection: 'row',
                    gap: 35,
                  }}>
                    <TextInputOne />
                    <TextInputOne />
                  </View>
                </View>

                <View style={{ paddingHorizontal: 10, }}>
                  <View style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    gap: 180,
                    marginHorizontal: 5
                  }}>
                    <Text>EDD</Text>

                  </View>
                  <View style={{
                    flexDirection: 'row',
                    gap: 35,
                  }}>
                    <TextInputOne />

                  </View>
                  <ButtonOne title={"Next"} />
                </View>

              </View> : null}


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
      </ScrollView>
    </View>

  )
}

export default Demo
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
  },
  dropdownSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
    width: "100%",
    borderRadius: 6,
    borderColor: "rgba(0, 0, 0, 0.25)",
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginTop: 24,
  },
  dropArea: {
    width: "110%",
    // height: "50%",
    height: 600,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: 'white',
    elevation: 5,
    alignSelf: 'center',
  },
  mainConternar: {
    height: 50,
    width: "100%",
    borderRadius: 14,
    borderColor: "rgba(0, 0, 0, 0.25)",
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    top: 40,
    backgroundColor: 'rgba(130, 80, 255, 1)'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  screen: {

    justifyContent: 'center',
    alignItems: 'center',
  },



})