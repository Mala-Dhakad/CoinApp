import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'



const DrawWinnerCom = ({ imagesource, title, titleone, titletwo, titlethree, win, LinearOne, DrawWinnerLinear }) => {
    return (
        <View style={{ flex: 1, }}>
            <View style={styles.maincontenar}>
                <View style={styles.row}>
                    <Image source={imagesource} style={styles.image} />

                    <View style={styles.setone}>
                        <Text style={styles.text}>{title}</Text>
                        <Text style={styles.textone}>{titleone}</Text>

                    </View>
                </View>



                <View style={styles.second}>
                    <Text style={styles.twotitle}>{titletwo}</Text>
                   { DrawWinnerLinear}
                </View>
            </View>

        </View>
    )
}

export default DrawWinnerCom;
const styles = StyleSheet.create({
    maincontenar: {
        height: 90,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 10,
        borderWidth: 1,
        margin: 10,
        backgroundColor: "rgba(113, 26, 221, 0.05)"
    },
    row: {
        flexDirection: 'row',
    },
    buttonone: {
        height: 28,
        width: 108,
        borderRadius: 20,
        borderWidth: 1,
        margin: 10,
        marginHorizontal: 30,

    },

    image: {
        height: 40,
        width: 40,
        marginTop: 20,
        marginHorizontal: 10,

    },
    text: {
        color: "black",
        fontSize: 18,
        fontWeight: "800",
    },
    textone: {
        color: "black",
        fontSize: 15,
       
    },
    second: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingEnd:10,
    },
    setone: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex:1,
        alignItems:'center',
        padding:10,
    },
    twotitle:{
         marginHorizontal: 70,
          color: "black",
         }
})