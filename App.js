/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ImageUploader from './components/ImageUploader';

class App extends React.Component {
  state = {
    source: null,
    sometext: '',
  };

  componentWillMount() {}

  onLoad = source => {
    this.setState({
      source: source,
    });
  };

  renderImage = () => {
    return this.state.source ? (
      <View style={styles.container}>
        <Image source={this.state.source} style={styles.image} />
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

export default App;
