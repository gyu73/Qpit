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
const NormalHints = t.struct({
  normal_hints: t.String,
});
const options = {
  fields: {
    normal_hints: {
      auto: 'none',
      placeholder: '答えを記入してね',
      error: 'Insert a valid email',
    },
  },
};

// styleの設定はglobalに設定されている。詳しくはRegisterLikePersonを確認する。

// tcomb-formを用いるための変数設定↑

type Props = {
  handleRegisterNormalHints: func,
  navigation: {
    state: {
      params: string
    }
  }
}

function RegisterNormalHintsScreen(props: Props) {
  const { hint } = props.navigation.state.params;
  const styles = StyleSheet.create({
    container: {
      height: '100%',
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
        buttonStyle={styles.buttonStyle}
        color="#FF69B4"
        fontWeight="900"
        fontSize={14}
      />
      <Forms
        ref={(ref) => {
          this._formRef = ref;
          return this._formRef;
        }}
        type={NormalHints}
        options={options}
        value={{ normal_hints: props.normal_hints[hint.title_en] }}
      />
      <Button
        title="登録する"
        buttonStyle={styles.buttonStyle}
        color="#FF69B4"
        fontWeight="900"
        fontSize={14}
        onPress={() => props.handleRegisterNormalHints(hint.title_en)}
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
    handleRegisterNormalHints: props => (hint) => {
      let value = this._formRef.getValue();
      if (value) {
        props.registernormalhints(hint, value.normal_hints, props.users.id);
      } else {
        value = '';
        props.registernormalhints(hint, value, props.users.id);
      }
      props.navigation.navigate('Tab');
    },
  }),
);

export default Enhance(RegisterNormalHintsScreen);
