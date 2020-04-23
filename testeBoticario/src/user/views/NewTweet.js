import React, {Component} from 'react';

import {Animated, View, ScrollView, Text, Dimensions, Image, TextInput,StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Button, Card } from "react-native-elements";

const { height, width } = Dimensions.get("window");

export default class ReplyComponent extends Component {

    constructor(){
        super()
        this.state ={
            isFocused : false
        }
    }

    render(){

        const {isFocused} = this.state

        return (
            <View style={styles.container}>
                <Animated.View style={ styles.header }>
                    <Button icon={{ name: 'close', type: 'material', size:30, style: { color: "#292929", } }}
                            buttonStyle={styles.closeButton} onPress={() => this.props.navigation.navigate('Home')}/>
                    
                    <Button
                        buttonStyle={styles.tweetButton}
                        onPress={() => navigation.dispatch(NavigationActions.back())}
                        title="Tweetar"
                        textStyle={styles.tweetButtonText}
                    />                   
                </Animated.View>
                <View style={styles.inner} >        
                    <TextInput
                        multiline={true}
                        numberOfLines={5}
                        //disableFullscreenUI={true}
                        maxLength = {280}
                        onFocus={()=> this.setState({isFocused:true})}
                        
                        underlineColorAndroid='transparent' // remove automatic android black bottom border
                        style={[styles.input, {borderBottomColor: isFocused ? 'rgb(29, 161, 242)':'rgb(136, 153, 166)',}]}

                        placeholder="No que você está pensando agora?"
                        placeholderTextColor="rgb(136, 153, 166)"
                        />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {width:"100%", elevation:8, height:"100%", backgroundColor:"#f5f5f5"},
    inner: {flex:1, marginLeft:2.5, marginRight:2.5},
    input: {height:300,width:'100%',marginTop:-100,color:'#f5f5f5',  borderBottomWidth:1, padding: 10},
    header: {        
        backgroundColor: "white",
        borderBottomColor: '#dedede',
        minHeight: 20,
        flex: 0.1,
        borderColor: "white",
        borderWidth: 0,        
        zIndex: 1000000000,
        elevation:8
    },
    closeButton: {
        backgroundColor: "transparent",
        position: "absolute",
        top: 3,
        left: -10,
        padding: 20,
        paddingLeft: 15
    },
    
    tweetButton: {
        position: "absolute",
        backgroundColor: "#E53935",
        borderColor: "#E53935",
        borderWidth: 1,
        borderRadius: 25,
        padding: 6,
        width: 100,
        top: 20,
        right: 20
    },
    tweetButtonText: {
        color: "white",
        fontWeight: "bold",
        backgroundColor: "transparent",
        fontSize: 14
    },
})