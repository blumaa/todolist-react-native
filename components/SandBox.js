import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const SandBox = ({}) => (
  <View style={styles.container}>
    <Text style={styles.boxOne}>Box One</Text>
    <Text style={styles.boxTwo}>Box Two</Text>
    <Text style={styles.boxThree}>Box Three</Text>
    <Text style={styles.boxFour}>Box Four</Text>

  </View>
);

export default SandBox;

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems: 'flex-end',
    paddingTop: 40,
    backgroundColor: '#ddd'
  },
  boxOne: {
    flex:1,
    backgroundColor: 'violet',
    padding: 10
  },
  boxTwo: {
    flex:1,
    backgroundColor: 'skyblue',
    padding: 20
  },
  boxThree: {
    flex:1,
    backgroundColor: 'coral',
    padding: 30
  },
  boxFour: {
    flex:1,
    backgroundColor: 'gold',
    padding: 40
  },
});
