/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './Login';
import profileScreen from './ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default class App extends React.Component {
  state = {

  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen name="login" component={LoginScreen} options={{ title: 'Login', headerMode : 'none',headerShown :false }} />
          <Stack.Screen name="profile" component={profileScreen} options={{ title: 'Profile', headerStyle: styles.header, headerTitleStyle: styles.headerTitle, headerTintColor: 'white' }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#007bff',
  },
  headerTitle: {
    color: 'white',
    textAlign: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  myText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 30
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
