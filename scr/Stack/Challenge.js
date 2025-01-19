import { View, Text } from 'react-native'
import React from 'react'
import ChallengeCom from '../component/ChallengeCom'
import Color from '../PollupAppCom/Color'

const Challenge = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
                <ChallengeCom
                    backgroundColor={"pink"}
                    imageSource={require("../assets/calendar.png")}
                    title={"Day 1"} />

                <ChallengeCom
                    backgroundColor={"green"}
                    imageSource={require("../assets/calendar.png")}
                    title={"Day 2"} />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <ChallengeCom
                    backgroundColor={"black"}
                    imageSource={require("../assets/calendar.png")}
                    title={"Day 3"} />

                <ChallengeCom
                    backgroundColor={"red"}
                    imageSource={require("../assets/calendar.png")}
                    title={"Day 4"} />
            </View>


            <View style={{ flexDirection: 'row' }}>
                <ChallengeCom
                    backgroundColor={"pink"}
                    imageSource={require("../assets/calendar.png")}
                    title={"Day 5"} />

                <ChallengeCom
                    backgroundColor={"green"}
                    imageSource={require("../assets/calendar.png")}
                    title={"Day 6"} />
            </View>
        </View>
    )
}

export default Challenge


{/* <Color imageSource={require("../assets/coin.png")} */}
// title={"Update account"}/>