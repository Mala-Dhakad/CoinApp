import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const ButtonBig = ({ title, onPress, imageSoure }) => {
    return (
        <View style={{ paddingHorizontal: 25, marginTop: 20, }}>
            <TouchableOpacity
                onPress={onPress} style={styles.buttonstyle}>
                <View style={{ flexDirection: 'row',}}>
                    <Image source={imageSoure} style={styles.backbutton} />
                    <Text style={styles.textone}>{title}</Text>

                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonstyle: {
        height: 48,
        width: "100%",
        color: 'black',
        borderWidth: 0.2,
        borderColor: 'back',
        backgroundColor: 'white',
        justifyContent:'center',
        

    },
    textone: {
        color: 'black',
        fontSize: 16,
        margin: 5,
    },
    backbutton: {
        height: 24,
        width: 24,
        margin: 10,
        justifyContent: 'center',
        alignSelf: 'center',
    }
});

export default ButtonBig;