import React from 'react';
import {View, Animated, Button, Easing} from 'react-native';

export const Animation101Screen = ()=> {

    const opacity = React.useRef(new Animated.Value(0.3)).current;
    const top = React.useRef(new Animated.Value(-100)).current;

    const fadeIn = ()=>{
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 300,
                useNativeDriver:true
            }
        ).start();

        Animated.timing(
            top,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver:true,
                easing:Easing.bounce
            }
        ).start();
    }

    const fadeOut = ()=>{
        Animated.timing(
            opacity,
            {
                toValue: 0.3,
                duration: 300,
                useNativeDriver:true
            }
        ).start();

        Animated.timing(
            top,
            {
                toValue: -100,
                duration: 300,
                useNativeDriver:true,
            }
        ).start();
    }

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Animated.View style={{width:100,height:100,backgroundColor:'red',marginBottom:20,opacity,translateY:top}} />

            <View style={{flexDirection:'row'}}>
                <Button 
                    title="FadeIn"
                    onPress={fadeIn}
                />
                <View style={{marginRight: 30}}></View>
                <Button
                    title="FadeOut"
                    onPress={fadeOut}
                />
            </View>
           
        </View>
    )
}
