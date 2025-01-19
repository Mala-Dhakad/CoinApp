
import React from 'react'
import{NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SplaceCoin from './SplaceCoin';
import LoginScreen from './LoginScreen';
import BottomStack from './BottomStack';
import Paytm from './Paytm';



const StackNavegation = ({navegation}) => {
   const Stack =createNativeStackNavigator(); 
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false,}}>
            <Stack.Screen name='SplaceScreen' component={SplaceCoin}/>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='BottomScreen' component={BottomStack}/>
            <Stack.Screen name='PaytmOne' component={Paytm}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavegation