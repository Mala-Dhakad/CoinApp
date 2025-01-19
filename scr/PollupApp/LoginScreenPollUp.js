import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import ButtonGoogle from '../PollupAppCom/ButtonGoogle';

const LoginScreenPollUp = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require("../assets/half.png")} style={styles.half}>
      
        <Image source={require("../assets/PollupLogo.png")} style={styles.second} />
      </ImageBackground>
      <View style={styles.contentContainer}>
        <Text style={styles.login}>Login</Text>
        <ButtonGoogle
          imageSource={require("../assets/google.png")}
          title={"Login"}
          onPress={() => navigation.navigate("BottomStack")}
        />
      </View>
    </View>
  );
};

export default LoginScreenPollUp;

const styles = StyleSheet.create({
  half: {
    width: '100%',
    height: '70%', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  second: {
    position: 'absolute',
    top: '20%', 
    justifyContent: 'center',
    alignSelf: 'center',
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },


  login: {
    color: 'black',
    fontSize: 18,
    fontWeight: "800",
  
  },
});
