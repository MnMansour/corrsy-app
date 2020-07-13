import React from 'react';
import News from './News';
import Content from './Content';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
export default class Article extends React.Component{
    render(){
        return(
            <Stack.Navigator>
                <Stack.Screen options={{headerShown:false}} name="News" component={News}/>
                <Stack.Screen options={{headerShown:false}} name="Content" component={Content}/>
            </Stack.Navigator>
        )
    }
}
