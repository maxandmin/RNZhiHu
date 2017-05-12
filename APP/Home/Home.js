
/*
 * Copy Right 2016 Uncle Charlie
 *
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    ListView,
    StyleSheet
} from 'react-native';
import NavBar from '../Common/NavBar.js'
import Swiper from 'react-native-swiper'
export default class Home extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View>
                 <NavBar title={'知乎新闻'}/>
                 <renderviewpager/>
            </View>
        );
    }

        renderviewpager(){
        return <View>
            <Swiper style= {styles.wrapper}
                    showsButtons={false}
                    autoplay={true}
                    height={150}
                    showsPagination={true}
                    index={0}
                    paginationStyle = {{margin:15}}
                    activeDotStyle ={{backgroundColor:'rgba(50,120,198,1.0)'}}>
                {this.renderImage()}
            </Swiper>
        </View>
    }
    clickImage(indexpath){
        alert(indexpath);
    }
    
    renderImage(){
        let itemArr = [];
        for(let i=0; i<sliderimgs.length; i++){
            itemArr.push(
                <TouchableOpacity onPress={()=>{this.clickImage(i)}}>
                    <View style={{width:System.mwidth,height:150}}>
                        <Image style={[styles.page,]} source={{uri: sliderimgs[i]}}></Image>
                    </View>
                </TouchableOpacity>
                    );
        }
        return itemArr;
    }
}

var styles = StyleSheet.create({
    list: {
        marginTop: 64,
    },
    row: {
        height: 100,
        backgroundColor: 'white'
    },
    section: {
        height: 30,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});