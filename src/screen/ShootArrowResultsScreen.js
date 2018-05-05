/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ShootArrowResultsScreen() {
  return (
    <View style={styles.container}>
      <Text>矢を放った結果を表示する</Text>
    </View>
  );
}

export default ShootArrowResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
