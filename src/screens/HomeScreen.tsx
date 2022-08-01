import React,{useContext} from 'react'
import { View, Text ,TouchableOpacity,FlatList} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
//import { useTheme } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Item{
    name:string,
    icon:string,
    component:string,
}

export const HomeScreen = ()=> {

    const {top} = useSafeAreaInsets();//Similar al SafeViewArea, este último corta el texto
    const navigation = useNavigation();
    //const {colors} = useTheme();//otra manera de usar los temas
    const {theme} = useContext(ThemeContext);

    return (
        <View style={{flex:1,margin:7}}>
            <FlatList
                data={Menu}
                renderItem={ ({item}) => Item(item,navigation,theme) }
                keyExtractor={ (item) => item.name }
                ListHeaderComponent ={ () => Hedear(top)}//permite cierto efecto en la lista, se visualiza en IOS
                ItemSeparatorComponent = { ()=> <View style={{borderBottomWidth:1,opacity:.4}}></View> }
            />
        </View>
    )
}

const Menu = [{
    name : 'Animacion 101',
    icon : 'cube',
    component : 'Animation101'
},
{
    name : 'Animacion 102',
    icon : 'cube',
    component : 'Animation102'
},
{
    name : 'Switch',
    icon : 'toggle-on',
    component : 'SwitchScreen'
},
{
    name : 'Alerts',
    icon : 'commenting',
    component : 'AlertsScreen'
},
{
    name : 'TextInput',
    icon : 'keyboard-o',
    component : 'TextInputScreen'
},
{
    name : 'PullToRefresh',
    icon : 'spinner',
    component : 'PullToRefresh'
},
{
    name : 'SectionList',
    icon : 'list',
    component : 'SectionList'
},
{
    name : 'ModalScreen',
    icon : 'window-restore',
    component : 'ModalScreen'
},
{
    name : 'InfinitiveScrollScreen',
    icon : 'circle-o-notch',
    component : 'InfinitiveScrollScreen'
},
{
    name : 'InfinitiveImageScrollScreen',
    icon : 'picture-o',
    component : 'InfinitiveImageScrollScreen'
},
{
    name : 'SlideScreen',
    icon : 'arrows-h',
    component : 'SlideScreen'
},
{
    name : 'ChangeThemeScreen',
    icon : 'star',
    component : 'ChangeThemeScreen'
}];

const Item = (item : Item, navigation : any, theme :any)=>{
   
    return (
        <TouchableOpacity
            onPress={()=>navigation.navigate(item.component)}
        >
            <View style={{flexDirection:'row',marginVertical:8}}>
                <FontAwesome name={item.icon} size={25} style={{marginRight:10}} color={theme.colors.primary}/>
                {/* <Text style={{color: colors.text}}>{item.name}</Text> */}
                <Text style={{color:theme.colors.text}}>{item.name}</Text>
                <View style={{flex:1}}></View>
                <FontAwesome name="arrow-right" size={25} style={{marginRight:10,color:'gray'}}  />
            </View>
        </TouchableOpacity>
    );
}

const Hedear = (top : number)=>{
    return(
        <View style={{ marginTop : top + 20,marginBottom:30 }}>
            <Text style={{fontSize: 35,fontWeight:'bold'}}>Opciones de menu</Text>
        </View>
    )
}

