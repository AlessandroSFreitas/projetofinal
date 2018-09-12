import {AppRegistry} from 'react-native';
import App from './App';
//import PageInit from './login/page-init';
import {name as appName} from './app.json';
//import {} from 'react-native-router-flux';

AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => PageInit);
