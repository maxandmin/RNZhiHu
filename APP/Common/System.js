/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
    Platform
} from 'react-native';
import Dimensions from 'Dimensions';
export default {
    isIOS: Platform.OS === 'ios',
    mwidth:Dimensions.get('window').width,
    mHeight:Dimensions.get('window').height,
}