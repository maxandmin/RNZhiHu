/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';
import System from './Common/System.js'
import Main from './Main.js'
export default class Launch extends Component {
  render() {
  return (
   <Image source={{uri: 'https://pic2.zhimg.com/v2-337d33a455bd5512f8445e1acbbbb15d.jpg'}} style={styles.welcome}></Image>
    );
  }
   componentDidMount(){
    setTimeout(()=>{this.props.navigator.replace({component: Main});}, 3000);
  }
}
const styles = StyleSheet.create({
  welcome: {
    height:System.mHeight,
    width:System.mwidth,
  }
});

