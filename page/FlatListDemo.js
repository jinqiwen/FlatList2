

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    RefreshControl,
    ActivityIndicator
} from 'react-native';
const  CITY_NAMES=['北京', '上海', '广州', '深圳', '杭州', '苏州', '成都', '武汉', '郑州', '洛阳', '厦门', '青岛', '拉萨'];
export default  class FlatListDemo extends Component<Props>{
    constructor(props){
        super(props);
        this.state={
            isLoading:false,
            dataArray:CITY_NAMES
        }
    }
    loadData(refreshing){
        if(refreshing){
            this.setState={
                idLoading:false,
                dataArray:CITY_NAMES
            }

        }
        setTimeout(()=>{
            let dataArray=[];
            if(refreshing){
                for(let i =this.state.dataArray.length-1;i>0;i--){
                    dataArray.push(this.state.dataArray[i]);
                }
            }else {
                dataArray=this.state.dataArray.concat(CITY_NAMES);
            }


          this.setState({
              dataArray:dataArray,
              isLoading:false
          })
            
        },2000);

    }
    _renderItem(data){
        return <View style={styles.item}><Text style={styles.text}>{data.item}</Text>
    </View>
    }
    genIndictor(){
        return <View style={styles.indirectContainer}>
            <ActivityIndicator
                style={styles.indicator}
                size={'large'}
                color={'red'}
                animating={true}
            />
            <Text >正在加载更多</Text>
        </View>
    }
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataArray}
                    renderItem={(data)=>this._renderItem(data)}
                 /*   refreshing={this.state.isLoading}
                    onRefresh={()=>{
                        this.loadData();
                    }}*/
                    refreshControl={
                        <RefreshControl
                            title={'Loading'}
                            colors={['orange']}
                            titleColor={'red'}
                                refreshing={this.state.isLoading}
                            onRefresh={()=>{
                                this.loadData();
                            }}
                        />
                    }
                    ListFooterComponent={()=>this.genIndictor()}
                    onEndReached={()=>{
                        this.loadData()
                    }}
                />
                <Text style={styles.welcome}>hahahaahha</Text>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    indirectContainer:{
      alignItems:'center'
    },
    indicator:{
        color:'red',
        margin:10
    },
    item:{
     backgroundColor:'#169',
        height:200,
        marginRight:15,
        marginLeft:15,
        marginBottom:15,
        alignItems:'center',
        justifyContent:'center',
        width:300
},
    text:{
        color:'white',
        fontSize:20
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});