/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { compose } from 'recompose';
import { connect } from 'react-redux';

type Props = {
  navigation: {
    navigate: func,
    state: {
      params: {
        hint: object,
      }
    }
  }
}

function ShootArrowResultsScreen(props: Props) {
  const { hint, hint_type } = props.navigation.state.params;
  const { navigation } = props;
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: '#FF69B4',
      alignItems: 'center',
      paddingTop: 180,
      paddingBottom: 20,
    },
    buttonStyle: {
      width: 180,
      height: 40,
      borderColor: 'transparent',
      borderWidth: 0,
      borderRadius: 30,
      backgroundColor: hint_type === 'secret' ? '#FF1493' : '#ffffff',
      marginTop: 20,
      shadowOffset: { width: 4, height: 4 },
      shadowColor: 'black',
      shadowOpacity: 0.3,
    },
  });
  return (
    <View style={styles.container}>
      <Button
        title={hint.title_jp}
        buttonStyle={styles.buttonStyle}
        color={hint_type === 'secret' ? '#ffffff' : '#FF69B4'}
        fontWeight="900"
        fontSize={14}
      />
      <Button
        buttonStyle={styles.buttonStyle}
        color={hint_type === 'secret' ? '#ffffff' : '#FF69B4'}
        fontWeight="900"
        fontSize={14}
        title={props.users.like_person_hint_answer}
      />
      <Button
        title="ホームに戻る"
        buttonStyle={styles.buttonStyle}
        color={hint_type === 'secret' ? '#ffffff' : '#FF69B4'}
        fontWeight="900"
        fontSize={14}
        onPress={() => navigation.navigate('Tab')}
      />
    </View>
  );
}

const mapStateToProps = state => ({
  users: state.users,
});

const Enhance = compose(connect(mapStateToProps));

export default Enhance(ShootArrowResultsScreen);
