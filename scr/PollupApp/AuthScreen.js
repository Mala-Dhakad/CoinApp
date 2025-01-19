import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplaceScreen from './SplaceScreen';
import LoginScreenPollUp from './LoginScreenPollUp';
import RewardScreen from './RewardScreen';
import BottomStack from '../Stack/BottomStack';
import PollupBottom from './PollupBottom';

const AuthScreen = () => {
    const Stack =createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false,}}>
      <Stack.Screen name="Splacescreen" component={SplaceScreen}/>
        <Stack.Screen name='BottomStack' component={PollupBottom}/>
        <Stack.Screen name='Login' component={LoginScreenPollUp}/>
        {/* <Stack.Screen name='BottomScreen' component={BottomStack}/> */}
        <Stack.Screen name='RewardSreen' component={RewardScreen}/>
    </Stack.Navigator>
</NavigationContainer>
  )
}

export default AuthScreen