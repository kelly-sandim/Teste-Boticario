import React, {Component} from 'react';

import {Animated, View, Text, Dimensions, TextInput,StyleSheet, Alert} from 'react-native';

import { Button } from "react-native-elements";

export default class ReplyComponent extends Component {

    constructor(){
        super()
        this.state = {
            TextInputTweet: '',
            isFocused : false,
            textLength: 0,
        }
        this.maxLength = 280;    
    }

    onChangeText(text){
        this.setState({
          textLength: this.maxLength - text.length
        });
    };

    checkTextInput = () => {        
        if (this.state.TextInputTweet != '') {                    
            this.props.navigation.navigate('Home');          
        } else {
            Alert.alert('Erro!', 'Não pode Tweetar sem escrever algo!');
        }
    };

    render(){

        const {isFocused} = this.state

        return (
            <View style={styles.container}>
                <Animated.View style={ styles.header }>
                    <Button icon={{ name: 'close', type: 'material', size:30, style: { color: "#292929", } }}
                            buttonStyle={styles.closeButton} onPress={() => this.props.navigation.navigate('Home')}/>
                    
                    <Button
                        disabled={!this.state.TextInputTweet}
                        buttonStyle={styles.tweetButton}
                        onPress={this.checkTextInput}
                        title="Tweetar"
                        textStyle={styles.tweetButtonText}
                    />                   
                </Animated.View>
                <View style={styles.inner} >        
                    <TextInput
                        onChangeText={TextInputTweet => this.setState({ TextInputTweet })}                    
                        multiline={true}
                        numberOfLines={5}
                        maxLength = {280}
                        onFocus={()=> this.setState({isFocused:true})}
                        
                        underlineColorAndroid='transparent' // remove automatic android black bottom border
                        style={[styles.input, {borderBottomColor: isFocused ? 'rgb(29, 161, 242)':'rgb(136, 153, 166)',}]}

                        placeholder="No que você está pensando agora?"
                        placeholderTextColor="rgb(136, 153, 166)"                        
                    />
                    <Text style={styles.counterText}>                         
                        {this.state.textLength}/280 
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {width:"100%", elevation:8, height:"100%", backgroundColor:"#f5f5f5"},
    inner: {flex:1, marginLeft:2.5, marginRight:2.5, color: '#424242'},
    input: {height:300,width:'100%',marginTop:-100,color:'#424242',  borderBottomWidth:1, padding: 10},
    header: {        
        backgroundColor: "white",
        borderBottomColor: '#dedede',
        minHeight: 30,
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
    counterText: {
        fontSize:10,
        color:'#424242',
        textAlign: 'right'
    }
})