/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { bindActionCreators } from 'redux';

import Actions from '../../actions/';

function NotRegisterLikePersonScreen(props: Props) {
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
    buttonStyles: {
      width: 180,
      height: 40,
      borderColor: 'transparent',
      borderWidth: 0,
      borderRadius: 30,
      backgroundColor: '#ffffff',
      marginTop: 40,
      marginBottom: 30,
      shadowOffset: { width: 4, height: 4 },
      shadowColor: 'black',
      shadowOpacity: 0.3,
    },
    messageBox: {
      backgroundColor: 'white',
      marginTop: 60,
      borderRadius: 20,
      padding: 24,
      alignItems: 'flex-start',
      fontSize: 12,
    },
    message: {
      fontSize: 12,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.messageBox}>
        <Text style={styles.message}>好きな人を登録してないよ！</Text>
        <Text style={styles.message}>好きな人を登録して矢を飛ばそう！</Text>
      </View>
      <Button
        onPress={() => props.handleRegisterLikePerson()}
        title="好きな人を登録する"
        buttonStyle={styles.buttonStyles}
        color="#FF69B4"
        fontWeight="900"
        fontSize={14}
      />
    </View>
  );
}

const mapStateToProps = state => ({
  normal_hints: state.normal_hints,
  users: state.users,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...Actions.normalhints,
    },
    dispatch,
  );

const Enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withHandlers({
    handleRegisterLikePerson: props => () => {
      props.navigation.navigate('RegisterLikePerson');
    },
  }),
);

export default Enhance(NotRegisterLikePersonScreen);
