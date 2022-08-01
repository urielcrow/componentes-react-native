import React, { memo } from 'react'
import { View, Text,Switch } from 'react-native'
import CustomeSwitch from '../components/CustomeSwitch';

export const SwitchScreen = memo(()=> {

    
    const [state, setstate] = React.useState({
        opcion1:false,
        opcion2:false,
        opcion3:false,
        opcion4:false
    })

    React.useEffect(() => {
        console.log('cargado')
        return () => {
            console.log('desmontando')
        }
    }, [])
    
    

    const toggle = (newState : boolean, name : keyof typeof state)=>{//
        console.log(`${name}: ${newState}`)
        setstate({
            ...state,
            [name] : newState
        });
    }

    return (
        <View>
            
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text>Primera opción</Text>
                <CustomeSwitch isOn={state.opcion1} onValueChange={(resp)=>toggle(resp,"opcion1")}/>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text>Segunda opción</Text>
                <CustomeSwitch isOn={state.opcion2} onValueChange={(resp)=>toggle(resp,"opcion2")}/>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text>Tercera opción</Text>
                <CustomeSwitch isOn={state.opcion3} onValueChange={(resp)=>toggle(resp,"opcion3")}/>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text>Cuarta opción</Text>
                <CustomeSwitch isOn={state.opcion4} onValueChange={(resp)=>toggle(resp,"opcion4")}/>
            </View>

        </View>
    )
})
