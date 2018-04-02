import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class List extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    const name = params ? params.name : 'New List';
    const items = params ? params.items : [];
    return (
      <View style={ styles.listContainer }>
        <Text>{ name }</Text>
      </View>
    );
  }
}