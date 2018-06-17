/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

function NotEnouchHintsScreen(props: Props) {
  const { normalAnswerHintNumber, secretAnswerHintNumber } = props.navigation.state.params;
  console.log('ss:', secretAnswerHintNumber);
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: '#FF69B4',
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 20,
    },
    buttonStyle: {
      width: 200,
      height: 180,
      borderColor: 'transparent',
      borderWidth: 0,
      borderRadius: 30,
      backgroundColor: '#ffffff',
      marginTop: 80,
      shadowOffset: { width: 4, height: 4 },
      shadowColor: 'black',
      shadowOpacity: 0.3,
    },
  });
  return (
    <View style={styles.container}>
      <Button
        buttonStyle={styles.buttonStyle}
        color="#000000"
        fontWeight="900"
        fontSize="14"
        title="答えたヒント数が足りないよ。たくさんのヒントに答えてね！"
      />
      <Text style={{
 color: '#ffffff', marginTop: 40, fontWeight: '900', fontSize: '18',
}}
      >{secretAnswerHintNumber === 0 ? '急接近ヒントの入力が1つ足りません。' : ''}
      </Text>
      <Text style={{
 color: '#ffffff', fontWeight: '900', fontSize: '18',
}}
      >{normalAnswerHintNumber <= 6 ? `ノーマルヒントの入力が${7 - normalAnswerHintNumber}つ足りません。` : ''}
      </Text>
    </View>
  );
}

export default NotEnouchHintsScreen;
