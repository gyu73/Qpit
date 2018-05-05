/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Badge } from 'react-native-elements';

function ConfirmShootArrowsScreen(props) {
  return (
    <View style={styles.container}>
      <Text>矢を放つ確認ページを表示する。</Text>
      <Badge
        containerStyle={{ backgroundColor: '#f0f' }}
        onPress={() => props.navigation.navigate('ShootArrowResults')}
      >
        <Text>選択したヒントに矢を飛ばすか確認</Text>
      </Badge>
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
