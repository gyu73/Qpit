/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Badge } from 'react-native-elements';

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text>ホームページを表示する。</Text>
      <Badge
        containerStyle={{ backgroundColor: '#f0f' }}
        onPress={() => props.navigation.navigate('RegisterHints')}
        >
        <Text>ヒント選択ページへ移動</Text>
      </Badge>
      <Badge
        containerStyle={{ backgroundColor: '#f0f' }}
        onPress={() => props.navigation.navigate('RegisterSecretHints')}
        >
        <Text>急接近ヒント選択ページへ移動</Text>
      </Badge>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
