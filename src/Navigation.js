import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ArrowsScreen,
  ChooseHintsScreen,
  ConfirmShootArrowsScreen,
  HomeScreen,
  MyPageScreen,
  NotEnouchArrowsScreen,
  NotEnouchHintsScreen,
  NotRegisterLikePersonScreen,
  RegisterHintsScreen,
  RegisterLikePersonScreen,
  RegisterSecretsHintsScreen,
  ShootArrowResultsScreen,
  TopScreen,
} from './screen/';

const TabPageScreen = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (<Entypo
          name="home"
          size={35}
          color={tintColor}
        />),
      }),
    },
    Arrows: {
      screen: ArrowsScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (<MaterialCommunityIcon
          name="arrow-expand-up"
          size={35}
          color={tintColor}
        />),
      }),
    },
    MyPage: {
      screen: MyPageScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (<MaterialCommunityIcon
          name="account"
          size={35}
          color={tintColor}
        />),
      }),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#FF69B4',
    },
  },
);

const Navigation = createStackNavigator({
  Top: {
    screen: TopScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Tab: {
    screen: TabPageScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  RegisterHints: { screen: RegisterHintsScreen },
  RegisterSecretHints: { screen: RegisterSecretsHintsScreen },
  RegisterLikePerson: { screen: RegisterLikePersonScreen },
  ChooseHints: { screen: ChooseHintsScreen },
  ConfirmShootArrows: { screen: ConfirmShootArrowsScreen },
  NotEnouchArrows: { screen: NotEnouchArrowsScreen },
  NotEnouchHints: { screen: NotEnouchHintsScreen },
  NotRegisterLikePerson: { screen: NotRegisterLikePersonScreen },
  ShootArrowResults: {
    screen: ShootArrowResultsScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

export default Navigation;
