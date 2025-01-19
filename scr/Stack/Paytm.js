import { View, Text, ImageBackground, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import Coins from '../component/Coins'

const Paytm = () => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require("../assets/image.png")} style={styles.backimage} />
            <View style={styles.direction}>
                <Image source={require("../assets/back.png")} />
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                }}>Paytm</Text>
                <View style={styles.coins}>
                    <Image source={require("../assets/coin.png")} style={{
                        justifyContent: 'center',
                        alignSelf: 'center'
                    }} />
                    <Text style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        color: 'black'
                    }}>100</Text>
                </View>
            </View>
            <View style={styles.whitecolor}>
                <View style={{
                    paddingHorizontal:30,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                <View style={{ flexDirection: "row", marginTop: 25, }}>
                    <Coins
                        imageSource={require("../assets/icons.png")}
                        title={"1000 Coins"}
                        titileone={"Rs.10"}
                    />

                    <Coins
                        imageSource={require("../assets/icons.png")}
                        title={"2000 Coins"}
                        titileone={"Rs.20"}
                    />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 15, }}>
                    <Coins
                        imageSource={require("../assets/icons.png")}
                        title={"5000 Coins"}
                        titileone={"Rs.50"}
                    />
                    <Coins
                        imageSource={require("../assets/icons.png")}
                        title={"10000 Coins"}
                        titileone={"Rs.100"}
                    />
                </View>
                </View>
            </View>
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
        justifyContent: 'space-around',
        marginTop: 40,
        gap: 60,
    },
    coins: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        width: 59,
        height: 26,
        borderRadius: 16,
    },

    whitecolor: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 70,
        borderTopLeftRadius: 19,
        borderTopRightRadius: 19,
    },

})
export default Paytm;