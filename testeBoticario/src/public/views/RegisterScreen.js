import React, { Component } from 'react';

import { View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Image, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    StatusBar
} from 'react-native';

export default class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            TextInputName: '',
            TextInputEmail: '',
            TextInputPassword: '',
        };        
    }

    checkTextInput = () => {
        //Handler for the Submit onPress
        if(this.state.TextInputName != '') {
            if (this.state.TextInputEmail != '') {          
                if (this.state.TextInputPassword != '') {
                    
                } else {
                    alert('Por favor, preencha o campo de senha!');
                }
            } else {
                alert('Por favor, preencha o campo de e-mail!');
            }
        } else {
            alert('Por favor, preencha o campo de nome!');
        }
    };

    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <StatusBar 
                    backgroundColor="#E53935"
                    barStyle="light-content"
                />
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../../assets/images/B.png')}/>                                        
                </View>
                <View style={styles.formContainer}>
                    <TextInput 
                        onChangeText={TextInputName => this.setState({ TextInputName })}                    
                        placeholder="Nome"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        style={styles.input}
                    />
                    <TextInput 
                        onChangeText={TextInputEmail => this.setState({ TextInputEmail })}
                        placeholder="E-mail"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.input} />
                    <TextInput 
                        onChangeText={TextInputPassword => this.setState({ TextInputPassword })}
                        placeholder="Senha"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="go"
                        secureTextEntry
                        style={styles.input} />
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.checkTextInput}>
                        <Text style={styles.buttonText}>REGISTRAR</Text>
                    </TouchableOpacity>
                </View>                
                <View style={styles.signupTextContainer}>
                    <Text style={styles.signupText}>Já possui uma conta? Então</Text>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('Login') } ><Text style={styles.signupButton}> faça o Login</Text></TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles =  StyleSheet.create({
    container: {
        backgroundColor: '#E53935',
        flex: 1,
        justifyContent: 'center'
    },
    logoContainer: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',    
    },    
    logo: {
        width: 100,
        height: 150
    },    
    formContainer: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#fff',
        paddingHorizontal: 10,
        borderRadius: 5
    },
    buttonContainer: {
        backgroundColor: '#a12b28',
        paddingVertical: 15,
        borderRadius: 5
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700'
    },
    forgotPasswordContainer: {       
       alignItems: 'center',
    },
    forgotPasswordText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: 17  
    },
    signupTextContainer: {
       flexGrow: 1,
       alignItems: 'flex-end',
       justifyContent: 'center',
       paddingVertical: 16,
       flexDirection: 'row'
    },
    signupText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '700'
    }
});