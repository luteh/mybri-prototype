import React from 'react';
import {TabNavigator} from 'react-navigation'
import {SplashScreen, LoginScreen} from './Screens'

export default class App extends React.Component {
    render() {
        const MainNavigator = TabNavigator({
                splash: {screen: SplashScreen},
                login: {screen: LoginScreen},
            },
            {
                // lazy property, to render one by one tab navigator screen when the screen is opened
                lazy: false,
                backBehavior: 'none',
                swipeEnabled: false,
                initialRouteName: 'splash',
                navigationOptions: {
                    tabBarVisible: false
                },
            }
        );
        return (
            <MainNavigator/>
        );
    }
}


