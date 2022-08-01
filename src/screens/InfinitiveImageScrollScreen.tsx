import React from 'react'
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';

export const InfinitiveImageScrollScreen = ()=> {

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
        <Image
            source={{uri:`https://picsum.photos/id/${item}/500/400`}}
            style={{width:'100%',height:400}}
        />
    );

    return (
        <View>
            <FlatList
                data={state}
                renderItem={({item})=>renderItem(item)}
                keyExtractor ={ (item,index) => item.toString() + index}
                onEndReached = {loadMore}
                onEndReachedThreshold = {0.5}

                ListFooterComponent={()=>(
                    <View style={{height:150}}>
                        <ActivityIndicator size={20}/>
                    </View>
                )}
            />
        </View>
    )
}
