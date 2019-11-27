

import React ,{Component} from 'react';
import {Navigation} from 'react-native-navigation' ;
import CardView from 'react-native-cardview' ;
import {  Avatar } from 'react-native-elements';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions ,
  FlatList  ,
  Image ,
  ActivityIndicator

} from 'react-native';

import Header from '../header/header';
import Countries from '../header/Countries';
import Search from '../header/search';



const {width} =Dimensions.get('window');



class RestaurantScreen  extends Component{


    constructor (){
        super ();
        this.state ={

            StateResult : [],
            page:1,
            refreshing :false ,
            loading :false ,
            result :20 ,
          

        }
    }


    
    componentWillMount(){
        this.getDataList();
     }

     getDataList (){
        var that = this;
        var url = `https://randomuser.me/api/?page=${this.state.page}&results=20` ;
        console.log("-----------url:"+url);

        fetch(url ,{method :'Get'})
        .then(function(response){ 
            return response.json();})

        .then(function(result){
           that.setState({StateResult : [...that.state.StateResult,...result.results] ,refreshing :false ,loading:false})
            console.log(result.results);
    
         })
         .catch(function(error){
             console.log("-------- error ------- "+error);
             alert('result :'+ error);
         });


    }

    handleLoadMore =() =>{
        this.setState({
            page : this.state.page ++ ,
            loading:true ,
        
        } ,()=>{
            this.getDataList();

        });
    };

    handleRefresh =() => {
        this.setState({
            page :1,
            refreshing:true ,

        }, () => {
            this.getDataList();
        });

    };

    renderFooter =() =>
    {
        return (
            <View style={styles.louder}>
                <ActivityIndicator />

            </View>
        );

    };

    renderItem =({item})=>{
        return (
            <View style={styles.Container}>
                  <Image source ={{uri : item.picture.thumbnail}} style={styles.Image} />
                  <Text style ={styles.textStyle} >{item.email}</Text>

            </View>
            
          

        );

    }

  render(){

     return (
       <View style ={{flex :1 , justifyContent:'center' ,alignItems:'center'}}>
         <Header title= 'المطاعم' />
         <Countries />
         <Search />

         <FlatList 
         data ={this.state.StateResult}
         renderItem ={this.renderItem}
         refreshing ={this.state.refreshing}
         onRefresh ={this.handleRefresh}
         onEndReached ={this.handleLoadMore}
         onEndReachedThreshold ={0}
         ListFooterComponent ={this.renderFooter}
         />

        
       </View>
       
     );
   

   
  }

}

const styles = StyleSheet.create({

    Container :{
        flexDirection :'row-reverse' ,
        flex:1 ,
        marginVertical:7 ,
        borderWidth :1,
        borderColor:'#ccc' ,
        borderRadius :10 ,
        width : width/1.1 ,
        height: width/4 ,
        alignItems : 'center' ,
   
     

    } ,

    cardViewStyle :{
        width :width ,
        height :width/4
    } ,
    cardTextStyle :{
        color :'rgba(0,0,0,0.6)' ,
        fontSize :18 ,
        textAlign :'center'
  
      } ,
      avatar :{

        borderWidth :1,
        borderColor:'#ccc' ,
        borderRadius : 5 ,
        marginTop :10 ,
        marginRight :10
       

      } ,
      textStyle :{
          marginRight : 10 ,
          textAlign :'center'

      },
      Image :{
          width : width/4.5 ,
          height :width /4.5 ,
          borderRadius :10 ,
          marginRight : 10
          
         
           

      }
 
});

export default RestaurantScreen;
