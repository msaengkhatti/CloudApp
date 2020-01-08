import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';

export default function AppStatusBar({}) {
  const styles = StyleSheet.create({
    bar: {height: 44, backgroundColor: '#5E8D48'},
  });
  return <StatusBar styles={styles.bar} />;
}
