import React, { useState, useEffect, useCallback } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import { GiftedChat  } from 'react-native-gifted-chat';
import firebase from '../config/Firebase';

export default function ChatScreen() {
    const [messages, setMessages] = useState([]);

    const onSend = useCallback( async messages => {
        console.log(messages);
        
        setMessages(previousMessage => GiftedChat.append(previousMessage, messages));
        if(messages.length > 0){
            firebase.ref('/messages').push(messages[0]);
        }

        const botChat = await fetch("http://34.72.97.109/rasa/?fbclid=IwAR3MYSWpWHIGhqcpP2YtizhFGVovn1Qh5qfPv0mw2MMGLDzbnQP99_O7x_M");

        console.log(botChat);

    }, []);

    useEffect(()=>{
        firebase.ref('messages').once('value', snapshot => {
            setMessages(Object.values(snapshot.val()))
        });
    },[]);

    return (
        <SafeAreaView style={styles.container}>
            <GiftedChat style={styles.chatContainer}
            messages = {messages}
            user = {
                {
                    _id : 1,
                    name : "Hùng",
                    avatar : ""
                }
            }
            onSend = {messages=> onSend(messages)}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            width: '100%',
            height: '100%',
            flexDirection: 'column',
        },
        chatContainer: {
            width : '100%',
            flex : 1
        }
    }
)