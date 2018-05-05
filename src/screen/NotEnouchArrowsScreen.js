/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function NotEnouchArrowsScreen() {
  return (
    <View style={styles.container}>
      <Text>矢が足りないページを表示する。</Text>
    </View>
  );
}

export default NotEnouchArrowsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
