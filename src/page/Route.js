import React from 'react';
import {Text} from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Category from './Category/Category';
import Icon from 'react-native-vector-icons/Feather';
import User from './User/User';
import Index from './Main/Index';
import More from './More';
import {Alert, BackHandler} from 'react-native';
import {Config} from '../Config';
import {Lng} from '../Language';

const Tab = createBottomTabNavigator();

export default class Route extends React.Component{

    render(){
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        color = Config.grayColor;
                        if(focused){
                            color = Config.primaryColor;
                        }
                        if(route.name == 'المستخدم')
                            return <Icon name="user" size={26} color={color} />;
                        if(route.name == 'الرئيسية')
                            return <Icon name="home" size={26} color={color} />;
                        if(route.name == 'المزيد')
                            return <Icon name="film" size={26} color={color} />;
                        if(route.name == 'الصف')
                            return <Icon name="grid" size={26} color={color} />;
                    },
                    tabBarLabel: ({ focused, color, size }) => {
                        color = Config.grayColor;
                        size  = 12;
                        if(focused){
                            color = Config.primaryColor;
                        }
                        return <Text style={{color:color, fontSize: size}}>{route.name}</Text>
                    }
                })}
               tabBarOptions={{
                   activeTintColor: 'tomato',
                   inactiveTintColor: Config.grayColor,
                   labelStyle:{color:Config.grayColor,fontsize:10},
                   tabStyle:{height:55,paddingTop:5,paddingBottom:10}
               }}
            >
                <Tab.Screen name={Lng.Home} data={this.props.data} component={Index} />
                <Tab.Screen name={Lng.Category} component={Category} />
                <Tab.Screen name={Lng.User} component={User} />
                {/*<Tab.Screen name={Lng.More} component={More} />*/}
            </Tab.Navigator>
        )
    }


}
