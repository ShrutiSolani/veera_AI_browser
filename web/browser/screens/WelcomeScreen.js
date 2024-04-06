import React from 'react';
import { ImageBackground,StyleSheet } from 'react-native';

function WelcomeScreen(props) {
    return (
            <ImageBackground 
            style={{ alignSelf: 'center',width: 400, height: 400,}}
            source={require("../assets/logo-icon.png")}></ImageBackground>

    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
    },
    
})

export default WelcomeScreen;