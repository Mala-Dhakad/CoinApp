import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import Convert from '../component/Convert'

const ReferratHistory = () => {
    return (
        <View style={{ flex: 1, }}>
            <ImageBackground source={require("../assets/image.png")} style={styles.backimage} />
            <View style={styles.mainview}>
                <Image source={require("../assets/back.png")} />
                <Text style={styles.textstyle}>Referral History</Text>
            </View>

            <View style={styles.whitecolor}>
                <Image source={require("../assets/cardone.png")} style={styles.card} />
                <Convert title={"Claim Reward"}/>
            </View>
        </View>
    )
}

export default ReferratHistory
const styles = StyleSheet.create({
    backimage: {
        flex: 1,
        height: "100%",
        width: '100%',
        position: 'absolute',

    },
    mainview: {
        flexDirection: 'row',
        margin: 20,

    },
    textstyle: {
        color: 'white', fontSize: 18,
        fontWeight: "800",
        textAlign: 'center',
        width: '100%'
    },
    whitecolor: {
        backgroundColor: 'white',
        position: 'absolute',
        height: '100%',
        width: '100%',
        marginTop: 70,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    card: {
        height: 134,
        width: 320,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 30,

    }
})