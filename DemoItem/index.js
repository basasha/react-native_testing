'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var DemoItem = React.createClass({
  getInitialState(){
      return {
        bg: 'white'
      }
  },
  componentWillMount(){
    this._gestureHandlers = {
      onStartShouldSetResponder: () => true,
      onMoveShouldSetResponder: ()=> true,
      onResponderGrant: ()=>{this.setState({bg: 'red'})},
      onResponderMove: ()=>{console.log(123)},
      onResponderRelease: ()=>{this.setState({bg: 'white'})}
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
        <View
          {...this._gestureHandlers}
          style={[styles.rect,{
            "backgroundColor": this.state.bg
          }]}></View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rect: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: 'black'
  }
});
module.exports=DemoItem;
