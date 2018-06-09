import { StackNavigator, TabNavigator } from 'react-navigation';
import {
  ArrowsScreen,
  ChooseHintsScreen,
  ConfirmShootArrowsScreen,
  HomeScreen,
  MyPageScreen,
  NotEnouchArrowsScreen,
  RegisterHintsScreen,
  RegisterLikePersonScreen,
  RegisterSecretsHintsScreen,
  ShootArrowResultsScreen,
  TopScreen,
} from './screen/';

const TabPageScreen = TabNavigator({
  Home: { screen: HomeScreen },
  Arrows: { screen: ArrowsScreen },
  MyPage: { screen: MyPageScreen },
});

const Navigation = StackNavigator({
  Top: { screen: TopScreen },
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
  ShootArrowResults: {
    screen: ShootArrowResultsScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

export default Navigation;
