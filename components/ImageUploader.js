import React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {DEFAULT_IMAGE} from '../constants';

export default ImageUploarder = ({onLoad}) => {
  const openImagePicker = () => {
    ImagePicker.openPicker({
      multiple: true,
      includeBase64: true,
    }).then(images => {
      onLoad({uri: `data:${images[0].mime};base64,${images[0].data}`});
    });
  };
  const styles = StyleSheet.create({
    text: {
      justifyContent: 'center',
    },
  });

  return (
    <TouchableOpacity onPress={openImagePicker}>
      <Image source={DEFAULT_IMAGE} />
      <Text style={styles.text}>Add Image Now</Text>
    </TouchableOpacity>
  );
};
