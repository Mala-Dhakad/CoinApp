import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import LinearOne from './LinearOne';

const Survery = ({ imageSource, title, titleone, buttonone }) => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 10, }}>
            < View style={styles.Component}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={imageSource} style={styles.image} />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.Survery}>{title}</Text>
                        <Text style={styles.complete}>{titleone}</Text>
              <LinearOne title={"Take Survey"}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Survery;
const styles = StyleSheet.create({
    Component: {
        width: "100%",
        height: 112,
        marginTop: 25,
      backgroundColor: "rgba(113, 26, 221, 0.05)",
        borderWidth:0.1,
        borderRadius: 5,
    },
    image: {
        height: 40,
        width: 40,
        margin: 20,
    },
    Survery: {
        fontSize: 18,
        fontWeight: "800",
        color: 'black',
        marginTop: 10,
        marginHorizontal:10,
    },
    complete: {
        marginHorizontal:10,
        fontSize: 17,
        color: 'black',
    },

})