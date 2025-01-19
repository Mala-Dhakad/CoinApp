import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import ReferFrienCom from '../PollupAppCom/ReferFrienCom'
import ColorCom from '../PollupAppCom/ColorCom'
import Tatal from '../PollupAppCom/Tatal'
import Reward from '../PollupAppCom/Reward'


const ReferFriends = () => {
      return (
            <View style={{ flex: 1 }}>
                  <ScrollView>
                        <View style={styles.maincontenar}>
                              <View style={{ flexDirection: 'row' }}>
                                    <Image source={require("../assets/profile.png")} style={styles.image} />
                                    <View style={styles.direction}>
                                          <Text style={styles.maria}>Maria Wilson</Text>
                                          <Text style={styles.gmail}>dhakadmala0@gmail.com</Text>
                                    </View>
                              </View>
                              <View style={{ flexDirection: 'row' }}>
                                    <Reward imageSource={require("../assets/pollupcoin.png")}
                                          title={"Coins"}
                                          titleone={"200"} />
                                    <Reward imageSource={require("../assets/Star.png")}
                                          title={"Coins"}
                                          titleone={"200"} />
                              </View>
                        </View>

                        <ColorCom imageSource={require("../assets/profileone.png")}
                              title={"Refer Friends"} />
                        <ReferFrienCom imageSource={require("../assets/profileone.png")}
                              title={"Update account"} />

                        <ReferFrienCom imageSource={require("../assets/profileone.png")}
                              title={"Account History"} />

                        <ReferFrienCom imageSource={require("../assets/profileone.png")}
                              title={"Reward History"} />


                        <ReferFrienCom imageSource={require("../assets/profileone.png")}
                              title={"Notification"} />

                        <ReferFrienCom imageSource={require("../assets/profileone.png")}
                              title={"Payment Method"} />

                        <ReferFrienCom imageSource={require("../assets/profileone.png")}
                              title={"Security"} />

                        <ReferFrienCom imageSource={require("../assets/profileone.png")}
                              title={"Term and conditions"} />

                        <ReferFrienCom imageSource={require("../assets/profileone.png")}
                              title={"Help"} />

                        <ReferFrienCom imageSource={require("../assets/profileone.png")}
                              title={"Delete Account"} />

                        <ReferFrienCom imageSource={require("../assets/profileone.png")}
                              title={"LogOut"} />
                  </ScrollView>
            </View>
      )
}

export default ReferFriends;
const styles = StyleSheet.create({
      maincontenar: {
            height: 200,
            width: '100%',
            borderWidth:1,
            backgroundColor: 'white',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
      },
      image: {
            margin: 10,
      },
      direction:{
             flexDirection:'column',
            marginTop:20,
       },
       maria:{
            fontSize:18,
            fontWeight:'800',
            color:'black',
       },
       gmail:{
            color:'black',
       }
})