/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {
  NormalHintsComponents,
  SecretHintsComponents,
} from '../common/';

function ChooseHintsScreen(props) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FF69B4',
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 20,
    },
  });
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SecretHintsComponents
        navigatePlace="ConfirmShootArrows"
        navigation={props.navigation}
      />
      <NormalHintsComponents
        navigatePlace="ConfirmShootArrows"
        navigation={props.navigation}
      />
    </ScrollView>
  );
}

export default ChooseHintsScreen;
