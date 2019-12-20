import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ImageUploader from './components/ImageUploader';
import {addImages} from './actions/imageUploader';

class App extends React.Component {
  onLoad = res => {
    this.props.addImages([res.uri]);
  };

  renderImage = () => {
    return this.props.source ? (
      <View style={styles.container}>
        <Image source={{uri: this.props.source}} style={styles.image} />
      </View>
    ) : (
      <ImageUploader onLoad={this.onLoad} />
    );
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        {this.renderImage()}
      </>
    );
  }
}

const mapStateToProps = state => {
  if (state.images && state.images.imagesUri[0])
    return ({source: state.images.imagesUri[0]});
   else return {source: null}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addImages,
    },
    dispatch,
  );
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
    width: 400,
    height: 400,
    justifyContent: 'center',
  },
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
