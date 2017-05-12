/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//noinspection JSUnresolvedVariable
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'
import TabNavigator from 'react-native-tab-navigator'
import  Home  from './Home/Home'
import  Other from './Other/Other'

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab: 'Home'
        }
    }
    /*
    
    */
    render() {
        return (
            <TabNavigator>
                {this.renderTabbarItem('首页', 'btn_home_normal', 'btn_home_selected','Home', Home)}
                {this.renderTabbarItem('分类', 'btn_column_normal', 'btn_column_selected','Other',  Other)}
            </TabNavigator>
        );
    }
    renderTabbarItem(title, iconName, selectedIconName, selectedTab, component, badgeText){
        return(
            <TabNavigator.Item
                title={title}
                renderIcon={() =><Image source={{uri: iconName}} style={styles.iconStyle}/>}
                renderSelectedIcon={() =><Image source={{uri: selectedIconName}} style={styles.iconStyle}/>}
                onPress={()=>{this.setState({selectedTab:selectedTab})}}
                selected={this.state.selectedTab === selectedTab}
                selectedTitleStyle={{color:'rgba(50,120,198,1.0)'}}
                badgeText = {badgeText}>

                <Navigator
                    initialRoute={{name:title,component:component}}
                    configureScene={()=>{return Navigator.SceneConfigs.PushFromRight;}}
                    renderScene={(route,navigator)=>{
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator}/>;
                    }}/>

            </TabNavigator.Item>
        );
    }
}
const styles = StyleSheet.create({
    iconStyle:{
        width: Platform.OS === 'ios' ? 25 : 25,
        height:Platform.OS === 'ios' ? 25 : 25,
        marginTop:5
    },
});
