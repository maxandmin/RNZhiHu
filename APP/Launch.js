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
// import Order from './Order.js'
// import StackNavigator from 'react-navigation';
// const App = StackNavigator({
//   Order: {screen: MainScreen},
//   Profile: {screen: ProfileScreen},
// });
export default class Launch extends Component {
  render() {
  return (
   <Image source={{uri: 'https://pic2.zhimg.com/v2-337d33a455bd5512f8445e1acbbbb15d.jpg'}} style={styles.welcome}></Image>
    );
  }
   componentDidMount(){
    setTimeout(()=>{alert('hello');}, 3000);
  }
}
const styles = StyleSheet.create({
  welcome: {
    height:667,
    width:375,
    backgroundColor: 'red',
  }
});

