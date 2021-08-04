import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screens/HomeScreen';
import IssLocationScreen from './Screens/IssLocationScreen';
import MeteorScreen from './Screens/MeteorScreen';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions = {{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="IssLocation" component={IssLocationScreen} />
          <Stack.Screen name="Meteor" component={MeteorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}