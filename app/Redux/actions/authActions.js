import { LOGIN_ATTEMPT ,LOGIN_SUCCESS ,LOGIN_FAILED} from './types';  //ActionType

import axios from 'axios';
 
export function loginAction (email , password){ 


    return (dispatch) =>{ 
        dispatch({type:LOGIN_ATTEMPT});  // custom middelware for async actions

    axios.post(`https://www.akfa-group.net/achieveYourDreamBackend/signin`
        , {email ,password ,type:'CLIENT'})

         .then(res => handleResponse(dispatch ,res.data)
         
         )
         .catch(error =>{ console.error(error)})


    }

    
        
    }

    const handleResponse =(dispatch ,data)=>{
        if(data){

            onLoginSuccess(dispatch ,data.user );
        
        

        }
        else
        {
            onLoginFailed(dispatch ,'user  not found '); 

        } 


        
    }
    const onLoginSuccess =(dispatch ,user)=>{
        dispatch ({
            type :LOGIN_SUCCESS ,
            user :user
        })
        

    }

    const onLoginFailed =(dispatch ,errorMessage)=>{
        dispatch({
            type :LOGIN_FAILED ,
            error :errorMessage
        })

    }





