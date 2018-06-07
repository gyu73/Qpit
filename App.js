import React from 'react';
import { AppLoading, Asset, Font, Constants } from 'expo';
import ToNavigation from './src/ToNavigtion';
import { consumerKey, secretKey } from './.env';

/* npm */
import twitter from 'react-native-simple-twitter';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingComplete: false,
    };
  }

  _loadResourcesAsync = async () => Promise.all([
    // Asset.loadAsync([
    //   require('rnstexampleapp/assets/images/icon.png'),
    //   require('rnstexampleapp/assets/images/ok_man.png'),
    // ]),
    twitter.setConsumerKey(consumerKey, secretKey),
  ]);

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      );
    }

    return <ToNavigation />;
  }
}
