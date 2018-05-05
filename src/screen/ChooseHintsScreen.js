/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Badge } from 'react-native-elements';

function ChooseHintsScreen(props) {
  return (
    <View style={styles.container}>
      <Text>ヒント選択ページを表示する。</Text>
      <Badge
        containerStyle={{ backgroundColor: '#f0f' }}
        onPress={() => props.navigation.navigate('ConfirmShootArrows')}
      >
        <Text>シークレットヒントに矢を飛ばす</Text>
      </Badge>
      <Badge
        containerStyle={{ backgroundColor: '#f0f' }}
        onPress={() => props.navigation.navigate('ConfirmShootArrows')}
      >
        <Text>ノーマルヒントに矢を飛ばす</Text>
      </Badge>
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
