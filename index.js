/**
 * @format
 */
if (__DEV__) {
  import('./src/config/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

import {AppRegistry} from 'react-native';
import App from './src';
import Main from './src/Pages/Main';
import NewEntry from './src/Pages/NewEntry';
import Report from './src/Pages/Report';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => NewEntry);
