import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const AccountCom = ({ title, titleone, withdrawal, amount, pending,color="black"}) => {
    return (
        <View style={{ flex: 1,paddingHorizontal:10, }}>
            <View style={styles.container}>
                <View style={styles.flexdirection}>
                    <Text>{title}</Text>
                    <Text>{titleone}</Text>
                </View>
                <Text style={styles.withdrawal}>{withdrawal}</Text>
                <View style={styles.penging}>
                    <Text style={{color:"red"}}>{amount}</Text>
                    <Text style={{color:"green"}}>{pending}</Text>
                </View>
            </View>

        </View>
    )
}

export default AccountCom
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 112,
        borderRadius: 20,
        backgroundColor: 'white',
        margin: 5,
        // padding: 10,
        // borderWidth: 1,
    },
    flexdirection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        color: 'black',
        fontSize: 16,
    },
    penging: {
        flexDirection: 'row',
        justifyContent: "space-between",
        margin:5,
    },
    withdrawal: {
        color: 'black',
        fontSize: 16,
        fontWeight: '800',
        marginHorizontal: 10,
        marginTop: 5,
    },
    color:{
        color:'black',
    }
})