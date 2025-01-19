import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Button from '../component/Button'
import Linear from '../component/Linear'
import Convert from '../component/Convert'


const Tickets = () => {
    return (
        <View style={{ flex: 1 }}>
            <Image source={require("../assets/image.png")} style={styles.containar} />
            <View style={styles.direction}>
                <Image source={require("../assets/back.png")} />
                <Text style={styles.Tickets}>Coins To Tickets</Text>
            </View>
            <Image source={require("../assets/background.png")} style={styles.backimage} />
            <Image source={require("../assets/coinsse.png")} style={styles.secondimage} />
            <Button title={"please enter number of tickets"} />
            <Convert title={"Convert"} />
            {/* <Linear title={"Convert"}/> */}
            <Text style={styles.equal}>1ticket is equal to 10 coins</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    containar: {
        flex: 1,
        position: 'absolute',
    },
    direction: {
        flexDirection: 'row',
        marginTop: 50,

    },
    backimage: {
        height: "100%",
        width: "100%",
        marginTop: 100,
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
    },

    Tickets: {
        color: 'white',
        fontSize: 20,
        width: '100%',
        textAlign:'center',
    },
    secondimage: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 50,
        height: 240,
        width: 240,
    },
    equal: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 30,
        fontSize: 17,
        fontWeight: "500",
    }
})

export default Tickets