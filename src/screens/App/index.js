import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../Home';
import List from '../List';

const Navigator = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    List: {
      screen: List
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <Navigator />;
  }
}