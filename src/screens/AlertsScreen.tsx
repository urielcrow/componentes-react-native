import React from 'react'
import { View, Text,Alert, Button } from 'react-native';
import prompt from 'react-native-prompt-android';

export const AlertsScreen = ()=> {

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    const createThreeButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    const propTerceros = ()=>
    prompt(
        'Enter password',
        'Enter your password to claim your $1.5B in lottery winnings',
        [
         {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
         {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
        ],
        {
            type: 'secure-text',
            cancelable: false,
            defaultValue: 'test',
            placeholder: 'placeholder'
        }
    );

    return (
        <View>
            <Text>Alert</Text>
            <Button
                onPress={createTwoButtonAlert}
                title={"1-Button Alert"}
            />

             <Button
                onPress={createThreeButtonAlert}
                title={"2-Button Alert"}
            />

            <Button
                onPress={propTerceros}
                title={"Promp de terceros"}
            />

        </View>
    )
}
