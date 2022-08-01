import React from 'react'
import { View, Text, SectionList as Section} from 'react-native';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman"]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", ]
    }
];

export const SectionList = ()=> {
    return (
        <View style={{flex:1}}>
            <Section
             sections={casas}
             renderItem={({ item }) => <Text>{item}</Text>}
             keyExtractor={(item) => item }
             renderSectionHeader={({ section: { casa } }) => (
                <Text style={{fontSize:20,fontWeight:'bold',marginTop:20}}>{casa}</Text>
              )}
            />
        </View>
    )
}
