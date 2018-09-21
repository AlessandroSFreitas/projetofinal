import React, { Component } from 'react';
import { AppRegistry, YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import { Router, Scene } from 'react-native-router-flux';

import EntrarCadastrar from './EntrarCadastrar';
import Login from './Login';
import TermosUso from './TermosUso';

export default class SharePets extends Component {
	render(){
		return(
			<Router>
				<Scene key='root'>
					<Scene key='termosuso' component={TermosUso} initial />
					<Scene key='entrarcadastrar' component={EntrarCadastrar} />
					<Scene key='login' component={Login} />
				</Scene>
			</Router>
		);
	}
}

AppRegistry.registerComponent('adocaoapp2', () => SharePets);
