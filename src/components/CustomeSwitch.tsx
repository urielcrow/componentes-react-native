import React from 'react'
import { View, Text,Switch } from 'react-native'

interface Props{
    onValueChange:(value:boolean)=>void,
    isOn?:boolean
}

export default function CustomeSwitch( { isOn = false, onValueChange } : Props) {

    const [state, setstate] = React.useState(isOn);

    const toggle = ()=>{
        setstate(!state);
        onValueChange(!state);
    }

    return (
        <Switch
            trackColor = {{false: "#767577", true: "#81b0ff" }}
            thumbColor={state ? "#f5dd4b" : "#f4f3f4"} 
            onValueChange={ toggle }
            value={state}
        />
    )
}
