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
    messageBox: {
      backgroundColor: 'white',
      marginTop: 30,
      borderRadius: 20,
      padding: 12,
      alignItems: 'flex-start',
    },
    message: {
      fontSize: 12,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.messageBox}>
        <Text style={styles.message}>登録したヒント数が足りないよ！</Text>
        <Text style={styles.message}>もっとヒント数を入力してね！</Text>
      </View>
      <Text style={{
 color: '#ffffff', marginTop: 40, fontWeight: '900', fontSize: 18,
}}
      >{secretAnswerHintNumber === 0 ? '急接近ヒントが1つ足りないよ！' : ''}
      </Text>
      <Text style={{
 color: '#ffffff', fontWeight: '900', fontSize: 18,
}}
      >{normalAnswerHintNumber <= 6 ? `ノーマルヒントが${7 - normalAnswerHintNumber}つ足りないよ！` : ''}
      </Text>
    </View>
  );
}

export default NotEnouchHintsScreen;
