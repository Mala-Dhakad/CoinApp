import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import ButtonBig from '../component/ButtonBig';
import Convert from '../component/Convert';


const Quizone = () => {
    return (
        <View style={{ flex: 1, }}>
            <Image source={require("../assets/image.png")} style={styles.backimage} />
            <View style={{ flexDirection: 'row',marginTop:10, }}>
                <Image source={require("../assets/back.png")} />
                <Text style={styles.text}>Quiz</Text>
            </View>
            <Text style={styles.textOne}>How does kendrick reacy to moving {"\n"}objects?</Text>
            <TouchableOpacity>
                <Text style={{ color: 'white' }}>00:48</Text>
            </TouchableOpacity>
            <View style={styles.whitecolor}>
                <ButtonBig imageSoure={require("../assets/of.png")}
                    title={"Nwe super mario bros"} />
                <ButtonBig imageSoure={require("../assets/of.png")}
                    title={"Mario party 4"} />
                <ButtonBig imageSoure={require("../assets/of.png")}
                    title={"Super mario 3D world"} />
                <ButtonBig imageSoure={require("../assets/of.png")}
                    title={"Mario Kart vil"} />
                <Convert title={"Continue"} />
                <Text style={ styles.Question}>Question 01/10</Text>
            </View>

        </View>

    );
}
export default Quizone;
const styles = StyleSheet.create({
    backimage: {
        flex: 1,
        height: "100%",
        width: '100%',
        position: 'absolute'
    },
    text: {
        width:'100%',
        color: 'white',
        fontWeight: '800',
        fontSize: 18,
        textAlign:'center',
        
    },
    textOne: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
    },
    whitecolor: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 70,
        borderTopLeftRadius: 19,
        borderTopRightRadius: 19,
        position: 'absolute',
    },
    whitecolor: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 70,
        borderTopLeftRadius: 19,
        borderTopRightRadius: 19,
    },
    Question: { 
        justifyContent: 'center',
         alignSelf: 'center',
          marginTop: 10,
           color: 'black'
         },
})
