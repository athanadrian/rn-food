import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/HomeScreen';
import ResultDetailScreen from './src/screens/ResultDetailScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultDetail: ResultDetailScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'App Search',
    },
  }
);

export default createAppContainer(navigator);
