import { View, Text, ImageBackground, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import Survery from '../component/Survery';
import SurveryOne from '../component/SurveryOne';


const SurveyOffers = () => {
    return (
        <View style={{ flex: 1, }}>
            <ScrollView>
                <ImageBackground source={require("../assets/image.png")} style={styles.backimage} />
                <View style={styles.header}>
                    <Image source={require("../assets/back.png")} />
                    <Text style={styles.text}>Survey Offers</Text>
                    <Image source={require("../assets/info.png")} style={styles.circle} />
                </View>
                <View style={styles.whitecolor}>
                    <SurveryOne imageSource={require("../assets/survey.png")}
                        title={"TH Survey"}
                        titleone={"Complete Survey"}
                        buttonone={"Take Survey"} />
                    <SurveryOne imageSource={require("../assets/survey.png")}
                        title={"Wannads Survey"}
                        titleone={"Complete Survey"}
                        buttonone={"Take Survey"} />
                    <SurveryOne imageSource={require("../assets/survey.png")}
                        title={"MM Wall Survey"}
                        titleone={"Complete Survey"}
                        buttonone={"Take Survey"} />
                    <SurveryOne imageSource={require("../assets/survey.png")}
                        title={"CPA Lead Survey"}
                        titleone={"Complete Survey"}
                        buttonone={"Take Survey"} />
                    <SurveryOne imageSource={require("../assets/survey.png")}
                        title={"CPX Survey"}
                        titleone={"Complete Survey"}
                        buttonone={"Take Survey"} />
                </View>
            </ScrollView>

        </View>
    )
}

export default SurveyOffers;
const styles = StyleSheet.create({
    backimage: {
        flex: 1,
        height: "100%",
        width: "100%",
        position: 'absolute',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        marginTop: 30,
        padding: 15,
    },
    text: {
        fontSize: 19,
        fontWeight: "600",
        color: "white",
    },
    circle: {
        height: 20,
        width: 20,
    },
    whitecolor: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20,
        borderTopLeftRadius: 19,
        borderTopRightRadius: 19,
    },
})