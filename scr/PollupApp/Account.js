import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import AccountCom from '../PollupAppCom/AccountCom'



const Account = () => {
      return (
            <View style={{ flex: 1 }}>
                  <ScrollView>
                        <View style={styles.contenar} >
                              <View style={styles.row}>
                                    <Image source={require("../assets/group.png")} style={styles.image} />
                                    <Text style={styles.Account}>Account History</Text>
                              </View>

                        </View>
                        <AccountCom title={"Transaction ID # 456789"}
                              titleone={"Dec 2, 2023103:20 PM"}
                              withdrawal={"Withdrawal"}
                              amount={"Amount ₹10.00"}
                              pending={"completed"} />

                        <AccountCom title={"Transaction ID # 456789"}
                              titleone={"Dec 2, 2023103:20 PM"}
                              withdrawal={"Withdrawal"}
                              amount={"Amount ₹10.00"}
                              pending={"completed"} />

                        <AccountCom title={"Transaction ID # 456789"}
                              titleone={"Dec 2, 2023103:20 PM"}
                              withdrawal={"Withdrawal"}
                              amount={"Amount ₹10.00"}
                              pending={"completed"} />

                        <AccountCom title={"Transaction ID # 456789"}
                              titleone={"Dec 2, 2023103:20 PM"}
                              withdrawal={"Withdrawal"}
                              amount={"Amount ₹10.00"}
                              pending={"completed"} />

                        <AccountCom title={"Transaction ID # 456789"}
                              titleone={"Dec 2, 2023103:20 PM"}
                              withdrawal={"Withdrawal"}
                              amount={"Amount ₹10.00"}
                              pending={"completed"} />

                  </ScrollView>
            </View>
      )
}

export default Account
const styles = StyleSheet.create({
      contenar: {
            backgroundColor: 'white',
            borderWidth: 1,
            height: 130,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,

      },
      row: {
            marginTop: 30,
            flexDirection: 'row',
      },
      image: {
            margin: 10,

      },
      Account: {
            color: 'black',
            fontSize: 18,
            fontWeight: "800",
            width: '100%',
            textAlign: 'center',
      },
      color: {
            colo: 'black'
      }
})