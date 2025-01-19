import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const HelpCom = ({ title, onPress, onetitle, ImageSource }) => {
    return (
        <View style={{ flex: 1,paddingHorizontal:20 }}>
            <TouchableOpacity style={styles.button}>
                <View style={styles.rowStyle}>
                    <Text>{onetitle}</Text>
                    <Text style={styles.text}>{title}</Text>
                    <Image source={ImageSource} style={styles.imagestyle} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default HelpCom;
const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:10,
    },
    button: {
        justifyContent: 'center',
        height: 72,
        width: "100%",
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 10,
        backgroundColor: "rgba(113, 26, 221, 0.05)",
    },
    text: {
        color: 'black',
        fontSize:16,
    },
    imagestyle: {
        height: 15,
        width: 15,
    }
})