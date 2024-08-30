
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Jiv = ({ title, onPress }) => {
  return (
    <View style={{ paddingHorizontal: 37, }}>
      <TouchableOpacity style={styles.button}
        onPress={onPress}>
        <View style={styles.content}>

          <Text style={styles.text}>{title}</Text>
          <Image
            source={require('../assets/For.png')}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 45,
    width: "100%",
    borderRadius: 6,
    borderColor: "rgba(0, 0, 0, 0.25)",
    borderWidth: 1,
    justifyContent:'center',
    paddingHorizontal: 10,
    marginTop: 24,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  image: {
    width: 30,
    height: 30,
    // marginRight: 10, 
  },
  text: {
    fontSize: 16,
  },
});

export default Jiv;
