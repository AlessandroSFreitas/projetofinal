import React, { Component } from 'react';
import { AppRegistry, YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import Rotas from './src/Rotas';

export default class SharePets extends Component {
	render(){
		return(
			<Rotas />
		);
	}
}

AppRegistry.registerComponent('adocaoapp2', () => SharePets);
