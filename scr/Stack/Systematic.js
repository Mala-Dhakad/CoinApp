import { View, Text, ScrollView  } from 'react-native'
import React from 'react'
import Linear from '../component/Linear'
import BigButton from '../component/BigBUtton'
import Common from '../component/Common'




const Systematic = () => {
  return (
    <View>
        <ScrollView>
     <Linear/>
     <View style={{ paddingHorizontal: 15, }}>
<Text style={{ 
    marginTop:20,
     Color:'white',
    fontWeight:600,
    fontSize:15,
}}>JIVDHANI HOSPITAL</Text>
<View style={{ flexDirection: 'row', gap: 55, }}>
  <Text style={{
    color: 'black',
    fontWeight: 600,
    fontSize: 15,
    marginTop: 15,
  }}>Suraaj Singh (31 Y, Male)
  </Text>
  <Text style={{
    color: 'black',
    fontWeight: 600,
    fontSize: 15,
    marginTop: 15,
  }}>375  9852385294</Text>
</View>
<BigButton title={"Systematic Examination"} />
<Text style={{
  color: 'black',
  fontWeight: 600,
  fontSize: 15,
  marginTop: 20,
}}>5th Visit</Text>
<View style={{
  flexDirection: 'row',
  gap: 40,
  marginTop: 5,
  marginHorizontal: 20,
}}>
  <Text>Load Template</Text>
  <Text>Save as Template</Text>
  <Text>Clear all</Text>
</View>
<Text style={{
    color: 'black',
    fontWeight: 600,
    fontSize: 15,
    marginTop: 20,
  }}>Mark all fields as NAD
  </Text>
  <Common title={"General."}/>
  <Common title={"CVS"}/>
  <Common  title={"RS"}/>
  <Common  title={"CNS"}/>
  <Common title={"PA"}/>
  <Common title={"ENT"}/>
 

    </View>
    </ScrollView>
    </View>
  )
}

export default Systematic