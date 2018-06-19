/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { bindActionCreators } from 'redux';
import Expo from 'expo';

import Actions from '../../actions/';

type Props = {
  navigation: {
    navigate: func
  }
}

function MyPageScreen(props: Props) {
  const styles = StyleSheet.create({
    container: {
      height: '100%',
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
  const hintsArray = Object.values(props.hints);
  const normalAnswerHintNumber = hintsArray.filter(h => h !== '').length - 4;

  const secretHintsArray = Object.values(props.secrethints);
  const secretAnswerHintNumber = secretHintsArray.filter(d => d !== '').length - 5;
  return (
    <View style={styles.container}>
      <Avatar
        large
        rounded
        source={{ uri: props.users.profile_image_url_https }}
        activeOpacity={0.7}
      />
      <Text style={{ paddingTop: 20, color: '#ffffff' }}>{props.users.name}</Text>
      <Text style={{ fontWeight: '900', paddingTop: 20, color: '#ffffff' }}>届いた矢</Text>
      <Text style={{ fontWeight: '900', color: '#ffffff' }}>{props.users.coming_arrow_number}本</Text>
      <Text style={{ fontWeight: '900', paddingTop: 20, color: '#ffffff' }}>残りの矢</Text>
      <Text style={{ fontWeight: '900', color: '#ffffff' }}>{props.users.stock_arrow}本</Text>
      <Text style={{ fontWeight: '900', paddingTop: 20, color: '#ffffff' }}>急接近ヒント記入数</Text>
      <Text style={{ fontWeight: '900', color: '#ffffff' }}>{secretAnswerHintNumber}個</Text>
      <Text style={{ fontWeight: '900', paddingTop: 20, color: '#ffffff' }}>ヒント記入数</Text>
      <Text style={{ fontWeight: '900', color: '#ffffff' }}>{normalAnswerHintNumber}個</Text>
      <Button
        onPress={() => props.handleLogOut()}
        title="ログアウトする"
        buttonStyle={styles.buttonStyle}
        color="#FF69B4"
        fontWeight="900"
        fontSize={14}
      />
      <Button
        onPress={() => props.handleDeleteUser()}
        title="アカウントを削除する"
        buttonStyle={styles.buttonStyle}
        color="#FF69B4"
        fontWeight="900"
        fontSize={14}
      />
    </View>
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
    },
    dispatch,
  );

const Enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withHandlers({
    handleLogOut: props => () => {
      props.logout(props.users.id);
      Expo.SecureStore.setItemAsync('userID', '');
      props.navigation.navigate('Top');
    },
    handleDeleteUser: props => () => {
      props.deleteuser(props.users.id);
      props.navigation.navigate('Top');
      Expo.SecureStore.setItemAsync('userID', '');
    },
  }),
);

export default Enhance(MyPageScreen);
