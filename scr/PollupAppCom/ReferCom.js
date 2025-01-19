import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'


const ReferCom = ({ title, titleone, titletwo, imageSource, color = "black" }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.maincom}>
                <View style={styles.row}>
                    <Image source={imageSource} />
                    <View style={styles.rowstyle}>
                        <Text style={{ color: "black" }}>{title}</Text>
                        <Text style={{ color: "black" }}>{titleone}</Text>
                    </View>
                    <Text style={styles.haysas}>{titletwo}</Text>
                </View>
            </View>
        </View>
    )
}

export default ReferCom
const styles = StyleSheet.create({
    maincom: {
        width: '100%',
        height: 72,
        borderRadius: 20,
        backgroundColor: '',
        padding: 10,
        margin: 10,
    },
    rowstyle: {
        flexDirection: "column",
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    haysas: {
        marginHorizontal: 50,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})