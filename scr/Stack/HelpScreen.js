import { View, ScrollView } from 'react-native'
import React from 'react'
import HelpCom from '../component/HelpCom'
import Convert from '../component/Convert'


const HelpScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
            <HelpCom
                onetitle={"1"}
                title={"How to earn Coins"}
                ImageSource={require("../assets/add.png")}
            />
              <HelpCom
                onetitle={"2"}
                title={"How to earn Coins"}
                ImageSource={require("../assets/add.png")}
            />
              <HelpCom
                onetitle={"3"}
                title={"why a transaction refunded"}
                ImageSource={require("../assets/add.png")}
            />
              <HelpCom
                onetitle={"3"}
                title={"Refer a friend but not get coins"}
                ImageSource={require("../assets/add.png")}
            />
              <HelpCom
                onetitle={"4"}
                title={"why a transaction rejected"}
                ImageSource={require("../assets/add.png")}
            />
              <HelpCom
                onetitle={"5"}
                title={"Not getting my rewards"}
                ImageSource={require("../assets/add.png")}
            />
              <HelpCom
                onetitle={"6"}
                title={"Can i use VPN?"}
                ImageSource={require("../assets/add.png")}
            />
            <Convert title={"Convert Us"}/>
           </ScrollView>
        </View>
    )
}

export default HelpScreen