
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const DrawWinnerLinear = ({ title,DrawWinner }) => {
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
                height: 28,
            

            }}>
                <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default DrawWinnerLinear
const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: 'white',
    },
    button:{
        
    }
})