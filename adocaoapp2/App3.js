import React, {Component} from 'react';
import { View, Text, StyleSheet, CheckBox } from 'react-native';
import Button from 'react-native-button';

export default class App3 extends Component {
	constructor(props, context) {
        super(props, context);
    }
    _handlePress() {
        alert('Aqui');
	}
	state() {
		this.checked;
	}
	render(){
		return(
			<View style={styles.conteiner}>
				<Text style={styles.h1}>Termos de Uso</Text>
				<Text>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
				officia deserunt mollit anim id est laborum.
				</Text>

				<View style={{ flexDirection: 'column'}}>
					<View style={{ flexDirection: 'row' }}>
						<CheckBox
						value={this.state.checked}
						onValueChange={() => this.setState({ checked: this.state.checked })}
						/>
						<Text style={{marginTop: 5}}> Li e aceito os termos de uso</Text>
					</View>
				</View>

				<Button
					containerStyle={{width:150, height:50, overflow:'hidden', borderRadius:4, backgroundColor: 'green'}}
					style={{fontSize: 20, color:'white',textAlign:'center', padding:10}}
					onPress={() => this._handlePress()}>
					Confirmar
				</Button>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	conteiner:{
		flex: 1,

    	alignItems: 'center',
		backgroundColor: "orange"
	},
	h1:{
		fontSize: 40,
		textAlign: 'center',
    	margin: 10,
	},
});
