import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native';

export default class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style = {styles.input} 
                    autoCapitalize="none" 
                    onSubmitEditing={() => this.passwordInput.focus()} 
                    autoCorrect={false} 
                    keyboardType='email-address' 
                    returnKeyType="next" 
                    placeholder='Email' 
                    placeholderTextColor='white'
                />

                <TextInput style = {styles.input}   
                    returnKeyType="go" 
                    ref={(input)=> this.passwordInput = input} 
                    placeholder='Password' 
                    placeholderTextColor='white' 
                    secureTextEntry
                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer:{
        backgroundColor: 'green',
        paddingVertical: 20
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
});
