import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const Profilecom = ({ title, onPress, imageSource }) => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 15, }}>
            <View style={styles.button}>
                <Image source={imageSource} style={styles.image} />
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.textone}>{title}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profilecom
const styles = StyleSheet.create({
    button: {
        height: 64,
        width: "100%",
      backgroundColor: "rgba(113, 26, 221, 0.05)",
        borderRadius: 10,
        flexDirection: 'row',
        marginTop: 25,
    },
    image: {
        height: 40,
        width: 40,
        marginTop:10,
        marginHorizontal:5,
    },
    textone:{
        color:'black',
       marginTop:20,
    }
})