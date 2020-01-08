import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';
import PhotoTile from './PhotoTile';
import ImageView from 'react-native-image-viewing';

class PhotoGallery extends PureComponent {
  state = {
    expand: false,
    visible: true,
  };

  render() {
    const {images} = this.props;
    return (
      <View style={styles.container}>
        <ImageView
          images={images}
          imageIndex={0}
          visible={this.state.visible}
          onRequestClose={() =>
            this.setState({
              visible: false,
            })
          }
        />

        {images.map(image => (
          <View style={styles.imageWraper}>
            <PhotoTile source={image} ratio={3.1} />
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  imageWraper: {
    padding: 2,
  },
});

export default PhotoGallery;
