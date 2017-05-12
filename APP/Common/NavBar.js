/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//noinspection JSUnresolvedVariable
import {
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity,
    TextInput,
    Image,

} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'
var Dimensions = require('Dimensions');
import System from './System'
export default class NavBar extends Component {

    constructor(props) {
        super(props);
    }
  render() {
      // leftTitle和leftImage 优先判断leftTitle (即 文本按钮和图片按钮优先显示文本按钮)
      const { title, leftTitle, leftImage, leftAction, rightTitle, rightImage, rightAction } = this.props;

    return (
        <View style={[styles.barView, this.props.style]}>
            <View style={ styles.showView }>
                {

                    leftTitle
                        ?
                        <TouchableOpacity style={styles.leftNav} onPress={ ()=>{leftAction()} }>
                            <View style={{alignItems: 'center'}}>
                                <Text style={styles.barButton}>{leftTitle}</Text>
                            </View>
                        </TouchableOpacity>
                        :
                        (

                            leftImage
                                ?
                                <TouchableOpacity style={styles.leftNav} onPress={ ()=>{leftAction()} }>
                                    <View style={{alignItems: 'center'}}>
                                        <Image source={{uri:leftImage}}/>
                                    </View>
                                </TouchableOpacity>
                                : null
                        )
                }
                {
                    title ?
                        <Text style={styles.title}>{title || ''}</Text>
                        : null
                }
                {

                    rightTitle ?

                        <TouchableOpacity style={styles.rightNav} onPress={ ()=>{rightAction()} }>
                            <View style={{alignItems: 'center'}}>
                                <Text style={styles.barButton}>{rightTitle}</Text>
                            </View>
                        </TouchableOpacity>
                        : (
                            rightImage ?
                            <TouchableOpacity style={styles.rightNav} onPress={ ()=>{rightAction()} }>
                                <View style={{alignItems: 'center'}}>
                                    <Image source={{uri:rightImage}}/>
                                </View>
                            </TouchableOpacity>
                            : null
                    )
                }

            </View>
        </View>
    );
  }
  // pushTo(url){
  //   var dealurl = url.replace('imeituan://www.meituan.com/web?url=', '')
  //       .replace('imeituan://www.meituan.com/web/?url=', '')
  //       .replace('imeituan://www.meituan.com/hotel/hybrid/web?url=','')
  //       .replace('imeituan://www.meituan.com/web/search?url=', '');
  //       this.props.navigator.push(
  //       {
  //         component: WebDetail,
  //         passProps: {'url': dealurl}
  //       }
  //   );
  // }

  // leftclick(){
  //     alert('11');
  // }
  // rightclick(){
  //     alert('22');
  // }


  /*
  *
  *  <View style={[styles.navstyle]}>

   <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}onPress={()=>{

   //this.pushTo('https://github.com/targetcloud/Meituan').bind(this)
   this.leftclick()
   }}>
   <Text style={{color:'white',marginTop:System.isIOS ? 10 : 4}}>上海</Text>
   <Image source={{uri:'icon_homepage_down_arrow'}} style={[styles.arrowstyle]}/>
   </TouchableOpacity>

   <TextInput underlineColorAndroid={'white'} placeholder="输入商家,品类,商圈" style={[styles.inputstyle]}/>

   <View style={{flexDirection:'row',height:64,alignItems:'center'}}>
   <TouchableOpacity onPress={()=>{
   //this.pushTo("http://blog.csdn.net/callzjy/article/details/53856163")
   this.rightclick()
   }}>
   <Image source={{uri:'icon_homepage_scan'}} style={[styles.scanstyle]} />
   </TouchableOpacity>

   <TouchableOpacity onPress={()=>{
   this.rightclick()
   // this.pushTo('https://github.com/targetcloud')
   }}>
   <Image source={{uri:'icon_homepage_message'}} style={[styles.messagestyle]}/>
   </TouchableOpacity>
   </View>

   </View>
  *
  * */

}

const styles = StyleSheet.create({
    navstyle:{
        height: System.isIOS ? 64 : 44,
        backgroundColor:'rgba(50,120,198,1.0)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    messagestyle:{
        width:System.isIOS ? 24: 24,
        height:System.isIOS ? 24: 24,
        marginTop:System.isIOS ? 10: 0
    },
    scanstyle:{
        width:System.isIOS ? 24: 24,
        height:System.isIOS ? 24: 24,
        marginTop:System.isIOS ? 10: 0,
        marginRight:8

    },
    inputstyle:{
        width:System.mwidth * 0.6,
        height:System.isIOS ? 30 : 24,backgroundColor:'white',
        marginTop: System.isIOS ? 23 : 0,
        fontSize: System.isIOS ? 14 : 10,
        paddingTop: System.isIOS ? 4 : 2,
        paddingBottom: System.isIOS ? 4 : 2,
        paddingLeft:8,
        borderRadius:15
    },
    arrowstyle:{
        width:System.isIOS ? 13: 10,
        height:System.isIOS ? 10: 8,
        marginTop:System.isIOS ? 12: 5
    },
    barView: {
        height: Platform.OS === 'android' ? 44 : 64,
        backgroundColor: 'rgba(50,120,198,1.0)',

    },
    showView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: Platform.OS === 'android' ? 0 : 20,
        height: 44,
    },
    title: {
        color: 'white',
        fontSize: 18.0,
    },
    leftNav: {
        position: 'absolute',
        top: 8,
        bottom: 8,
        left: 8,
        justifyContent: 'center',
    },
    rightNav: {
        position: 'absolute',
        right: 8,
        top: 8,
        bottom: 8,
        justifyContent: 'center',
    },
    barButton: {
        color: 'white',
        fontSize: 18
    },

});

