'use strict';
import Dimensions from 'Dimensions';
import DemoItem from '.';
import Toast from 'react-native-root-toast';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  PanResponder,
  View
} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth   = Dimensions.get('window').width;
const cRadius = 20;
const centerHeight = windowHeight*0.5-cRadius;
const centerWidth  = windowWidth*0.5-cRadius;
const blockHeight = windowHeight*0.5;
const blockWidth = windowWidth*0.5;
const blockColor=['#f7f7a5','#7a5f7f','#af2b57','#70d35d'];
var pan = React.createClass({
  getInitialState(){
      return {
        bg: 'black',
        top: centerHeight,
        left: centerWidth,
        visible: false
      }
  },
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
          bg: 'black',
          top: this._top+gs.dy,
          left: this._left+gs.dx
      });
      if (this.state.top>=0.6*windowHeight || this.state.left>=0.6*windowWidth ||
          this.state.top<=0.4*windowHeight || this.state.left<=0.4*windowWidth) {
        this.setState({
          bg:'black',
          top: centerHeight,
          left:centerWidth,
        })
        setTimeout(() => this.setState({
          visible: true
      }), 500); // show toast after 2s

      setTimeout(() => this.setState({
          visible: false
      }), 3000); // hide toast after 5s
      }
    },
    })
  },
  render: function() {
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
      <View style={styles.floatView}/>

        <View
          {...this._panResponder.panHandlers}
          style={[styles.rect,{
            "backgroundColor": this.state.bg,
            "top": this.state.top,
            "left": this.state.left
          }]}></View>
          <Toast
            visible={this.state.visible}
            position={50}
            shadow={false}
            animation={false}
            hideOnPress={true}
        >Start to record</Toast>
      </View>
    );
  }


});


var styles = StyleSheet.create({
  container: {
    width : windowWidth,
    height : windowHeight,
    backgroundColor : '#F5FCFF',
    flexDirection : 'row',
    flexWrap:'wrap'
  },
  rect: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: cRadius,
    borderColor: 'black',
    position: 'absolute',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    alignItems: 'center',
     justifyContent: 'center',
  },
  floatView:{
    position: 'absolute',
        width: 50,
        height: 50,
        top: windowHeight*0.5-25,
        left: windowWidth*0.5-25,
        borderRadius: 25,
        backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('HelloWorldApp', () => pan);
