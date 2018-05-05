/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ConfirmShootArrowsScreen() {
  return (
    <View style={styles.container}>
      <Text>矢を放つ確認ページを表示する。</Text>
    </View>
  );
}

export default ConfirmShootArrowsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
