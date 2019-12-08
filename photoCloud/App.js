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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ImagePicker from 'react-native-image-picker';

class App extends React.Component {
  state = {
    source: null,
    sometext: '',
  };

  componentWillMount() {
    // this.openImagePicker();
  }

  openImagePicker = () => {
    options = {
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // source = response.uri;
        // You can also display the image using data:
        console.log(response);
        const source = response;
        this.setState({
          source: source,
          sometext: 'test',
        });
        // console.log(source);
      }
    });
  };

  getImage = () => {
    return this.state.source
      ? this.state.source
      : require('./resources/images/image-placeholder-300x210.png');
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <TouchableOpacity onPress={this.openImagePicker}>
            <Image source={this.getImage()} style={styles.image} />
            <Text>Add Image Now</Text>
          </TouchableOpacity>
          {this.state.sometext ? <Text>{this.state.sometext}</Text> : null}
          {/* {this.state.avatarSource && <Text>{this.state.avatarSource}</Text>} */}
        </View>
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
    justifyContent: 'center',
  },
});

export default App;
