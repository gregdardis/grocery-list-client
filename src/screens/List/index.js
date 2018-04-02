import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class List extends React.Component {
  render() {
    return (
      <View style={ styles.listContainer }>
        <Text>List Screen</Text>
      </View>
    );
  }
}