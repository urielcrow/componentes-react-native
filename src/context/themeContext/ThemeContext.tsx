import React,{ createContext, useState } from "react";
import {useColorScheme, AppState} from 'react-native';
import { ThemeState, themeReducer, lightTheme, ThemeAction, darkTheme } from './themeReducer';

interface ThemeContextProp{
    theme:ThemeState;
    setDarkTheme: ()=>void;
    setLightTheme: ()=>void;
}

export const ThemeContext = createContext({} as ThemeContextProp);


export const ThemeProvider = ( {children} : { children : JSX.Element | JSX.Element[]} )=>{

    const colorScheme = useColorScheme();//detectar cambios de tema en la configuración propia del telefono

   const [theme, dispatch] = React.useReducer(themeReducer, (colorScheme === 'dark') ? darkTheme :lightTheme)

   React.useEffect(() => {//detectar cambios de tema en la configuración propia del telefono
    (colorScheme === 'dark') ? setDarkTheme() : setLightTheme();
   }, [colorScheme])

   const ref = React.useRef<NodeJS.Timer>();
  

    //Extra!!!!!!
   //Como saber si la aplicación esta en primer o segundo plano, etc
   React.useEffect(()=>{
       AppState.addEventListener('change',(status)=>{
            console.log(status)
            if(status === "background"){
                console.log('hola background');
                ref.current = setInterval(contador,1000);
            }
            else if(status === "active"){
                console.log(ref.current);
                ref.current && clearInterval(ref.current);
            }

       });
   },[])

   const contador = ()=>{
        console.log('bye')
   }

    const setDarkTheme = ()=>{
        console.log('setDarkTheme');
        dispatch( {type:'set_dark_theme'} as ThemeAction );
    }
    
    const setLightTheme = ()=>{
        console.log('setLightTheme');
        dispatch( {type:'set_light_theme'} as ThemeAction );
    }

    return(
        <ThemeContext.Provider value={{
            setDarkTheme,
            setLightTheme,
            theme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}