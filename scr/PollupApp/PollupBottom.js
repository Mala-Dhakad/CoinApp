import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Refer from './Refer';
import TatalEarning from './TatalEarning';
import Account from './Account';
import RewardScreen from './RewardScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TatalEarningone from './TatalEarningone';

const PollupBottom = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            headerShown:false,
            tabBarStyle: {
              backgroundColor: 'white', 
              height: 80,  
            //   borderTopLeftRadius: 20 
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 16, 
          fontWeight: 'bold', 
        },
        }} >
            <Tab.Screen name='Home' component={Refer} options={{
                tabBarIcon: ({ focused, color, size }) => (<Image source={require("../assets/home.png")} style={styles.image} />) }} />



            <Tab.Screen name='Challenges' component={TatalEarningone} options={{
                tabBarIcon: ({
                }) => (
                    <Image source={require("../assets/challen.png")} style={styles.image} />
                )
            }} />
            <Tab.Screen name='Invite' component={Account} options={{
                tabBarIcon: ({
                }) => (
                    <Image source={require("../assets/invite.png")} style={styles.image} />
                )
            }} />
            <Tab.Screen name='Score' component={RewardScreen} options={{
                tabBarIcon: ({
                }) => (
                    <Image source={require("../assets/score.png")} style={styles.image} />
                )
            }} />

        </Tab.Navigator>
    )

}

export default PollupBottom;
const styles = StyleSheet.create({
    image: {
        height:25,
        width: 25,
    }
})