import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import * as config from '../config/';

const styles = StyleSheet.create({
  secretHintButtonStyle: {
    width: 180,
    height: 40,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 30,
    backgroundColor: '#FF1493',
    marginTop: 20,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
  },
});
const secretHintsComponents = config.secretHints.map((hint, index) => (
  <Button
    key="${hints} ${index}"
    onPress={() => props.navigation.navigate('RegisterSecretHints', { hint })}
    title={hint.title_jp}
    buttonStyle={styles.secretHintButtonStyle}
    color="#ffffff"
    fontWeight="900"
    fontSize="14"
  />
));

export default secretHintsComponents;
