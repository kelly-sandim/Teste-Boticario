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

import { createAppContainer } from 'react-navigation';

import UserRouter from '../../users/routes/UserRouter';

export default class Login extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            TextInputEmail: '',
            TextInputPassword: '',
        };        
    }
    
    checkTextInput = () => {
        //Handler for the Submit onPress
        if (this.state.TextInputEmail != '') {          
          if (this.state.TextInputPassword != '') {
            //createAppContainer(UserRouter);
            this.props.navigation.navigate('Home');
          } else {
            alert('Por favor, preencha o campo de senha!');
          }
        } else {
            alert('Por favor, preencha o campo de e-mail!');
        }
    };

    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <StatusBar 
                    backgroundColor="#2e87c2"
                    barStyle="light-content"
                />
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../../assets/orangeCar.png')}/>
                    <Text style={styles.logoText}>Liste Meus Carros!</Text>
                </View>
                <View style={styles.formContainer}>
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
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.forgotPasswordContainer}>
                    <TouchableOpacity onPress= { () => this.props.navigation.navigate('ForgotPassword') }><Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text></TouchableOpacity>
                </View>
                <View style={styles.signupTextContainer}>
                    <Text style={styles.signupText}>Não tem uma conta ainda? Então</Text>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('Register') }><Text style={styles.signupButton}> Registre-se</Text></TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles =  StyleSheet.create({
    container: {
        backgroundColor: '#3498db',
        flex: 1,
        justifyContent: 'center'
    },
    logoContainer: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',    
    },    
    logo: {
        width: 300,
        height: 121
    },
    logoText: {
        fontSize: 18,
        color: 'rgba(255,255,255,0.7)'
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
        borderRadius: 25
    },
    buttonContainer: {
        backgroundColor: '#276b98',
        paddingVertical: 15,
        borderRadius: 25
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