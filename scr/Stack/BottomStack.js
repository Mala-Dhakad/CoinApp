
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Wallte from './Wallte';
import SurveyOffers from './SurveyOffers';
import Luckydraw from './Luckydraw';
import LuckyDrawWinner from './LuckyDrawWinner';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from 'react-native';



const Tab = createBottomTabNavigator();
const BottomStack = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='Wallet' component={Wallte} options={{
                tabBarIcon: ({
                }) => (
                    <Image source={require("../assets/coin.png")}/>
                )
            }} />
            <Tab.Screen name="Lucky" component={Luckydraw} options={{
                tabBarIcon: ({
                }) => (
                    <Image source={require("../assets/coin.png")}/>
                )
            }} />
            <Tab.Screen name="LuckyDraw" component={LuckyDrawWinner} options={{
                tabBarIcon: ({
                }) => (
                    <Image source={require("../assets/coin.png")}/>
                )
            }} />
            <Tab.Screen name="Streaks" component={SurveyOffers}  options={{
                tabBarIcon: ({
                }) => (
                    <Image source={require("../assets/coin.png")}/>
                )
            }} />
        </Tab.Navigator>
    )
}

export default BottomStack