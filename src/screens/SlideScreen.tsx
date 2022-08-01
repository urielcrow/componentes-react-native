import React from 'react';
import { View, Text , SafeAreaView, Dimensions, Image, LogBox, ImageSourcePropType} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

LogBox.ignoreLogs([
    "ViewPropTypes will be removed",
    // "ColorPropType will be removed",
])

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
];

const {height,width} = Dimensions.get('window');

export const SlideScreen = ()=> {

    const [indicador, setIndicador] = React.useState(0)

    const _renderItem = (item : Slide) => {
        return (
            <View style={{
                flex:1,
                backgroundColor:'white',
                borderRadius:5,
                padding:40,
                justifyContent:'center'
            }}>
                <Image 
                    source={item.img}
                    style={{
                        width : width - 50,
                        height: height - 300,
                        resizeMode:'center'
                    }}
                />
                <Text style={{fontSize:30,fontWeight:'bold'}}>{item.title}</Text>
                <Text style={{fontSize:16}}>{item.desc}</Text>
            </View>
        );
    }


    return (
        <SafeAreaView
            style={{
                flex:1,
                //paddingTop: 50
                backgroundColor:'white'
            }}
        >
            <Carousel
                data={items}
                renderItem={ ({item} : {item:Slide}) =>_renderItem(item) }
                sliderWidth={width}
                itemWidth={width}
                layout='default'
                onSnapToItem={index=>setIndicador(index)}
            />

            <Pagination 
                dotsLength={items.length}
                activeDotIndex={indicador}
            />
        </SafeAreaView>
    )
}
