import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {DEFAULT_IMAGE} from '../constants';

export default class ImageGallery extends React.Component {
  super({images: []}) {
    this.state = {
      isExpand: false,
      isOpenModal: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={DEFAULT_IMAGE} style={styles.image} />
        <Image source={DEFAULT_IMAGE} style={styles.image} />
        <Image source={DEFAULT_IMAGE} style={styles.image} />
        <Image source={DEFAULT_IMAGE} style={styles.image} />
        <Image source={DEFAULT_IMAGE} style={styles.image} />
        <Image source={DEFAULT_IMAGE} style={styles.image} />
        <Image source={DEFAULT_IMAGE} style={styles.image} />
        <Image source={DEFAULT_IMAGE} style={styles.image} />
        <Image source={DEFAULT_IMAGE} style={styles.image} />
        <Image source={DEFAULT_IMAGE} style={styles.image} />
        <Image source={DEFAULT_IMAGE} style={styles.image} />
        <Image source={DEFAULT_IMAGE} style={styles.image} />
        <Image source={DEFAULT_IMAGE} style={styles.image} />
        <Image source={DEFAULT_IMAGE} style={styles.image} />
        <Image source={DEFAULT_IMAGE} style={styles.image} />
        <Image source={DEFAULT_IMAGE} style={styles.image} />
        <Image source={DEFAULT_IMAGE} style={styles.image} />
        <Image source={DEFAULT_IMAGE} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    alignContent: 'flex-start',
    height: 1000,
    flexWrap: 'wrap',
  },
  image: {
    // marginVertical: 2,
    // marginHorizontal: 4,
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    justifyContent: 'center',
  },
});
