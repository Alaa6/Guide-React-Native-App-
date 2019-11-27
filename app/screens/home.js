

import React ,{Component} from 'react';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";

 import CardView from 'react-native-cardview' ;
 
 import {Navigation} from 'react-native-navigation' ;

 import HomeSideMenu from '../menu/HomeSideMenu';
 
 import Header from '../header/header';
 import Countries from '../header/Countries';
 import Search from '../header/search';

 import store from '../Redux/Store/Store';
import {Provider} from 'react-redux';


import {
  SafeAreaView,
  ActivityIndicator ,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Picker ,
  Dimensions ,
  Image
} from 'react-native';


   
 
const {width} =Dimensions.get('window');
const ViewTypes = {
  RIGHT: 0,
  LEFT:1 ,
 
};
Navigation.registerComponent('Guide.sidemenu' ,()=>HomeSideMenu)

Navigation.registerComponent('Guide.home' ,()=>HomeScreen)

class HomeScreen  extends Component{

  constructor (arge){

    super (arge);


  /*____________________data provider ____________________________ */

  let dataProvider = new DataProvider((r1 ,r2 ) => {   // define the data for each element
    return r1 !==r2 ;
   });


/*____________________layout provider ____________________________ */

   this._layoutProvider =new LayoutProvider(  //define the layout (height , width) of each element
   index => {
       if(index %2 === 0 )
           return ViewTypes.RIGHT;
       else 
          return ViewTypes.LEFT;
       
   },
 
   (type, dim) => {
       switch (type) {
           
          case ViewTypes.LEFT:
 
               dim.width = width/2;
               dim.height = 140;
               break;
 
         case ViewTypes.RIGHT:
 
               dim.width = width/2;
               dim.height = 140;
               break;
 
          
           default:
               dim.width = 0;
               dim.height = 0;
       }
   }
 );


 /*______________________ bind to row renderer _________________ */

      this._rowRenderer = this._rowRenderer.bind(this); 

/*___________________________ state  ________________________ */

     this.state = {
      user :'' ,
       dataProvider  : dataProvider.cloneWithRows(this._getData()),
        StateResult  :'' ,
     
      
   };

 
   
 


  }

 
  state ={
    page:1,
    loading : false ,
    result : 20 ,
  }
 /*_________________________go to side menu ________________________ */
  goToSideMenu =()=>
  {
    Navigation.mergeOptions('Guide.sidemenu',{
      sideMenu:{
        left:{
          Component :{
            id : 'Guide.sidemenu' ,
            name :'Guide.sidemenu'
          }
        }
      }

    });

  }
 
  

 updatedUser =(user) =>{
  this.setState({user : user})    
 }

 _getData () {
  var that = this;
  let email = new Array(20);
  let names = new Array(20); 
  let gender = new Array(20);
  //let gender =[];

   
   var url = `https://randomuser.me/api/?page=${this.state.page}&results=20` ;
  console.log("-----------url:"+url);


      fetch(url ,{method :'Get'})
      .then(function(response){ 
          return response.json();})

      .then(function(result){

         that.setState({ StateResult : result.results ,refreshing :false ,loading:false})
          console.log(that.state.StateResult);

          for (let i = 0; i < 20; i++) {
              //email[i] = result.results[i].email;  
              //names[i] = result.results[i].name.first;
              gender[i] =result.results[i].gender;  
             
          }
         // gender.push(result.results);
          

          
          
          
       })
       .catch(function(error){
           console.log("-------- error ------- "+ error);
           alert('result :'+ error);
       });

          return (gender)  ;

}

handleLoadMore =() => {
  this.setState({
      page :this.state.page +1,
     // result :this.state.result  ,
      loading:true ,

  }, () => {
      this._getData();
  });

};
renderFooter =() =>
    {
        return (
            <View >
                <ActivityIndicator />

            </View>
        );

    };

 /*__________________________Row Renderer _________________________________ */
 _rowRenderer (type  ,data) { // data  = data from data provider  from state
  //You can return any view here, CellContainer has no special significance
  switch (type) {
    
     case ViewTypes.RIGHT:
         return (
             <View style={styles.Header}>
                <CardView 
              // style ={styles.cardViewStyle}
               cardElevation={1}
               cardMaxElevation={2}
               cornerRadius={7}>

                 <Image source ={require('../images/facebook.png')} style={styles.imageStyle} />
                 <Text style={styles.cardTextStyle}> {data}</Text>


               </CardView>
              
        
             </View>
         );

         case ViewTypes.LEFT:
         return (
             <View style={styles.Header}>
                 <CardView 
              // style ={styles.cardViewStyle}
               cardElevation={1}
               cardMaxElevation={2}
               cornerRadius={7}>

                 <Image source ={require('../images/facebook.png')} style={styles.imageStyle} />
                 <Text style={styles.cardTextStyle}> {data}</Text>


               </CardView>

              
        
             </View>
         );

        
     default:
         return null;
 }
}
  render(){
      return(

        <View  style ={{backgroundColor :'white' ,flex :1}}>

          
          <Header title= 'الرئيسية' />
          <Countries />
          <Search />


        <RecyclerListView 
          layoutProvider = {this._layoutProvider}
          dataProvider ={this.state.dataProvider}
          rowRenderer = {this._rowRenderer}
          onEndReached ={this.handleLoadMore}
          onEndReachedThreshold={0}
          renderFooter ={this.renderFooter}
          
          /> 

                  
     </View>
         
          
          
      );
  }

}

const styles = StyleSheet.create({
    Header :{
        // flex :1 ,
        flexDirection :'row-reverse' ,
        alignItems :'center' ,
        justifyContent :'center' ,
        marginTop : 10 ,
       
       
    } ,
    textInputStyle :{

      width :  width/1.1 ,
      height : width/7 ,
      borderWidth :1.5 ,
      marginHorizontal :20 ,
    
      borderRadius :10 ,
      borderColor :'rgba(255,255,255 ,0.4)' ,
      fontSize :25 ,
      backgroundColor: 'rgba(0,0,128,0.1)' ,
     
  
    
    },
    MultiSelectStyle :{
        flexDirection :'row-reverse' ,
       
        marginTop : 20 ,
       
    } ,
    titlePageStyle :{
        paddingLeft : 40 ,
        paddingRight : 40 ,
        fontSize : 30 ,
        color : 'rgba(0,128,0 ,0.7)' ,

    } ,
    menuIconStyle :{
        marginHorizontal :40 ,
        color : 'rgba(0,128,0 ,0.7)' ,

        

    } ,

    bellIconStyle :{
        marginHorizontal :40 ,
        color :'rgb(255,99,71) ',

    } ,
    MultiSelect_1_Style :{
       padding :20 ,
       width : 100 ,
        color :'rgb(255,99,71) ',

    } ,
    cardViewStyle :{
      width : width/2.5 ,
      height :width/3 ,
      marginRight :20,
      marginLeft :20,
    
     
    } ,
    imageStyle :{
      width :width /5 ,
      height :width/5 ,
      marginHorizontal:37 ,
      marginTop : 10
      

    } ,
    cardTextStyle :{
      color :'rgba(0,0,0,0.6)' ,
      fontSize :18 ,
      textAlign :'center'

    } ,
    


})

export default HomeScreen;
