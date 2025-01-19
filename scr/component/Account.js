import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Account = ({ title, imagesource, titleone, titletwo }) => {
    return (
        <View style={{ flex: 1, }}>
            <View style={styles.maincontenar}>
                <View style={styles.row}>
                    <Text style={styles.scratch}>{title}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={imagesource} style={styles.coinstyle} />
                        <Text style={styles.coin}>{titleone}</Text>
                    </View>
                </View>
                <Text style={styles.feb}>{titletwo}</Text>
            </View>

        </View>
    )
}

export default Account;
const styles = StyleSheet.create({
    maincontenar: {
        height: 84,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 10,
        borderWidth: 1,
        margin: 10,
        padding: 20,
        backgroundColor: "rgba(113, 26, 221, 0.05)"
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    scratch: {
        color: 'black',
        fontSize: 17,
        fontWeight: '800',
    },

    coin: {
        color: 'black',
    },
    feb: {
        color: 'black',
        marginTop: 10,
    },
    coinstyle: {
        marginHorizontal:5,
        height:20,
        width:20,

    },
})