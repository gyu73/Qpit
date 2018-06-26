/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import Actions from '../../actions/';

type Props = {
  users: {
    like_person_twitter_profile_image: string,
    like_person_screen_name: string,
  },
  navigation: {
    navigate: func
  }
}

function ArrowsScreen(props: Props) {
  const { like_person_twitter_profile_image, like_person_screen_name, like_person_damy_profile_image } = props.users;
  const { navigate } = props.navigation;

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
  return (
    <View style={styles.container}>
      <Avatar
        large
        rounded
        source={{ uri: like_person_twitter_profile_image ? like_person_twitter_profile_image : like_person_damy_profile_image }}
        activeOpacity={0.7}
      />
      <Text style={{ paddingTop: 20, color: '#ffffff' }}> @{like_person_screen_name ? like_person_screen_name : 'Qpit15' }</Text>
      <Button
        onPress={() => props.navigateChooseHintsOrNotEnouchArrows()}
        title="矢を飛ばす"
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
    navigateChooseHintsOrNotEnouchArrows: props => () => {
      const hintsArray = Object.values(props.hints);
      const normalAnswerHintNumber = hintsArray.filter(h => h !== '').length - 4;
      const secretHintsArray = Object.values(props.secrethints);
      const secretAnswerHintNumber = secretHintsArray.filter(d => d !== '').length - 5;
      if (props.users.like_person_screen_name === '') {
        props.navigation.navigate('NotRegisterLikePerson');
      } else if (normalAnswerHintNumber <= 6 || secretAnswerHintNumber === 0 || props.users.stock_arrow === 0) {
        if (normalAnswerHintNumber <= 6 || secretAnswerHintNumber === 0) {
          props.navigation.navigate('NotEnouchHints', { normalAnswerHintNumber, secretAnswerHintNumber });
        } else {
          props.navigation.navigate('NotEnouchArrows');
        }
      } else {
        props.navigation.navigate('ChooseHints');
      }
    },
  }),
);

export default Enhance(ArrowsScreen);
