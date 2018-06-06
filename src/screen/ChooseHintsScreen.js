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

type Props = {
  navigation: Object,
}

function ChooseHintsScreen(props: Props) {
  const { navigation } = props;
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
        navigation={navigation}
      />
      <NormalHintsComponents
        navigatePlace="ConfirmShootArrows"
        navigation={navigation}
      />
    </ScrollView>
  );
}

export default ChooseHintsScreen;
