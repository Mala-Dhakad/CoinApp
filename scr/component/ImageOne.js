// ImageComponent.js

import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const ImageOne = ({ source, style }) => {
  return (
    <View>
      <Image source={source} style={[styles.image, style]} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100, 
    height: 100, 
    resizeMode: 'cover', 
  },
});

export default ImageOne;
