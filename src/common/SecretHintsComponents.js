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
function secretHintsComponents(props) {
  const {
    navigation,
    navigatePlace,
  } = props;
  return config.secretHints.map((hint, index) => (
    <Button
      onPress={() => navigation.navigate(navigatePlace, { hint, hint_type: 'secret' })}
      title={hint.title_jp}
      buttonStyle={styles.secretHintButtonStyle}
      color="#ffffff"
      fontWeight="900"
      fontSize="14"
    />
  ));
}

export default secretHintsComponents;
