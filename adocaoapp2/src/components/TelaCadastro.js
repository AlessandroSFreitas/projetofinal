import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class TelaCadastro extends Component {
	render(){
		return(
			<View style={styles.stylePage}>
				<TextInput

				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	stylePage:{
		flex: 1,
    	alignItems: 'center',
		backgroundColor: 'orange'
	},
});
