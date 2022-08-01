import React from 'react'
import { View, Text, ScrollView,RefreshControl } from 'react-native'


export const PullToRefresh =()=>{

    const [state, setstate] = React.useState(false);

    const onRefresh = ()=>{
        setstate(true);
        setTimeout (()=>{
            setstate(false);
        },2500) 
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl 
                    refreshing = {state}
                    onRefresh={onRefresh}
                    // progressViewOffset={150}
                />
            }
        >
            <View>
                <Text>PullToRefresh</Text>
            </View>
        </ScrollView>
    )
}
