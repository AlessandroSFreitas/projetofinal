import {AppRegistry} from 'react-native';
import App from './App';
import App2 from './App2';
import {name as appName} from './app.json';
//import {} from 'react-native-router-flux';

AppRegistry.registerComponent(appName, () => App2);

