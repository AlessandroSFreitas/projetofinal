import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Imagem_react from './react_footer.png';
import Button from 'react-native-button';

export default class App extends Component {
    constructor(props, context) {
        super(props, context);
    }
    _handlePress() {
        alert('Aqui');
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={Imagem_react}></Image>
                <Text style={styles.welcome}>SharePets</Text>
                <View style={{padding:15}}>    
                    <Button
                        containerStyle={{width:150, height:50, overflow:'hidden', borderRadius:4, backgroundColor: 'green'}}
                        style={{fontSize: 20, color:'white', textAlign:'center', padding:10}}
                        onPress={() => this._handlePress()}>
                        Entrar
                    </Button>
                </View>
                <View style={{padding:15}}>
                    <Button
                        containerStyle={{width:150, height:50, overflow:'hidden', borderRadius:4, backgroundColor: 'green'}}
                        style={{fontSize: 20, color:'white',textAlign:'center', padding:10}}
                        onPress={() => this._handlePress()}>
                        Cadastrar
                    </Button>
                </View>    
            </View>      
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
});
