import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Reward = ({ title, imageSource, titleone, backgroundcolor, }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.container, { backgroundColor: 'pink' }]}>
                <View style={styles.flexStyle}>
                    <View style={styles.back}>
                        <Image source={imageSource} style={styles.image} />
                    </View>
                    <View style={styles.textstyle}>
                        <Text style={styles.text}>{title}</Text>
                        <Text style={styles.textone}>{titleone}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Reward;
const styles = StyleSheet.create({
    container: {
        width: 170,
        height: 60,
        borderWidth: 1,
        margin: 10,
        borderRadius: 15,
        backgroundColor: 'pink',
    },
    flexStyle: {
        flexDirection: 'row',
    },
    textstyle: {
        flexDirection: 'column',
    },
    image: {
        height: 24,
        width: 26,
    },
    back: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 40,
        width: 40,
        borderRadius: 10,
    },
    text: {
        color: 'black',
        marginTop: 5,
        fontSize: 16,
        fontWeight: "500",
        marginHorizontal: 5,
    },
    textone: {
        color: "yellow",
        fontSize: 24,
        fontWeight: '800',
        marginHorizontal: 5,
    }
})