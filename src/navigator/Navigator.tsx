import React , {useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { 
    AlertsScreen,HomeScreen,
    Animation101Screen,
    Animation102Screen,
    SwitchScreen,
    TextInputScreen,
    PullToRefresh,
    SectionList,
    ModalScreen,
    InfinitiveScrollScreen,
    InfinitiveImageScrollScreen,
    SlideScreen,
    ChangeThemeScreen} from '../screens/index.js';

const Stack = createStackNavigator();

export const Navigator = () => {

    const {theme} = useContext(ThemeContext);

    return (

        <NavigationContainer
            theme={theme}
        >
            <Stack.Navigator
                screenOptions={{
                    headerShown:false
                }}
            >
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Animation101" component={Animation101Screen} />
                <Stack.Screen name="Animation102" component={Animation102Screen} />
                <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
                <Stack.Screen name="AlertsScreen" component={AlertsScreen} />
                <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
                <Stack.Screen name="PullToRefresh" component={PullToRefresh} />
                <Stack.Screen name="SectionList" component={SectionList} />
                <Stack.Screen name="ModalScreen" component={ModalScreen} />
                <Stack.Screen name="InfinitiveScrollScreen" component={InfinitiveScrollScreen} />
                <Stack.Screen name="InfinitiveImageScrollScreen" component={InfinitiveImageScrollScreen} />     
                <Stack.Screen name="SlideScreen" component={SlideScreen} /> 
                <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} /> 

            </Stack.Navigator>
        </NavigationContainer>
    )
}
