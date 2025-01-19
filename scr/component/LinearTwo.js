
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { StyleSheet, Text, TouchableOpacity,Image,View } from 'react-native'

const LinearTwo = ({ title,imageSource }) => {
    return (
        <LinearGradient
            colors={["#711ADD", "#8F33CF", "#A342C5", "#DA6FAB"]}
            style={{
                alignItems: 'center',
                top: 0,
                height: 40,
                borderRadius: 19,
                width: 108,
                borderRadius: 18,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
                height: 28,

            }}>
                <TouchableOpacity>
                    <View style={styles.row}>
            <Text style={styles.text}>{title}</Text>
            {/* <Image source={imageSource} style={styles.imageicon} /> */}
            </View>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default LinearTwo
const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: 'white',
    },
    row:{
        flexDirection:'row',
    },imageicon:{
        height:16,
        width:16,
        margin:5,
    }
})