/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ChooseHintsScreen() {
  return (
    <View style={styles.container}>
      <Text>ヒント選択ページを表示する。</Text>
    </View>
  );
}

export default ChooseHintsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
