/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

let dimensions = require('Dimensions');
let dimensionsWidth = dimensions.get('window').width;

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./img/icon.png')} style={styles.iconStyle}/>
                <TextInput placeholder={'请输入用户名'} style={styles.textInputStyle}/>
                <TextInput placeholder={'请输入密码'} secureTextEntry={true} style={styles.textInputStyle}/>
                <View style={styles.loginButtonStyle}>
                    <Text>登录</Text>
                </View>
                <View style={styles.settingStyle}>
                    <Text>无法登录</Text>
                    <Text>新用户</Text>
                </View>
                <View style={styles.loginTypeStyle}>
                    <Text>其他方式登录:</Text>
                    <Image source={require('./img/icon3.png')} style={styles.otherImageStyle}/>
                    <Image source={require('./img/icon7.png')} style={styles.otherImageStyle}/>
                    <Image source={require('./img/icon8.png')} style={styles.otherImageStyle}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDDDDD',
        alignItems: 'center'
    },
    iconStyle: {
        marginTop: 50,
        marginBottom: 30,
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'white',
    },

    textInputStyle: {
        height: 38,
        marginBottom: 1,
        width: dimensionsWidth,
        backgroundColor: 'white',
        textAlign: 'center'
    },

    loginButtonStyle: {
        backgroundColor: 'blue',
        // 屏幕适配
        width: dimensionsWidth*0.8,
        height: 35,
        marginTop: 30,
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    settingStyle: {
        flexDirection: 'row',
        marginTop:10,
        width: dimensionsWidth*0.8,
        justifyContent:'space-between'
    },

    loginTypeStyle: {
        flexDirection: 'row',
        width: dimensionsWidth*0.8,
        // 绝对布局
        position:'absolute',
        bottom:10,
        alignItems:'center',
    },

    otherImageStyle:{
        width:60,
        height:60,
        borderRadius:30,
        marginLeft:8
    }
});
