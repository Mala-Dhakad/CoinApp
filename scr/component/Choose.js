import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker';


const Choose = ({ title, onPress, imageSoure }) => {

    return (
        <View style={{ paddingHorizontal: 25, marginTop: 20, }}>
            {/* <TouchableOpacity
                onPress={onPress} style={styles.buttonstyle}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={styles.textone}>{title}</Text>
                    <Image source={imageSoure} style={styles.backbutton} />
                </View>
            </TouchableOpacity> */}

            <Picker style={{backgroundColor: "rgba(113, 26, 221, 0.05)",}}>
                        <Picker.Item label="Choose Categroy" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonstyle: {
        height: 40,
        width: "100%",
        color: 'black',
        borderWidth: 0.1,
        borderColor: 'back',
        backgroundColor: "rgba(113, 26, 221, 0.05)",


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

export default Choose;