import React from 'react';
import {BackHandler, FlatList, View} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import Product from '../../component/Product';
import { ActivityIndicator } from 'react-native';
import {getCategory} from '../../Functions';
import {Config} from '../../Config';



class Archive extends React.PureComponent{
    state = {
        data : null
    }
    constructor(props){
        super(props)
    }

    onBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    async componentDidMount(): void {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
        this.setState({data: null});
        this.setState({data : await getCategory(this.props.route.params.catId)});
        this._unsubscribe = this.props.navigation.addListener('focus', async () => {
            this.setState({data: null});
            this.setState({data : await getCategory(this.props.route.params.catId)});
        });
    }

    async componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
        await this._unsubscribe();
    }

    render(){
        return (
            <View style={{backgroundColor:Config.background,flex:1}}>
                <Header
                    containerStyle={{height:60}}
                    backgroundColor={Config.primaryColor}
                    leftComponent={<Icon name='ios-arrow-back' color='#fff' type='ionicon' onPress={()=>{this.props.navigation.goBack();}} />}
                    leftContainerStyle={{bottom:14,left:14}}
                    centerComponent={{text:this.props.route.params.title,numberOfLines:1,style:{color:'#fff',fontFamily:'robotobold'}}}
                    centerContainerStyle={{bottom:13}}
                    //rightComponent={<Icon name='filter' color='#fff' type='foundation' onPress={()=>{}} />}
                    //rightContainerStyle={{bottom:14, right: 14}}
                />
                {
                this.state.data != null ?
                    <FlatList style={{marginBottom:5,marginTop:15}} data={this.state.data} renderItem={({item})=>{
                        return (
                            <Product navigation={this.props.navigation} item={item}/>
                        )
                    }}/>
                :
                    <ActivityIndicator style={{alignSelf:'center',top:100}}/>
                }
            </View>
        );
    }
}

export default Archive;


