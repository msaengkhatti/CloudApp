import React from 'react';
import {StyleSheet, View, Image, ScrollView, SafeAreaView} from 'react-native';
import AppStatusBar from '../AppStatusBar';

import {connect} from 'react-redux';
import ImageUploader from '../ImageUploader';
import {addImages} from '../../actions/actions';
import NavigationBar from '../NavigationBar';
import PhotoGallery from '../PhotoGallery';
import {ACTION} from '../../constants';

class Home extends React.Component {
  onLoad = images => {
    this.props.addImages(ACTION.ADD_IMAGES, images);
  };

  renderImage = () => {
    const images = this.props.source;
    return this.props.source.length > 0 ? (
      <ScrollView>
        <View style={styles.container}>
          <PhotoGallery images={images} />
        </View>
      </ScrollView>
    ) : (
      <View style={styles.container}>
        <ImageUploader onLoad={this.onLoad} />
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          {/* <AppStatusBar /> */}
          {this.renderImage()}
        </SafeAreaView>
        <NavigationBar />
      </View>
    );
  }
}

const mapStateToProps = state => {
  if (state.imagesStore && state.imagesStore.images) {
    return {source: state.imagesStore.images};
  } else return {source: null};
};

const mapDispatchToProps = {addImages};

const styles = StyleSheet.create({
  scrollViewContent: {},
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 400,
    height: 400,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
