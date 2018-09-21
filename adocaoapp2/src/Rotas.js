import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import EntrarCadastrar from './components/EntrarCadastrar';
import Login from './components/Login';
import TermosUso from './components/TermosUso';

const Rotas = () => (
	<Router>
		<Scene key='root'>
			<Scene key='termosuso' component={TermosUso} initial />
			<Scene key='entrarcadastrar' component={EntrarCadastrar} />
			<Scene key='login' component={Login} />
		</Scene>
	</Router>
);

export default Rotas;
