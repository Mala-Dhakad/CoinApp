import { View, Text,ScrollView} from 'react-native'
import React from 'react'
import AccountHistory from '../Stack/AccountHistory'
import AccountCom from '../PollupAppCom/AccountCom'


const RewardScreen = () => {
  return (
    <View style={{flex:1,}}>
      <ScrollView>
<AccountCom title={"Transaction ID # 456789"}
      titleone={"Dec 2, 2023103:20 PM"}
      withdrawal={"Survey Participation"}
      amount={"Amount ₹10.00"}
/>

  <AccountCom title={"Transaction ID # 456789"}
      titleone={"Dec 2, 2023103:20 PM"}
      withdrawal={"Withdrawal"}
      amount={"Amount ₹10.00"}
     />
      <AccountCom title={"Transaction ID # 456789"}
      titleone={"Dec 2, 2023103:20 PM"}
      withdrawal={"Withdrawal"}
      amount={"Amount ₹10.00"}
     />
      <AccountCom title={"Transaction ID # 456789"}
      titleone={"Dec 2, 2023103:20 PM"}
      withdrawal={"Withdrawal"}
      amount={"Amount ₹10.00"}
     />
      <AccountCom title={"Transaction ID # 456789"}
      titleone={"Dec 2, 2023103:20 PM"}
      withdrawal={"Withdrawal"}
      amount={"Amount ₹10.00"}
     />
      <AccountCom title={"Transaction ID # 456789"}
      titleone={"Dec 2, 2023103:20 PM"}
      withdrawal={"Withdrawal"}
      amount={"Amount ₹10.00"}
     />
     </ScrollView>
    </View>
  )
}

export default RewardScreen