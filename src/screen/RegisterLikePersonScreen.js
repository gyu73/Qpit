/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { compose, lifecycle, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import t from 'tcomb-form-native';

import Actions from '../../actions';

// tcomb-formを用いるための変数設定↓
const Forms = t.form.Form;
const LikePerson = t.struct({
  like_person: t.String,
});
const options = {
  fields: {
    like_person: {
      auto: 'none',
      placeholder: '例) gyu73',
    },
  },
};

// styleの設定
t.form.Form.stylesheet.textbox.normal.width = 200;
t.form.Form.stylesheet.textbox.normal.height = 90;
t.form.Form.stylesheet.textbox.normal.backgroundColor = '#ffffff';
t.form.Form.stylesheet.textbox.normal.borderRadius = 10;

// tcomb-formを用いるための変数設定↑

function RegisterLikePersonScreen(props) {
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
      marginTop: 20,
      shadowOffset: { width: 4, height: 4 },
      shadowColor: 'black',
      shadowOpacity: 0.3,
    },
    fieldStyle: {
      width: 180,
      height: 50,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={{
        color: '#ffffff',
        marginTop: 80,
        marginBottom: 30,
        fontWeight: '900',
        }}
      >
        好きな人のTwitter IDを登録してください
      </Text>
      <Forms
        ref={(ref) => {
          this._formRef = ref;
          return this._formRef;
        }}
        type={LikePerson}
        options={options}
        value={{ like_person: props.users.like_person_screen_name }}
      />
      <Button
        title="登録する"
        buttonStyle={styles.buttonStyle}
        color="#FF69B4"
        fontWeight="900"
        fontSize="14"
        onPress={() => props.handleRegisterLikePerson()}
      />
    </View>
  );
}

const mapStateToProps = state => ({
  users: state.users,
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
    handleRegisterLikePerson: props => () => {
      let value = this._formRef.getValue();
      if (value) {
        props.registerlikeperson(value.like_person, props.users.id);
      } else {
        value = '';
        props.registerlikeperson(value, props.users.id);
      }
      props.navigation.navigate('Tab');
    },
  }),
);

export default Enhance(RegisterLikePersonScreen);
