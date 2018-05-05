/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Badge } from 'react-native-elements';

function ArrowsScreen(props) {
  return (
    <View style={styles.container}>
      <Text>恋の矢ページを表示する。</Text>
      <Badge
        containerStyle={{ backgroundColor: '#f0f' }}
        onPress={() => props.navigation.navigate('ChooseHints')}
      >
        <Text>矢を飛ばす</Text>
      </Badge>
    </View>
  );
}

export default ArrowsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
