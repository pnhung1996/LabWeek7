import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen({navigation}){
    return(
        <SafeAreaView style = {styles.container}>
            <Text>Chat App</Text>
            <TextInput style = {styles.textInputStyle} placeholder = "Nhập SDT"/>
            <TouchableOpacity onPress = {()=>{navigation.navigate('ChatScreen')}}>
                <Text>Go to chat</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            padding : 10,
            alignItems : 'center',
            justifyContent : 'center'
        },
        textInputStyle : {
            height : 40,
            width : '100%',
            padding : 5,
            textAlign: 'center',
            borderWidth : 1,

        }
    }
)