/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ChatScreen from './screens/ChatScreen';
import HomeScreen from './screens/HomeScreen';

const StackNavigation = createStackNavigator();

function App(){
  return (
      <SafeAreaView style = {{width : '100%', height : '100%'}}>
        <NavigationContainer style = {styles.container}>
          <StackNavigation.Navigator screenOptions = {{headerShown : false}}>
            <StackNavigation.Screen name  = "HomeScreen" component = {HomeScreen}/>
            <StackNavigation.Screen name  = "ChatScreen" component = {ChatScreen}/>
          </StackNavigation.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : 'column',
    width : '100%',
  }
});

export default App;
