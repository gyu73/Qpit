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
  NotEnouchArrows: { screen: NotEnouchArrowsScreen },
  Tab: { screen: TabPageScreen },
  RegisterHints: { screen: RegisterHintsScreen },
  RegisterSecretHints: { screen: RegisterSecretsHintsScreen },
  RegisterLikePerson: { screen: RegisterLikePersonScreen },
  ChooseHints: { screen: ChooseHintsScreen },
  ConfirmShootArrows: { screen: ConfirmShootArrowsScreen },
  ShootArrowResults: {
    screen: ShootArrowResultsScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

export default Navigation;
