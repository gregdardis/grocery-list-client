import React from 'react';
import { 
  Alert, 
  Button,
  Text,
  View
} from 'react-native';

import styles from './styles';

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.title }>My Lists</Text>
        <View style={ { flex: 1 } }/>
        <View style={ styles.buttonContainer }>
          <Button title='New List'
            onPress={ () => {
              Alert.alert('you tapped the button');
            } } 
          />
        </View>
      </View>
    );
  }
}