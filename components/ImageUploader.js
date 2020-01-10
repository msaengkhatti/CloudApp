import React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {DEFAULT_IMAGE} from '../constants';

export default ImageUploarder = ({onLoad}) => {
  const openImagePicker = () => {
    ImagePicker.openPicker({
      multiple: true,
      includeBase64: false,
    }).then(images => {
      onLoad(images);
    });
  };
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    text: {
      padding: 30,
    },
  });

  return (
    <TouchableOpacity onPress={openImagePicker}>
      <View style={styles.container}>
        <Image source={DEFAULT_IMAGE} />
        <Text style={styles.text}>Add New Photo</Text>
      </View>
    </TouchableOpacity>
  );
};
