import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

let DEFAULT_IMAGE = require('../resources/images/image-placeholder-300x210.png');

const ImageUploarder = ({onLoad}) => {
  const openImagePicker = () => {
    ImagePicker.openPicker({
      multiple: true,
      includeBase64: true,
    }).then(images => {
      onLoad({uri: `data:${images[0].mime};base64,${images[0].data}`});
    });
  };
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    image: {
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openImagePicker}>
        <Image source={DEFAULT_IMAGE} style={styles.image} />
        <Text>Add Image Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageUploarder;
