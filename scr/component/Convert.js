import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const Convert = ({ title, onPress }) => {
  return (
    <View style={{paddingHorizontal:70,marginTop:20,}}>
    <LinearGradient
    colors={["#711ADD", "#8F33CF", "#A342C5", "#DA6FAB"]}
    style={{
        alignItems: 'center',
        top: 450,
        height: 40,
        width:"100%",
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    }}>
      <View>
        <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={styles.buttonstyle} >     
    <Text style={styles.textone}>{title}</Text>
    </TouchableOpacity>
    </View>
</LinearGradient>
</View>
) 
}
const styles = StyleSheet.create({
  buttonstyle: {
    height: 40,
    width: "100%",
    borderRadius:20,
  },
  textone: {
    color: 'white',
    fontSize: 18,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 5,
  },
});

export default Convert;




