import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const ChallengeCom = ({ title, backgroundColor, imageSource }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.contenar,{backgroundColor}]}>
                <View style={styles.background}>
                    <Image source={imageSource} style={styles.imagestyle} />
                </View>
                <Text style={styles.textstyle}>{title}</Text>
            </View>
        </View>
    )
}

export default ChallengeCom;
const styles = StyleSheet.create({
    contenar: {

        height: 128,
        width: 152,
        borderRadius: 10,
        marginHorizontal:20,
        marginTop:15,
       

    },
    imagestyle: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    background: {
        height: 72,
        width: 72,
        backgroundColor: 'white',
        borderRadius: 40,
        justifyContent: 'center',
        alignSelf: 'center',
    }, textstyle: {
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        marginTop:10,
        fontSize:18,
        fontWeight:'800'
    }
})