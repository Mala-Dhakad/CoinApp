
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { StyleSheet, Text } from 'react-native'

const Linear = ({ title }) => {
    return (
        <LinearGradient
            colors={["#711ADD", "#8F33CF", "#A342C5", "#DA6FAB"]}
            style={{
                width: "100%",
                alignItems: 'center',
                top: 0,
                borderWidth: 1,
                height: 40,
                borderRadius: 19,
            }}>
            <Text style={styles.text}>{title}</Text>
        </LinearGradient>
    )
}

export default Linear
const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: 'black',
    }
})