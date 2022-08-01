import React from 'react';
import { Animated, PanResponder, View } from "react-native";

export const Animation102Screen = ()=> {

    const pan = React.useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
            [
                null,
                {
                    dx: pan.x, // x,y are Animated.Value
                    dy: pan.y,
                },
            ],
            {useNativeDriver: false}
        ),
        onPanResponderRelease: () => {
          Animated.spring(
            pan, // Auto-multiplexed
            { 
                toValue: { x: 0, y: 0 },
                useNativeDriver:true,
            },
          ).start();
        },
      });

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Animated.View {...panResponder.panHandlers} style={{width:100,height:100,backgroundColor:'blue',borderRadius:4,translateX:pan.getLayout().left,translateY:pan.getLayout().top}} />
        </View>
    )
}
