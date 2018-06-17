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
import { Constants } from 'expo';
import { bindActionCreators } from 'redux';
import { compose, lifecycle } from 'recompose';
import Actions from '../../actions/';

/* import twitter */
import twitter, { TWLoginButton, decodeHTMLEntities, getRelativeTime } from 'react-native-simple-twitter';

@connect(state => ({
  user: state.user,
}))
class TopScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    if (this.props.user.token) {
      twitter.setAccessToken(this.props.user.token, this.props.user.token_secret);

      try {
        const user = await twitter.get('account/verify_credentials.json', { include_entities: false, skip_status: true, include_email: true });
        this.props.dispatch({ type: 'USER_SET', user });

        this.props.dispatch(NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Top' }),
          ],
        }));
      } catch (err) {
        console.log(err);
      }
    }
  }

  onGetAccessToken = ({ oauth_token, oauth_token_secret }) => {
    this.props.dispatch({ type: 'USERS/TOKENSET', token: oauth_token, token_secret: oauth_token_secret });
  }

  onSuccess = (user) => {
    this.props.dispatch({ type: 'USERS/USERSET', user });

    Alert.alert(
      'Success',
      'ログインできました',
      [
        {
          text: 'Go HomeScreen',
          onPress: () => {
            this.props.navigation.navigate('Tab');
          },
        },
      ],
    );
  }

  onPress = (e) => {
    console.log('button pressed');
  }

  onClose = (e) => {
    console.log('press close button');
  }

  onError = (err) => {
    console.log(err);
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Qpit</Text>
        </View>
        <TWLoginButton
          style={styles.button}
          type="TouchableOpacity"
          onPress={this.onPress}
          onGetAccessToken={this.onGetAccessToken}
          onSuccess={this.onSuccess}
          onClose={this.onClose}
          onError={this.onError}
        ><SocialIcon
          title="Twitterログイン"
          button
          type="twitter"
        />
        </TWLoginButton>
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={styles.buttonStyle}
            color="#000000"
            fontWeight="900"
            fontSize="14"
            title="自分の好きな人には
  「恋人はいるのか？」
  「好きな人はいるのか？」
  「好きな人のタイプは？」
  「どんな人がタイプなのか？」
  気になるけれど
  なかなか聞き出せませんよね。

  好きな人に告白したいけど
  「もし両思いじゃなかったら？」
  なんて、不安になること
  ありますよねー。

  でももう大丈夫！

  Qpitとは
  気になるあの子の

  「好きな人」

  についてのヒントを
  匿名で質問の矢を
  飛ばして得られる
  そんな恋の
  手助けアプリです！

  恋をもっと効率よく
  もっと確実に。

  当たって砕けろの
  時代はもう終わり。

  さぁ、気になるあの子に
  矢を飛ばそう！"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF69B4',
    padding: 64,
  },
  title: {
    alignItems: 'center',
    padding: 32,
  },
  titleText: {
    fontSize: 24,
    color: '#fff',
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
});

const mapStateToProps = state => ({
  users: state.users,
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
    componentWillMount() {
      this.props.getuserinfo();
    },
  }),
);

// export default Enhance(HomeScreen);

export default TopScreen;
