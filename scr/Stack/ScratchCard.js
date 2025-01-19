import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'

const ScratchCard = () => {
    return (
        <View style={{ flex: 1, }}>
            <ImageBackground source={require("../assets/second.png")} style=
                {styles.backimage} />
            <View style={styles.header}>
                <Image source={require("../assets/back.png")} />
                <Text style={styles.text}>Scratch Card</Text>
                <Image source={require("../assets/info.png")} style={styles.circle} />
            </View>
            <Image source={require("../assets/card.png")} style={styles.image} />
            <Text style={styles.textone}>Scratch the card to get {"\n"}the coins</Text>
        </View>
    )
}

export default ScratchCard;
const styles = StyleSheet.create({
    backimage: {
        flex: 1,
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        marginTop: 30,
        padding: 15,
    },
    text: {
        fontSize: 19,
        fontWeight: "800",
        color: "white",
    },
    circle: {
        height: 20,
        width: 20,
    },
    image: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 120,
    },
    textone: {
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 10,
        color: 'black',
        fontSize: 15,
        fontWeight: '500'
    },
})