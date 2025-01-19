import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const RewardHistorycom = ({ title, titleone, titlethree, titleforth, imagesource,backgroundColor }) => {
    return (
        <View style={{ flex: 1, }}>
            <View style={styles.maincontent}>
                <View style={styles.rowset}>
                    <Text style={styles.paytm}>{title}</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textstyle}>{titleone}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowsetone}>
                    <Text style={styles.feb}>{titlethree}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={imagesource} style={styles.imagestyle} />
                        <Text style={styles.coins}>{titleforth}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default RewardHistorycom;
const styles = StyleSheet.create({
    maincontent: {
        height: 88,
        // borderWidth: 1,
        margin: 10,
        borderRadius:10,
        backgroundColor: "rgba(113, 26, 221, 0.05)",
    },
    rowset: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    rowsetone: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    button: {
        height: 24,
        width: 80,
        borderRadius: 20,
        borderWidth: 1,
    },
    textstyle: {
        textAlign: 'center',
    },
    paytm: {
        color: 'black',
        fontSize: 18,
        fontWeight: '800'
    },
    feb: {
        color: 'black'
    },
    coins: {
        color: 'black'
    },
    imagestyle: {
        height: 20,
        width: 20,
    }

})