import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/page/Splash';
import Route from './src/page/Route';
import {View} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Help from './src/page/Help';
import Profile from './src/page/User/Profile';
console.disableYellowBox = true;

const Stack = createStackNavigator();

export default class App extends React.Component{

    render() {
        return (
            <View style={{flex:1}}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Splash" options={{headerShown:false}} component={Splash} />
                        <Stack.Screen name="Help" options={{headerShown:false}} component={Help} />
                        <Stack.Screen name="Route"  options={{headerShown:false}} component={Route}  />
                    </Stack.Navigator>
                </NavigationContainer>
                <FlashMessage position="top" />
            </View>
        )

    }
}
