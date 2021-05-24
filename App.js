import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createStackNavigator} from'@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Home';
import Login from './src/Login';
import Register from './src/Register';
import LoginJajal from './LoginJajal';
import MainMenu from './src/MainMenu';
import HistoryLaporan from './src/HistoryLaporan';
import Laporan from './src/Laporan';

const Stack = createStackNavigator();
 class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Home" component={Home}/>
           <Stack.Screen name="Register" component={Register}/> */}
           <Stack.Screen name="Login" component={Login}/>
           {/* <Stack.Screen name="MainMenu" component={MainMenu}/>
           <Stack.Screen name="HistoryLaporan" component={HistoryLaporan}/>
           <Stack.Screen name="Laporan" component={Laporan}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;
