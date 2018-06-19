/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import t from 'tcomb-form-native';

import Actions from '../../actions';

// tcomb-formを用いるための変数設定↓
const Forms = t.form.Form;
const SecretHints = t.struct({
  secret_hints: t.String,
});
const options = {
  fields: {
    secret_hints: {
      auto: 'none',
      placeholder: '答えを記入してね',
    },
  },
};

// styleの設定はglobalに設定されている。詳しくはRegisterLikePersonを確認する。

// tcomb-formを用いるための変数設定↑

type Props = {
  handleRegisterSecretHints: func,
  navigation: {
    state: {
      params: string
    }
  }
}

function RegisterSecretHintsScreen(props: Props) {
  const { hint } = props.navigation.state.params;
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: '#FF69B4',
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 20,
    },
    secretHintButtonStyle: {
      width: 180,
      height: 40,
      borderColor: 'transparent',
      borderWidth: 0,
      borderRadius: 30,
      backgroundColor: '#FF1493',
      marginTop: 80,
      marginBottom: 30,
      shadowOffset: { width: 4, height: 4 },
      shadowColor: 'black',
      shadowOpacity: 0.3,
    },
  });
  return (
    <View style={styles.container}>
      <Button
        title={hint.title_jp}
        buttonStyle={styles.secretHintButtonStyle}
        color="#ffffff"
        fontWeight="900"
        fontSize={14}
      />
      <Forms
        ref={(ref) => {
          this._formRef = ref;
          return this._formRef;
        }}
        type={SecretHints}
        options={options}
        value={{ secret_hints: props.secret_hints[hint.title_en] }}
      />
      <Button
        title="登録する"
        buttonStyle={styles.secretHintButtonStyle}
        color="#ffffff"
        fontWeight="900"
        fontSize={14}
        onPress={() => props.handleRegisterSecretHints(hint.title_en)}
      />
    </View>
  );
}

const mapStateToProps = state => ({
  secret_hints: state.secret_hints,
  users: state.users,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...Actions.secrethints,
    },
    dispatch,
  );

const Enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withHandlers({
    handleRegisterSecretHints: props => (hint) => {
      let value = this._formRef.getValue();
      if (value) {
        props.registersecrethints(hint, value.secret_hints, props.users.id);
      } else {
        value = '';
        props.registersecrethints(hint, value, props.users.id);
      }
      props.navigation.navigate('Tab');
    },
  }),
);

export default Enhance(RegisterSecretHintsScreen);
