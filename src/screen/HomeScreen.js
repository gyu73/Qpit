/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Avatar, Button } from 'react-native-elements';
import { compose, lifecycle } from 'recompose';

import Actions from '../../actions/';

import {
  NormalHintsComponents,
  SecretHintsComponents,
} from '../common/';

type Props = {
  navigation: {
    navigate: func
  }
}

function HomeScreen(props: Props) {
  const {
    profile_image,
    twitter_id,
  } = props.users;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FF69B4',
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 20,
    },
    buttonStyle: {
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

  return (
    console.log(props) ||
    <ScrollView contentContainerStyle={styles.container}>
      <Avatar
        large
        rounded
        source={{ uri: `${profile_image}` }}
        activeOpacity={0.7}
      />
      <Text style={{ paddingTop: 20, color: '#ffffff' }}>{twitter_id}</Text>
      <Button
        onPress={() => props.navigation.navigate('RegisterLikePerson')}
        title="好きな人を登録する"
        buttonStyle={styles.buttonStyle}
        color="#FF69B4"
        fontWeight="900"
        fontSize="14"
      />
      <Text style={{ paddingTop: 20, color: '#ffffff' }}>急接近ヒントを記入する！</Text>
      <Text style={{ color: '#ffffff' }}>（最低1個）</Text>
      <SecretHintsComponents
        navigatePlace="RegisterSecretHints"
        navigation={props.navigation}
      />
      <Text style={{ paddingTop: 20, color: '#ffffff' }}>好きな人のヒントを記入する！</Text>
      <Text style={{ color: '#ffffff' }}>（最低7個）</Text>
      <NormalHintsComponents
        navigatePlace="RegisterHints"
        navigation={props.navigation}
      />
    </ScrollView>
  );
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...Actions.todos,
    },
    dispatch,
  );

const Enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
);

export default Enhance(HomeScreen);
