import React, {Component} from 'react'

import {View, Text, TextInput,StyleSheet} from 'react-native'


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

    container: {padding:5,width:"100%", elevation:8, height:"100%", backgroundColor:"#f5f5f5"},
    inner: {flex:1, marginLeft:2.5, marginRight:2.5},
    input: {height:400,width:'100%',marginTop:0,color:'#f5f5f5',  borderBottomWidth:1}

})