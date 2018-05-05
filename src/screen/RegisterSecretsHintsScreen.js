/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function RegisterSecretsHintsScreen() {
  return (
    <View style={styles.container}>
      <Text>ヒント登録ページを表示する。</Text>
    </View>
  );
}

export default RegisterSecretsHintsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
