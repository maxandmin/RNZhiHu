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
  Navigator
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import  Home from '../Home/Home'
import  UserCenter from '../UserCenter/UserCenter'
import  Order from '../Order/Order'

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab: 'Home'
        }
    }
    render() {
        return (
            <TabNavigator>
                {this.renderTabbarItem('首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected','Home', Home)}
                {this.renderTabbarItem('附近', 'icon_tabbar_nearby_normal', 'icon_tabbar_nearby_selected','Near',  Home)}
                {this.renderTabbarItem('逛一逛', 'icon_tabbar_discover', 'icon_tabbar_discover_selected','Walk', Home)}
                {this.renderTabbarItem('订单', 'icon_tabbar_order', 'icon_tabbar_order_selected','Order', Order)}
                {this.renderTabbarItem('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected','MyCenter', UserCenter)}
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
                selectedTitleStyle={{color:'rgba(33,192,174,1.0)'}}
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
