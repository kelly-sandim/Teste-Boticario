import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { View, 
    Dimensions,
    Text, 
    StyleSheet, 
    TextInput, 
    Image, 
    TouchableOpacity, 
    TouchableHighlight,
    KeyboardAvoidingView, 
    StatusBar,
    Alert
} from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            TextInputName: '',
            TextInputEmail: '',
            TextInputPassword: '',       
            icEye: 'visibility-off', 
            showPassword: true 
        };         
    }

    changePwdType = () => {
        let newState;
        if (this.state.showPassword) {
            newState = {
                icEye: 'visibility',
                showPassword: false,
                TextInputPassword: this.state.TextInputPassword
            }
        } else {
            newState = {
                icEye: 'visibility-off',
                showPassword: true,
                TextInputPassword: this.state.TextInputPassword
            }
        }        
        this.setState(newState)
    };
    handlePassword = (TextInputPassword) => {
        let newState = {
            icEye: this.state.icEye,
            showPassword: this.state.showPassword,
            TextInputPassword: TextInputPassword
        }
        this.setState(newState);        
    };    

    updateEmailText = (text) => {  
        console.log(text);      
        let newState = {
            TextInputEmail: text
        }
        this.setState(newState);        
    };

    validate = () => {
        let text = this.state.TextInputEmail;
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(String(text).toLowerCase()) === false) {
          console.log("Email is Not Correct");          
          return false;
        }
        else {          
          console.log("Email is Correct");
          return true;
        }
    };
    
    checkTextInput = () => {        
        if(this.state.TextInputName != '') {
            if (this.state.TextInputEmail != '') {          
                if(this.validate())
                {
                    if (this.state.TextInputPassword != '') {
                        this.props.navigation.navigate('Login');
                    } else {
                        Alert.alert('Erro!', 'Por favor, preencha o campo de senha!');
                    }
                }
                else
                {
                    Alert.alert('Erro!', 'Por favor, preencha um e-mail válido!');
                }
            } else {
                Alert.alert('Erro!', 'Por favor, preencha o campo de e-mail!');
            }
        } else {
            Alert.alert('Erro!', 'Por favor, preencha o campo de nome!');
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
                        value={this.state.TextInputEmail}                        
                        onChangeText={this.updateEmailText}
                        placeholder="E-mail"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.input} />
                    <TouchableHighlight>
                        <View style={styles.passwordViewContainer}>
                            <TextInput                                 
                                placeholder="Senha"
                                placeholderTextColor="rgba(255,255,255,0.7)"                                
                                value={this.state.TextInputPassword}
                                onChangeText={this.handlePassword}
                                secureTextEntry={this.state.showPassword}
                                width={SCREEN_WIDTH - 100}
                                height={40}
                                labelActiveColor={componentColors.password_icon_color}
                                labelColor={componentColors.password_icon_color}
                                placeholderColor={componentColors.password_icon_color}
                                underlineColor={componentColors.password_icon_color}
                                underlineActiveColor={componentColors.password_icon_color}
                                underlineActiveHeight={2}
                                underlineHeight={1}                                
                                style={styles.passwordInput} />
                            <Icon style={styles.icon}
                                name={this.state.icEye}
                                size={30}
                                color={componentColors.password_icon_color}
                                onPress={this.changePwdType}
                            />
                        </View>
                    </TouchableHighlight>
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

    passwordInput: {
        flex: 1,
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
    },
    passwordViewContainer: {
        flexDirection: 'row'
    },
    icon: {
        position: 'absolute',
        top: 5,
        right: 10
    }
});


export const componentColors = {
    password_icon_color:'white',
};