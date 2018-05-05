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
  Home: { screen: TopScreen },
  Arrows: { screen: ArrowsScreen },
  MyPage: { screen: MyPageScreen },
});

const Navigation = StackNavigator({
  Tab: { screen: TabPageScreen },
});

export default Navigation;
