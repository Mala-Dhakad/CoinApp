import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const Color = ({ title, onPress, imageSource }) => {
    return (
        <View style={{ flex: 1, }}>
            <View style={styles.button}>
                <View style={styles.imagestyle}>
                <Image source={imageSource} style={styles.small}/>
                </View>
               
                <TouchableOpacity>
                    <Text style={styles.textStyle}>{title}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Color;
const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        height: 72,
        width: 380,
        borderWidth: 1,
        borderRadius: 15,
        margin: 10,
        gap:20,
    },
    imagestyle: {
        justifyContent:'center',
        backgroundColor: '#A853CD',
        height: 52,
        width: 52,
        borderRadius: 20,
        margin: 10,
    },
    textStyle: {
        fontSize: 20,
        fontWeight: '800',
        color: '#A853CD',
        justifyContent: 'center', 
        marginTop:20, 
    },
    small:{
        height:24,
        width:24,
        alignSelf:'center',
    }
})