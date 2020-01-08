import React from 'react';
import {StyleSheet, View, Image, ScrollView, SafeAreaView} from 'react-native';
import AppStatusBar from '../AppStatusBar';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ImageUploader from '../ImageUploader';
import {addImages} from '../../actions/imageUploader';
import NavigationBar from '../NavigationBar';
import PhotoGallery from '../PhotoGallery';

class Home extends React.Component {
  onLoad = res => {
    this.props.addImages([res.uri]);
  };

  renderImage = () => {
    const images = this.props.source
      ? [
          {
            uri: this.props.source,
          },
          {
            uri: this.props.source,
          },
          {
            uri: this.props.source,
          },
          {
            uri: this.props.source,
          },
          {
            uri: this.props.source,
          },
          {
            uri: this.props.source,
          },
          {
            uri: this.props.source,
          },
          {
            uri: this.props.source,
          },
          {
            uri: this.props.source,
          },
          {
            uri: this.props.source,
          },
          {
            uri: this.props.source,
          },
          {
            uri: this.props.source,
          },
          {
            uri: this.props.source,
          },
          {
            uri: this.props.source,
          },
          {
            uri: this.props.source,
          },
        ]
      : [];
    return this.props.source ? (
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
  if (state.images && state.images.imagesUri[0])
    return {source: state.images.imagesUri[0]};
  else return {source: null};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addImages,
    },
    dispatch,
  );
};

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
