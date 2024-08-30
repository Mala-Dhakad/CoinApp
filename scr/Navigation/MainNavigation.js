
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Demo from '../Stack/Demo'
import Bottom from '../Bottom';
const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ 
        ...(Platform.OS === 'android'
          ? {
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_right'
          }
          : {}),
      }}>
            {/* <Stack.Screen name="ScreenOne"  component={Demo} options={{ headerShown: false, }} ></Stack.Screen> */}
            {/* <Stack.Screen name="ScreenTwo"  component={Bottom} options={{ headerShown: false, }} ></Stack.Screen> */}
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation