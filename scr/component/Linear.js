
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Linear = () => {
    return (
        <LinearGradient
            colors={["rgba(121, 74, 240, 0.85)", " rgba(130, 80, 255, 0)"]}
            style={{
                width: '100%',
                alignItems: 'center',
                top: 0,
                height: 150,
                position: 'absolute',
            }}>
        </LinearGradient>
    )
}

export default Linear