import React, { useContext } from 'react'
import { View, Text ,TouchableOpacity} from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = ()=> {

    const ref = React.useRef(true);
    const {setDarkTheme,setLightTheme,theme} = useContext(ThemeContext);

    const toggleTheme = ()=>{
        ref.current ? setDarkTheme() : setLightTheme();
        ref.current = !ref.current;
    }

    return (
        <View>
           <TouchableOpacity
           onPress={toggleTheme}
            activeOpacity={0.8}
            style={{
                width:150,
                height:50,
                borderRadius:20,
                backgroundColor:theme.colors.primary,
                justifyContent:'center',
                alignItems:'center'
            }}
           >
            <Text style={{
                color:theme.colors.background,
                fontSize:22
            }}>
                Light / Dark
            </Text>
           </TouchableOpacity>
        </View>
    )
}
