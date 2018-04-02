import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

export default class Home extends React.Component {
  render() {
    return (
      <View style={ styles.homeContainer }>
        <Text>Home Screen</Text>
        <Button
          title='Go to List'
          onPress={() => this.props.navigation.navigate('List')}
        />
      </View>
    );
  }
}