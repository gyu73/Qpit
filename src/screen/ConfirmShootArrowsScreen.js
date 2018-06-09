/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import Actions from '../../actions/';

  type Props = {
    users: {
      like_person_profile_image: string,
      like_person_twitter_id: string,
    },
    navigation: {
      state: {
        params: {
          hint: Object,
          hint_type: string,
        }
      }
    },
    handleShootArrow: func,
  }


function ConfirmShootArrowsScreen(props: Props) {
  const { like_person_profile_image, like_person_twitter_id } = props.users;
  const { hint, hint_type } = props.navigation.state.params;
  const { handleShootArrow } = props;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF69B4',
      alignItems: 'center',
      justifyContent: 'center',
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
      <Avatar
        large
        rounded
        source={{ uri: like_person_profile_image }}
        activeOpacity={0.7}
      />
      <Text style={{ paddingTop: 20, color: '#ffffff' }}>{like_person_twitter_id}</Text>
      <Icon
        name="heart-outlined"
        size={50}
        color="#ffffff"
      />
      <Icon
        name="arrow-long-up"
        size={70}
        color="#ffffff"
      />
      <Button
        onPress={() => handleShootArrow()}
        title={hint.title_jp}
        buttonStyle={styles.buttonStyle}
        color={hint_type === 'secret' ? '#ffffff' : '#FF69B4'}
        fontWeight="900"
        fontSize="14"
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
    handleShootArrow: props => () => {
      const { getlikepersonsecrethints, getlikepersonnormalhints, navigation } = props;
      const { id, screen_name } = props.users;
      const { hint, hint_type } = props.navigation.state.params;

      if (hint_type === 'secret') {
        getlikepersonsecrethints(id, screen_name, hint.title_en);
      } else {
        getlikepersonnormalhints(id, screen_name, hint.title_en);
      }
      navigation.navigate('ShootArrowResults', { hint, hint_type });
    },
  }),
);

export default Enhance(ConfirmShootArrowsScreen);
