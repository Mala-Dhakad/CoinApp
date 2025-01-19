import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const ButtonGoogle = ({ title, onPress, imageSource,  }) => {
    return (
        <View style={{flex:1, paddingHorizontal:20,}}>
        <TouchableOpacity onPress={onPress}
            activeOpacity={0.5}>
            <View style={styles.viewStyle}>
                <Image source={imageSource} style={styles.imagestyle} />
                <Text style={styles.textstyle}>{title}</Text>
            </View>

        </TouchableOpacity>
        </View>
    )
}

export default ButtonGoogle
const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 18,
        height: 55,
        width:'100%',
        width: "100%",
        gap: 20,
        marginTop: 20,
        borderColor:'red',
        backgroundColor: 'red',
    },
    imagestyle: {
        height: 30,
        width: 30,
        backgroundColor:'white',
        borderRadius:10,
    },
    textstyle: {
      color:'white',
        fontSize: 18,
        fontWeight: '800',
    }
})