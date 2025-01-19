import { View, Text, ScrollView, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import RewardHistorycom from '../component/RewardHistorycom'

const RewardHistory = () => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <ImageBackground source={require("../assets/image.png")} style={styles.backimage} />
                <View style={styles.row}>
                    <Image source={require("../assets/back.png")} />
                    <Text style={styles.textstyle}>Reward History</Text>
                </View>
                <View style={styles.whitecolor}>
                    <RewardHistorycom title={"Paytm"}
                        titleone={"Rejected"}
                        titlethree={"17 Feb, 2021"}
                        imagesource={require("../assets/coin.png")}
                        titleforth={"100 Coins"} />

                    <RewardHistorycom title={"Paytm"}
                        titleone={"Paid"}
                        titlethree={"17 Feb, 2021"}
                        imagesource={require("../assets/coin.png")}
                        titleforth={"500 Coins"} />


                    <RewardHistorycom title={"UPI"}
                        titleone={"Paid"}
                        titlethree={"13 Feb, 2021"}
                        imagesource={require("../assets/coin.png")}
                        titleforth={"350 Coins"} />


                    <RewardHistorycom title={"Paytm"}
                        titleone={"Pending"}
                        titlethree={"11 Feb, 2021"}
                        imagesource={require("../assets/coin.png")}
                        titleforth={"100 Coins"} />


                    <RewardHistorycom title={"UPI"}
                        titleone={"Failed"}
                        titlethree={"03 Feb, 2021"}
                        imagesource={require("../assets/coin.png")}
                        titleforth={"500 Coins"} />



                    <RewardHistorycom title={"UPI"}
                        titleone={"Rejected"}
                        titlethree={"21 Feb, 2021"}
                        imagesource={require("../assets/coin.png")}
                        titleforth={"100 Coins"} />
                </View>
            </ScrollView>
        </View>
    )
}

export default RewardHistory;
const styles = StyleSheet.create({
    backimage: {
        flex: 1,
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    whitecolor: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 50,
        borderTopLeftRadius: 19,
        borderTopRightRadius: 19,
    },
    row: {
        flexDirection: 'row',
        margin: 20,
    },
    textstyle: {
        color: 'white',
        fontSize: 18,
        fontWeight: '800',
        width: '100%',
        textAlign: 'center',
    }
})