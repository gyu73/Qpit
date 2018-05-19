import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import * as config from '../config/';

const styles = StyleSheet.create({
  normalHintButtonStyle: {
    width: 180,
    height: 40,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    marginTop: 20,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
  },
});

const normalHintsComponents = config.normalHints.map((hint, index) => (
  <Button
    key="${hint.title_jp} ${index}"
    onPress={() => props.navigation.navigate('RegisterHints', { hint })}
    title={hint.title_jp}
    buttonStyle={styles.normalHintButtonStyle}
    color="#FF69B4"
    fontWeight="900"
    fontSize="14"
  />
));

export default normalHintsComponents;
