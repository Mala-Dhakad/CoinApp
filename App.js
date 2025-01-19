import { View, Text } from 'react-native'
import React from 'react'
import AuthScreen from './scr/PollupApp/AuthScreen';
import BottomStack from './scr/Stack/BottomStack';
import TatalEarning from './scr/PollupApp/TatalEarning';
import TatalEarningone from './scr/PollupApp/TatalEarningone';
import StackNavegation from './scr/Stack/StackNavegation';
import SplaceCoin from './scr/Stack/SplaceCoin';
import LoginScreen from './scr/Stack/LoginScreen';
import SurveyOffers from './scr/Stack/SurveyOffers';
import ScratchCard from './scr/Stack/ScratchCard';
import Lucky from './scr/component/Lucky';
import Luckydraw from './scr/Stack/Luckydraw';
import Luckynumber from './scr/Stack/Luckynumber';
import Profile from './scr/Stack/Profile';
import AccountHistory from './scr/Stack/AccountHistory';
import JackpotScreen from './scr/Stack/JackpotScreen';
import GetLuckyNumber from './scr/Stack/GetLuckyNumber';



const App = () => {
  return (
    <View style={{flex:1,}}>
<GetLuckyNumber/>
    </View>
  )
}

export default App;