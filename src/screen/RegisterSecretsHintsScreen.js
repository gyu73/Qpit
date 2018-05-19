/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

type Props = {
  navigation: {
    state: {
      params: string
    }
  }
}

function RegisterHintsScreen(props: Props) {
  const { hint } = props.navigation.state.params;
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: '#FF69B4',
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 20,
    },
    secretHintButtonStyle: {
      width: 180,
      height: 40,
      borderColor: 'transparent',
      borderWidth: 0,
      borderRadius: 30,
      backgroundColor: '#FF1493',
      marginTop: 80,
      shadowOffset: { width: 4, height: 4 },
      shadowColor: 'black',
      shadowOpacity: 0.3,
    },
  });
  return (
    <View style={styles.container}>
      <Button
        title={hint.title_jp}
        buttonStyle={styles.secretHintButtonStyle}
        color="#ffffff"
        fontWeight="900"
        fontSize="14"
      />
      <Button
        buttonStyle={styles.secretHintButtonStyle}
        color="#ffffff"
        fontWeight="900"
        fontSize="14"
      />
      <Button
        title="登録する"
        buttonStyle={styles.secretHintButtonStyle}
        color="#ffffff"
        fontWeight="900"
        fontSize="14"
      />
    </View>
  );
}

export default RegisterHintsScreen;
