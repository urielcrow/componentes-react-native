import React from 'react'
import { View, Text, FlatList } from 'react-native';

export const InfinitiveScrollScreen = ()=> {

    const [state, setstate] = React.useState([0,1,2,3,4,5]);

    const loadMore = ()=>{
        const newArray:number[] = [];
        for(let i = 0; i < 5;i++)
            newArray[i] = state.length + i;

        setstate(
            [
                ...state,
                ...newArray
            ]
        )
    }

    const renderItem = ( item : number ) => (
    <View style={{height:300,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30}}>{item}</Text>
    </View>
    );

    return (
        <View>
            <FlatList
                data={state}
                renderItem={({item})=>renderItem(item)}
                keyExtractor ={ (item,index) => item.toString() + index}
                onEndReached = {loadMore}
                onEndReachedThreshold = {0.5}
            />
        </View>
    )
}
