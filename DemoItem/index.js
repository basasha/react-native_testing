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
/*'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  PanResponder,
  View,
} from 'react-native';
class DemoItem extends React.Component {
  constructor(props){
    suoer(props);
  }
  componentWillMount(){
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: ()=> true,
      onPanResponderGrant: ()=>{
        this._top = this.state.top
        this._left = this.state.left
        this.setState({bg: 'red'})
      },
      onPanResponderMove: (evt,gs)=>{
        console.log(gs.dx+' '+gs.dy)
        this.setState({
          top: this._top+gs.dy,
          left: this._left+gs.dx
        })
      },
      onPanResponderRelease: (evt,gs)=>{
        this.setState({
          bg: 'white',
          top: this._top+gs.dy,
          left: this._left+gs.dx
      })}
    })
  }
  render(){
    return (
      <View style={{flex: 1}}>
        <View
        {...this._panResponder.panHandlers}
        style={{
          position: 'absolute',
          "backgroundColor": 'black',
          "top": 0,
          "left": 0,
          "height":50,
          "width":50
        }}>
          </View>
      </View>
    );
  }
}*/
