/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  PanResponder,
  Text,
  View
} from 'react-native';
import Dimensions from 'Dimensions';
import DemoItem from './DemoItem/index';
const windowHeight = Dimensions.get('window').height;
const windowWidth   = Dimensions.get('window').width;
const cRadius = 20;
const centerHeight = windowHeight*0.5-cRadius;
const centerWidth  = windowWidth*0.5-cRadius;
const blockHeight = windowHeight*0.5;
const blockWidth = windowWidth*0.5;
const blockColor=['#f7f7a5','#7a5f7f','#af2b57','#70d35d'];

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={{width:blockWidth,height:blockHeight,backgroundColor:blockColor[0]}}>
      <Text style={styles.welcome}>
        qqqqqß
      </Text>
      </View>
      <View style={{width:blockWidth,height:blockHeight,backgroundColor:blockColor[1]}}>
      <Text style={styles.welcome}>
        qqqqqß
      </Text>
      </View>

      <View style={{width:blockWidth,height:blockHeight,backgroundColor:blockColor[2]}}>
      <Text style={styles.welcome}>
        qqqqqß
      </Text>
      </View>
      <View style={{width:blockWidth,height:blockHeight,backgroundColor:blockColor[3]}}>
      <Text style={styles.welcome}>
        qqqqqß
      </Text>
      </View>
              <DemoItem />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width : windowWidth,
    height : windowHeight,
    backgroundColor : '#F5FCFF',
    flexDirection : 'row',
    flexWrap:'wrap'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    alignItems: 'center',
     justifyContent: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  floatView:{
    position: 'absolute',
        width: 30,
        height: 30,
        top: windowHeight*0.5-15,
        left: windowWidth*0.5-15,
        borderRadius: 15,
        backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
