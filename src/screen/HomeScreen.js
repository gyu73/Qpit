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
    profile_image_url_https,
    name,
  } = props.users;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FF69B4',
      alignItems: 'center',
      paddingTop: 40,
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

  console.log(props.users.last_shoot_time);
  console.log(new Date(props.users.last_shoot_time).getMinutes());

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Avatar
        large
        rounded
        source={{ uri: `${profile_image_url_https}` }}
        activeOpacity={0.7}
      />
      <Text style={{ paddingTop: 20, color: '#ffffff' }}>{name}</Text>
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
  secrethints: state.secret_hints,
  hints: state.normal_hints,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...Actions.users,
      ...Actions.normalhints,
      ...Actions.secrethints,
    },
    dispatch,
  );

const Enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    async componentWillMount() {
      login_user = this.props.users;
      await this.props.createorget(login_user);
      await this.props.getsecrethints(this.props.users.id);
      await this.props.getnormalhints(this.props.users.id);
    },
  }),
);

export default Enhance(HomeScreen);
