import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Alert,
  StyleSheet,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { SocialIcon, Button } from 'react-native-elements';
import Expo from 'expo';
import { bindActionCreators } from 'redux';
import { compose, lifecycle, withState, withHandlers } from 'recompose';

import Loading from './Loading';
import Actions from '../../actions/';

/* import twitter */
import twitter, { TWLoginButton, decodeHTMLEntities, getRelativeTime } from 'react-native-simple-twitter';

// @connect(state => ({
//   user: state.user,
// }))

function TopScreen(props: Props) {
  // constructor(props) {
  //   super(props);
  // }

  // async componentWillMount() {
  //   if (this.props.user.token) {
  //     twitter.setAccessToken(this.props.user.token, this.props.user.token_secret);
  //
  //     try {
  //       const user = await twitter.get('account/verify_credentials.json', { include_entities: false, skip_status: true, include_email: true });
  //       this.props.dispatch({ type: 'USER_SET', user });
  //
  //       this.props.dispatch(NavigationActions.reset({
  //         index: 0,
  //         actions: [
  //           NavigationActions.navigate({ routeName: 'Top' }),
  //         ],
  //       }));
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // }

  // async componentDidMount() {
  //   const userID = await Expo.SecureStore.getItemAsync('userID');
  //   if (userID) {
  //     const user = await this.props.dispatch({ type: 'USERS/GETUSERINFO', userID });
  //     console.log('user', user);
  //     this.props.navigation.navigate('Tab', { userID });
  //   }
  // }

  // onGetAccessToken = ({ oauth_token, oauth_token_secret }) => {
  //   this.props.dispatch({ type: 'USERS/TOKENSET', token: oauth_token, token_secret: oauth_token_secret });
  // }

  // onSuccess = (user) => {
  //   this.props.dispatch({ type: 'USERS/USERSET', user });
  //
  //   Alert.alert(
  //     'Success',
  //     'ログインできました',
  //     [
  //       {
  //         text: 'Go HomeScreen',
  //         onPress: () => {
  //           this.props.navigation.navigate('Tab');
  //         },
  //       },
  //     ],
  //   );
  // }

  // onPress = (e) => {
  //   console.log('button pressed');
  // }
  //
  // onClose = (e) => {
  //   console.log('press close button');
  // }
  //
  // onError = (err) => {
  //   console.log(err);
  // }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Loading text="ログイン中" isLoading={props.isLoading} />
      <View style={styles.title}>
        <Text style={styles.titleText}>Qpit</Text>
        <Text style={styles.subText}>気になるあの子に矢を飛ばそう</Text>
      </View>
      <TWLoginButton
        style={styles.button}
        type="TouchableOpacity"
        onPress={this.onPress}
        onGetAccessToken={this.onGetAccessToken}
        onSuccess={props.onSuccess}
        onClose={this.onClose}
        onError={this.onError}
      ><SocialIcon
        title="Twitterログイン"
        button
        type="twitter"
      />
      </TWLoginButton>
      <View style={styles.messageBox}>
        <Text style={styles.message}>自分の好きな人には</Text>
        <Text style={styles.message}>「恋人はいるのか？」</Text>
        <Text style={styles.message}>「好きな人はいるのか？」</Text>
        <Text style={styles.message}>「好きな人のタイプは？」</Text>
        <Text style={styles.message}>「どんな人がタイプなのか？」</Text>
        <Text style={styles.message}>気になるけれど</Text>
        <Text style={styles.message}>なかなか聞き出せませんよね。</Text>
        <Text style={styles.message}>好きな人に告白したいけど</Text>
        <Text style={styles.message}>「もし両思いじゃなかったら？」</Text>
        <Text style={styles.message}>なんて、不安になることあるよねー。</Text>
        <Text style={styles.message}>でももう大丈夫！</Text>
        <Text style={styles.message}>Qpitとは気になるあの子の</Text>
        <Text style={styles.message}>「好きな人」</Text>
        <Text style={styles.message}>についてのヒントを匿名で質問の矢を</Text>
        <Text style={styles.message}>飛ばして得られる</Text>
        <Text style={styles.message}>そんな恋の手助けアプリです！</Text>
        <Text style={styles.message}>恋をもっと効率よくもっと確実に。</Text>
        <Text style={styles.message}>当たって砕けろの時代はもう終わり。</Text>
        <Text style={styles.message}> さぁ、気になるあの子に矢を飛ばそう！</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF69B4',
    paddingTop: 36,
    paddingRight: 48,
    paddingLeft: 48,
    height: '100%',
  },
  title: {
    alignItems: 'center',
    padding: 32,
  },
  titleText: {
    fontSize: 64,
    color: '#fff',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    color: '#fff',
    marginTop: 12,
    fontWeight: 'bold',
  },
  buttonContainer: {
    paddingTop: 24,
    alignItems: 'center',
  },
  buttonStyle: {
    width: 200,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    shadowOffset: { width: 4, height: 4 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
  },
  messageBox: {
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 20,
    padding: 12,
    alignItems: 'flex-start',
  },
  message: {
    fontSize: 12,
  },
});

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
  withState('isLoading', 'isLoadingUpdate', true),
  withHandlers({
    onGetAccessToken: props => (oauth_token, oauth_token_secret) => {
      // console.log(oauth_token);
      // this.props.tokenset(oauth_token, oauth_token_secret);
      // this.props.dispatch({ type: 'USERS/TOKENSET', token: oauth_token, token_secret: oauth_token_secret });
    },
    onSuccess: props => (user) => {
      props.userset(user);
      Alert.alert(
        'Success',
        'ログインできました',
        [
          {
            text: 'Qpitを始めよう！',
            onPress: () => {
              props.navigation.navigate('Tab');
            },
          },
        ],
      );
    },
    onPress: props => () => {
      console.log('button pressed');
    },
    onClose: props => () => {
      console.log('press close button');
    },
    onError: props => (err) => {
      console.log(err);
    },
  }),
  lifecycle({
    async componentDidMount() {
      const userID = await Expo.SecureStore.getItemAsync('userID');
      if (userID) {
        const user = await this.props.getuserinfo(userID);
        if (user.payload.login) {
          this.props.navigation.navigate('Tab', { userID });
          this.props.isLoadingUpdate(!this.props.isLoading);
        }
      }
      this.props.isLoadingUpdate(!this.props.isLoading);
    },
  }),
);

export default Enhance(TopScreen);
