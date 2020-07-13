import React from 'react';
import {Header, Icon} from 'react-native-elements';
import {BackHandler, ScrollView, View} from 'react-native';
import MyWeb from '../../component/MyWeb';
import UrlWebView from '../../component/UrlWebView';
import {Config} from '../../Config';


export default class Content extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(): void {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }
    componentWillUnmount(): void {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }
    onBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }
    render(){
        return (
            <View style={{flex:1}}>
                <Header
                    containerStyle={{height:60}}
                    backgroundColor={Config.primaryColor}
                    leftComponent={<Icon name='ios-arrow-back' color='#fff' type='ionicon' onPress={()=>{this.props.navigation.goBack();}} />}
                    leftContainerStyle={{bottom:14, left:14}}
                    centerComponent={{text:this.props.route.params.title,numberOfLines:1,style:{color:'#fff',fontFamily:'robotobold'}}}
                    centerContainerStyle={{bottom:13}}
                />
                <UrlWebView url={this.props.route.params.url}/>
            </View>
        )
    }
}
