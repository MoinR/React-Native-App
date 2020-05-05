import React from 'react';
import LoginScreen from './Login';
import profileScreen from './ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {styles} from './styles'; 

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

