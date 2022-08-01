import React from 'react'
import { View, Text,TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableNativeFeedback, Keyboard, ScrollView} from 'react-native'


export const TextInputScreen = ()=> {

    const [nameFocus, setNameFocus] = React.useState(false)

   const [state, setstate] = React.useState({
       name:'',
       alias:'',
       mail:'',
       phone:''
   })

    const onChange = (value:string,name: keyof typeof state)=>{
        setstate({
            ...state,
            [name]:value
        });
    }

    const focus = ()=>{
        setNameFocus(true);
    }

    const blur = ()=>{
        if(!state.name)
            setNameFocus(false);
    }

    return (
        // <KeyboardAvoidingView
        //     behavior={Platform.OS === "ios" ? "padding" : "height"}
        // >

            <TouchableNativeFeedback onPress={Keyboard.dismiss}>
                <ScrollView>
                    <View>

                        <View>
                            <TextInput
                                style={styles.input}
                                //placeholder="Nombre"
                                autoCorrect = {false}
                                autoCapitalize="words"
                                onChangeText={(val)=>onChange(val,'name')}
                                onFocus ={focus}
                                onBlur ={blur}
                            />
                            <Text style={{position:'absolute',top: nameFocus ? -3 : 20,left:25}}>Nombre...</Text>

                        </View>
                        

                        <TextInput
                            style={styles.input}
                            placeholder="Alias"
                            onChangeText={(val)=>onChange(val,'alias')}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Mail"
                            autoCorrect = {false}
                            keyboardType="email-address"
                            onChangeText={(val)=>onChange(val,'mail')}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Teléfono"
                            keyboardType="phone-pad"
                            onChangeText={(val)=>onChange(val,'phone')}
                        />
                    
                    </View>
                    <View style={{height:50}}></View>
                </ScrollView>
            </TouchableNativeFeedback>
        // </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
