import { View, Text, ImageBackground, StyleSheet, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Coins from '../component/Coins'
import Account from '../component/Account'

const AccountHistory = () => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <ImageBackground source={require("../assets/image.png")} style={styles.backimage} />


                <View style={styles.header}>
                    <Image source={require("../assets/back.png")} />
                    <Text style={styles.text}>Account History</Text>
                   
                </View>


                <View style={styles.whitecolor}>
                    <Account title={"Scratch Card"}
                        imagesource={require("../assets/coin.png")}
                        titleone={"100 Coins"}
                        titletwo={"17 Feb,2021"} />

                    <Account title={"Lucky Draw"}
                        imagesource={require("../assets/coin.png")}
                        titleone={"500 Coins"}
                        titletwo={"13 Feb,2021"} />

                    <Account title={"Lucky Draw"}
                        imagesource={require("../assets/coin.png")}
                        titleone={"100 Coins"}
                        titletwo={"12 Feb,2021"} />

                    <Account title={"Jackpot"}
                        imagesource={require("../assets/coin.png")}
                        titleone={"1000 Coins"}
                        titletwo={"10 Feb,2021"} />

                    <Account title={"Lucky Draw"}
                        imagesource={require("../assets/coin.png")}
                        titleone={"500 Coins"}
                        titletwo={"10 Feb,2021"} />

                    <Account title={"Scratch Card"}
                        imagesource={require("../assets/coin.png")}
                        titleone={"100 Coins"}
                        titletwo={"17 Feb,2021"} />

                    <Account title={"Scratch Card"}
                        imagesource={require("../assets/coin.png")}
                        titleone={"500 Coins"}
                        titletwo={"27 jan,2021"} />

                    <Account title={"LuckyCard"}
                        imagesource={require("../assets/coin.png")}
                        titleone={"100 Coins"}
                        titletwo={"17 jan,2021"} />

                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    backimage: {
        flex: 1,
        height: '100%',
        width: '100%',
        position: "absolute"
    },
    direction: {
        flexDirection: 'row',
        marginTop: 30,
    },

    text: {
        // color: 'white',
        fontSize: 18,
        fontWeight: '800%',
        width:'100%',
        backgroundColor:'red'

    },
    whitecolor: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 30,
        borderTopLeftRadius: 19,
        borderTopRightRadius: 19,
    },
    iconimage: {
        height: 25,
        width: 25,
        justifyContent: 'flex-start', 
        alignItems: 'flex-start',
    },
    header: {
        flexDirection: 'row',
        textAlign: 'center',
        marginTop: 30,
        padding: 15,
       
    },
    text: {
        fontSize: 19,
        fontWeight: "800",
        color: "white",
       textAlign:'center',
        width:'100%',
       
    },

})
export default AccountHistory;