import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
const MariaCom = ({ imageSource, title, titleone, titletwo, imageSourceone }) => {
    return (
        <View style={{ flex: 1 ,paddingHorizontal:15,}}>

            <TouchableOpacity style={styles.button}>
                <Image source={imageSource} style={styles.image} />
                <View style={styles.yuno}>
                <Text >{titleone}</Text>
                <Text style={styles.text}>{title}</Text>
                </View>
                <Image source={imageSourceone} />
            </TouchableOpacity>

        </View>
    )
}

export default MariaCom;
const styles = StyleSheet.create({
    contenar: {
        flexDirection: 'row',
    },
    button: {
        flexDirection: 'row',
        height: 120,
        width: "100%",
        borderColor: '#A853CD',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 10,
        gaap:5,
    },
    image: {
        height: 96,
        width: 96,
    margin:10,
    },
    text: {
        color: 'black',
        fontSize: 16,
    },
    yuno:{
      flexDirection:'column',
    }

})