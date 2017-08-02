import React, {Component} from 'react'
import {Image} from 'react-native'

class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('login');
        }, 3000)
    }

    render() {
        return (
            <Image
                style={styles.backgroundImageStyle}
                source={require('../images/splash_screen.png')}
            />
        )
    }
}

const styles = {
    backgroundImageStyle: {
        flex: 1,
        resizeMode: 'stretch',
        width: null,
        height: null
    }
};

export {SplashScreen}