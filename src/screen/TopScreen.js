import React from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
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
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Login</Text>
        </View>
        <TWLoginButton
          style={{ width: '100%', height: 60 }}
          type="TouchableOpacity"
          onPress={this.onPress}
          onGetAccessToken={this.onGetAccessToken}
          onSuccess={this.onSuccess}
          onClose={this.onClose}
          onError={this.onError}
        ><Text style={{ textAlign: 'center', color: '#fff' }}>Twitterでログインする</Text>
        </TWLoginButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.manifest.primaryColor,
  },
  title: {
    flex: 1,
    padding: 64,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
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
