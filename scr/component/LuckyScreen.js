import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearTwo from './LinearTwo';


const LuckyScreen = ({ imagesource, title, titleone, titletwo, titlethree, win, LinearOne ,LinearTwo}) => {
    return (
        <View style={{ flex: 1, }}>
            <View style={styles.maincontenar}>
                <View style={styles.row}>
                    <Image source={imagesource} style={styles.image} />

                    <View style={styles.set}>
                        <Text style={styles.text}>{title}</Text>
                        <Text style={styles.textone}>{titleone}</Text>

                    </View>
                </View>



                <View style={styles.second}>
                    <Text style={{ marginHorizontal: 80, color: "black" }}>{titletwo}</Text>
                    <Text style={{ color: 'black', }}>{titlethree}</Text>
                </View>



                <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                    <TouchableOpacity style={styles.buttonone}>
                        <Text style={styles.win}>{win}</Text>
                    </TouchableOpacity>
                    {LinearOne}
                    {/* {LinearTwo} */}
                    {/* {LinearTwo} */}
                </View>
            </View>

        </View>
    )
}

export default LuckyScreen;
const styles = StyleSheet.create({
    maincontenar: {
        height: 140,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        // width: 340,
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
        borderColor:"#8F33CF",
        justifyContent:'center',

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
        marginTop: 20,
        marginHorizontal: 10,
    },
    textone: {
        color: "black",
        fontSize: 15,
        marginTop: 20,
    },
    second: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:5,

    },
    set: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex:1,
        alignItems:'center',
        padding:10,
    },
    win:{
         textAlign: 'center',
     color:"#8F33CF"
     
         }
})