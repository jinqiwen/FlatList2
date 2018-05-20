import { AppRegistry } from 'react-native';
import App from './App';
import {StackNavigator} from 'react-navigation'
import FlatList from './page/FlatListDemo'
const  AppRoot=StackNavigator({
    App:{
        screen: App
    },
    FlatList:{
        screen: FlatList,
        navigationOptions:{
            title:'FlatList'
        }

    }
});
AppRegistry.registerComponent('HelloWorld', () => AppRoot);
