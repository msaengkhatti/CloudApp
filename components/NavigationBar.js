import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';

export default function NavigationBar({}) {
  const styles = StyleSheet.create({
    NavContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: 'black',
      paddingTop: 10,
      paddingBottom: 30,
    },
  });

  return (
    <View style={styles.NavContainer}>
      <Icon
        name="photo"
        type="ionicons"
        color="white"
        onPress={() => console.log('images')}
      />
      <Icon
        name="users"
        type="font-awesome"
        color="white"
        onPress={() => console.log('users')}
      />
      <Icon
        name="settings"
        type="ionicons"
        color="white"
        onPress={() => console.log('setting')}
      />
    </View>
  );
}
