import {Navigation} from 'react-native-navigation'
import App from './App';


console.disableYellowBox = true;
Navigation.registerComponent('Guide.App' ,()=>App);

Navigation.events().registerAppLaunchedListener(()=>{
  
     
    Navigation.setRoot({
        root :{
          
                component:{
                  name :'Guide.App' 
                }
              
              
        }
    })
})


