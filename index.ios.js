/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Launch from './APP/Launch.js'
import {Navigator} from 'react-native-deprecated-custom-components'

export default class APP extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{name:'启动页',component:Launch}}
            configureScene={()=>{
              return Navigator.SceneConfigs.PushFromRight;}}
            renderScene={(route,navigator)=>{
              let Component = route.component;
              return <Component {...route.passProps} navigator={navigator}/>;
            }}
        />
    );
  }
}

AppRegistry.registerComponent('ZhiHu', () => APP);
