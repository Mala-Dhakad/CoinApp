import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ReferFrienCom = ({ title, imageSource }) => {
    return (
        <View style={{ paddingHorizontal: 20 }}>
            <View style={styles.mainContenar}>
                <TouchableOpacity style={styles.button}>
                    <View style={styles.back}>
                    <Image source={imageSource} style={styles.imagestyle} />
                    </View>
                    <Text style={styles.text}>{title}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ReferFrienCom;
const styles = StyleSheet.create({
    mainContenar: {
        width: '100%',
        height: 72,
        backgroundColor: "rgba(113, 26, 221, 0.05)",
        borderRadius: 20,
        marginTop: 10,
    },
    imagestyle: {
        height: 30,
        width: 30,
       borderRadius:15,
    },
    back:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#A853CD',
        height:55,
        width:55,
        borderRadius:10,
    },
    button:{
        gap:20,
        flexDirection: 'row',
        alignItems:'center',
        padding:10,
     
    },
    text:{
        color:'#B862D1',
        fontSize:18,
        fontWeight:"700"
    }
})