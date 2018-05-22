import { AppRegistry } from 'react-native';
import App from './App';
import {StackNavigator} from 'react-navigation';
import FlatList from './page/FlatListDemo'
import SwipeableFlatList from './page/SwipeableFlatListDemo'
import SectionListDemo from './page/SectionListDemo'
const  AppRoot=StackNavigator({
    App:{
        screen: App
    },
    FlatList:{
        screen: FlatList,
        navigationOptions:{
            title:'FlatList'
        }

    },
    SwipeableFlatList: {
        screen: SwipeableFlatList,
        navigationOptions: {
            title: 'SwipeableFlatList'
        }
    },
        SectionListDemo:{
            screen:SectionListDemo,
            navigationOptions:{
                title:'SectionListDemo'
            }
        }

});
AppRegistry.registerComponent('HelloWorld', () => AppRoot);
